from pydantic import BaseModel, EmailStr, Field

class RSVPCreate(BaseModel):
    name: str
    email: EmailStr
    food_item: str | None = None
    quantity: int = Field(..., ge=1)

class RSVPOut(RSVPCreate):
    id: int
    event_id: int
