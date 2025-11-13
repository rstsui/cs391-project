# backend/models/user.py

from pydantic import BaseModel, EmailStr
from datetime import datetime
from typing import Optional

class UserCreate(BaseModel):
    email: EmailStr
    password: str
    role: Optional[str] = "student"

class UserInsert(BaseModel):
    email: EmailStr
    hashed_password: str  # ✅ must match DB column name
    role: Optional[str] = "student"

class UserOut(BaseModel):
    id: int
    email: EmailStr
    role: str
    created_at: datetime

    class Config:
        orm_mode = True
