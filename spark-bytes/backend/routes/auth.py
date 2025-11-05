# backend/routes/auth.py
import os
from datetime import datetime, timedelta
from typing import Optional
from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from jose import jwt, JWTError
from passlib.hash import bcrypt
from sqlalchemy.orm import Session

from database import SessionLocal
from models.user import User
from schemas.user import UserCreate, UserLogin, UserOut  # ← NEW

JWT_SECRET = os.getenv("JWT_SECRET", "CHANGE_ME_IN_PROD")
ALGORITHM = "HS256"
ACCESS_TOKEN_MIN = int(os.getenv("ACCESS_TOKEN_MIN", "1440"))

router = APIRouter(prefix="/auth", tags=["Auth"])
security = HTTPBearer()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

def create_token(sub: str, extra: Optional[dict] = None) -> str:
    payload = {"sub": sub, "exp": datetime.utcnow() + timedelta(minutes=ACCESS_TOKEN_MIN)}
    if extra:
        payload.update(extra)
    return jwt.encode(payload, JWT_SECRET, algorithm=ALGORITHM)

@router.post("/register", response_model=UserOut, status_code=201)
def register(payload: UserCreate, db: Session = Depends(get_db)):  # ← schema, not dict
    if db.query(User).filter(User.email == payload.email).first():
        raise HTTPException(status_code=400, detail="Email already registered")

    user = User(
        email=payload.email,
        hashed_password=bcrypt.hash(payload.password),  # ← hash the string
        role=payload.role,
    )
    db.add(user)
    db.commit()
    db.refresh(user)
    return user

@router.post("/login")
def login(payload: UserLogin, db: Session = Depends(get_db)):  # ← schema, not dict
    user = db.query(User).filter(User.email == payload.email).first()
    if not user or not bcrypt.verify(payload.password, user.hashed_password):
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid credentials")

    token = create_token(sub=user.email, extra={"uid": user.id, "role": user.role})
    return {"access_token": token, "token_type": "bearer"}

# reusable dependency to protect any route
def get_current_user(
    creds: HTTPAuthorizationCredentials = Depends(security),
    db: Session = Depends(get_db),
) -> User:
    token = creds.credentials
    try:
        payload = jwt.decode(token, JWT_SECRET, algorithms=[ALGORITHM])
        email = payload.get("sub")
        if not email:
            raise HTTPException(status_code=401, detail="invalid token payload")
        user = db.query(User).filter(User.email == email).first()
        if not user:
            raise HTTPException(status_code=401, detail="user not found")
        return user
    except JWTError:
        raise HTTPException(status_code=401, detail="invalid or expired token")