from fastapi import APIRouter, HTTPException
from supabase_client import supabase
from models.event import EventCreate 

router = APIRouter()

@router.get("/", summary="Get Events")
def list_events():
    res = supabase.table("events").select("*").order("created_at", desc=True).execute()
    return res.data or []

@router.post("/", status_code=201, summary="Create Event")
def create_event(payload: EventCreate):
    res = supabase.table("events").insert(payload.model_dump()).execute()
    if not res.data:
        raise HTTPException(status_code=500, detail="Failed to create event.")
    return res.data[0]
