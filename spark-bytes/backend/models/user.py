# backend/models/user.py
from pydantic import BaseModel, EmailStr, Field
from datetime import datetime

# What the client sends to create a user (plaintext password; you hash it server-side)
class UserCreate(BaseModel):
    email: EmailStr
    password: str = Field(..., min_length=8)
    role: str = Field(default="student", min_length=1)

# If you already have a hash (e.g., you hash inside the route) and need a shape to insert into DB
class UserInsert(BaseModel):
    email: EmailStr
    hashed_password: str
    role: str = Field(default="student", min_length=1)

# What you return to the client (never include hashed_password)
class UserOut(BaseModel):
    id: int
    email: EmailStr
    role: str
    created_at: datetime