from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from database import SessionLocal
from models.event import Event

router = APIRouter(prefix="/events", tags=["Events"])

# Dependency to get a DB session
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.get("/")
def get_events(db: Session = Depends(get_db)):
    return db.query(Event).all()

@router.get("/{event_id}")
def get_event(event_id: int, db: Session = Depends(get_db)):
    event = db.query(Event).filter(Event.id == event_id).first()
    if not event:
        raise HTTPException(status_code=404, detail="Event not found")
    return event

@router.post("/")
def create_event(event: dict, db: Session = Depends(get_db)):
    new_event = Event(**event)
    db.add(new_event)
    db.commit()
    db.refresh(new_event)
    return new_event
