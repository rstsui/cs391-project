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

@router.post("/register")
def register(payload: dict, db: Session = Depends(get_db)):
    email = payload.get("email")
    password = payload.get("password")
    role = payload.get("role", "student")

    if not email or not password:
        raise HTTPException(status_code=400, detail="email and password required")
    if db.query(User).filter(User.email == email).first():
        raise HTTPException(status_code=400, detail="email already registered")

    user = User(email=email, hashed_password=bcrypt.hash(password), role=role)
    db.add(user)
    db.commit()
    db.refresh(user)
    return {"id": user.id, "email": user.email, "role": user.role}

@router.post("/login")
def login(payload: dict, db: Session = Depends(get_db)):
    email = payload.get("email")
    password = payload.get("password")

    user = db.query(User).filter(User.email == email).first()
    if not user or not bcrypt.verify(password, user.hashed_password):
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="invalid credentials")

    token = create_token(sub=user.email, extra={"uid": user.id, "role": user.role})
    return {"access_token": token, "token_type": "bearer"}

# reusable dependency to protect any route
def get_current_user(
    creds: HTTPAuthorizationCredentials = Depends(security),
    db: Session = Depends(get_db)
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
