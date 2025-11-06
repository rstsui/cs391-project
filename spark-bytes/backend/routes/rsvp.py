# backend/routes/rsvp.py
from fastapi import APIRouter, HTTPException
from pydantic import BaseModel, Field, EmailStr
from supabase_client import supabase 

router = APIRouter(prefix="/rsvps", tags=["rsvps"])

class RSVPCreate(BaseModel):
    name: str = Field(..., min_length=1, max_length=200)
    email: EmailStr
    food_item: str | None = None
    quantity: int = Field(1, ge=1)

@router.post("/{event_id}", status_code=201)
def create_rsvp(event_id: int, payload: RSVPCreate):
    """
    Create an RSVP for the given event_id in Supabase table 'rsvps'.
    """
    # insert into 'rsvps'
    res = supabase.table("rsvps").insert({
        "event_id": event_id,
        "name": payload.name,
        "email": payload.email,
        "food_item": payload.food_item,
        "quantity": payload.quantity,
    }).execute()

    # supabase-py returns { data: [...], count: None }
    data = getattr(res, "data", None)
    if not data:
        raise HTTPException(status_code=500, detail="Failed to create RSVP.")

    return {
        "success": True,
        "message": "Reservation created!",
        "rsvp": data[0], 
    }
