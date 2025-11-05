from pydantic import BaseModel, EmailStr, constr
from typing import Literal

class UserCreate(BaseModel):
    email: EmailStr
    # bcrypt limit is 72 bytes; keep headroom
    password: constr(min_length=8, max_length=64)
    role: Literal["student", "organizer", "admin"] = "student"

class UserLogin(BaseModel):
    email: EmailStr
    password: constr(min_length=8, max_length=64)

class UserOut(BaseModel):
    id: int
    email: EmailStr
    role: str

    class Config:
        from_attributes = True
