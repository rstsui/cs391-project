from supabase_client import supabase
from fastapi import APIRouter, HTTPException

router = APIRouter(prefix="/events", tags=["Events"])

@router.get("/")
def get_events():
    response = supabase.table("events").select("*").execute()

    # New APIResponse format:
    if response.status_code >= 400:
        raise HTTPException(status_code=response.status_code, detail="Supabase request failed")

    return response.data