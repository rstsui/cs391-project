from fastapi import APIRouter, HTTPException
from supabase_client import supabase
from models.event import EventCreate, EventOut  
import json

router = APIRouter()

# GET all events
@router.get(
    "/",
    summary="Get all events",
    response_model=list[EventOut]
)
def list_events():
    """Fetch all events from the Supabase 'events' table, sorted by newest first."""
    res = supabase.table("events").select("*").order("created_at", desc=True).execute()
    return res.data or []


# POST a new event
@router.post(
    "/",
    status_code=201,
    summary="Create a new event",
    response_model=EventOut
)
def create_event(payload: EventCreate):
    """
    Insert a new event into the Supabase 'events' table.
    Automatically serializes datetime to ISO format.
    """
    # Convert Pydantic model → plain dict (JSON serializable)
    data = json.loads(payload.model_dump_json())

    # Insert into Supabase
    res = supabase.table("events").insert(data).execute()

    # Error handling
    if not res.data:
        raise HTTPException(status_code=500, detail="Failed to create event.")

    # Return the created event
    return res.data[0]
