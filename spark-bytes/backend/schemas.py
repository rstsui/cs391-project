from pydantic import BaseModel
from datetime import datetime

class EventBase(BaseModel):
    title: str
    description: str
    location: str
    time: datetime
    capacity: int
    attendees: int = 0

class EventCreate(EventBase):
    pass

class EventResponse(EventBase):
    id: int
    created_at: datetime

    class Config:
        orm_mode = True
