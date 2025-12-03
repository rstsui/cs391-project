# backend/routes/rsvp.py
from fastapi import APIRouter, HTTPException
from supabase_client import supabase
from models.rsvp import RSVPCreate, RSVPOut

router = APIRouter(tags=["RSVP"])  

@router.post("/{event_id}", response_model=RSVPOut, status_code=201)
def create_rsvp(event_id: int, payload: RSVPCreate):
    """Create an RSVP for a specific event in Supabase."""
    data = payload.model_dump()
    data["event_id"] = event_id

    res = supabase.table("rsvps").insert(data).execute()

    if not res.data:
        raise HTTPException(status_code=500, detail="Failed to create RSVP")

    return res.data[0]
