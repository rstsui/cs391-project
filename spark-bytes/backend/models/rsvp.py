from pydantic import BaseModel, EmailStr, Field
from datetime import datetime
from typing import Optional

class RSVPCreate(BaseModel):
    name: str
    email: EmailStr
    food_item: Optional[str] = None
    quantity: int = Field(..., ge=1, description="Must be at least 1")

class RSVPOut(RSVPCreate):
    id: int
    event_id: int
    created_at: datetime  # ✅ helps show when RSVP was made

    class Config:
        orm_mode = True  # ✅ allows ORM/DB responses to convert cleanly
