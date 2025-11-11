from fastapi import APIRouter, HTTPException
from supabase_client import supabase
from models.rsvp import RSVPCreate

router = APIRouter()

@router.post("/{event_id}", status_code=201, summary="Create Rsvp")
def create_rsvp(event_id: int, payload: RSVPCreate):
    res = supabase.table("rsvps").insert({
        "event_id": event_id,
        **payload.model_dump(),
    }).execute()
    if not res.data:
        raise HTTPException(status_code=500, detail="Failed to create RSVP.")
    return res.data[0]
