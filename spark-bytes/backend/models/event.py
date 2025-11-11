from pydantic import BaseModel, Field
from datetime import datetime

class EventBase(BaseModel):
    title: str = Field(..., min_length=1)
    description: str
    location: str
    time: datetime
    capacity: int = Field(..., ge=0)

class EventCreate(EventBase):
    pass

class EventOut(EventBase):
    id: int
    attendees: int
    created_at: datetime
