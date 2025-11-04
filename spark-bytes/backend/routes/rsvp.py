from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from database import SessionLocal
from models.rsvp import RSVP
from routes.auth import get_current_user

router = APIRouter(prefix="/rsvp", tags=["RSVP"])

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.post("/{event_id}")
def create_rsvp(
        event_id: int, 
        rsvp: dict, 
        db: Session = Depends(get_db),
        user = Depends(get_current_user),
    ):
        new_rsvp = RSVP(
            event_id=event_id,
            name=rsvp.get("name"),
            email=rsvp.get("email"),
            food_item=rsvp.get("food_item"),
            quantity=rsvp.get("quantity"),
            user_id=user.id,
        )

        db.add(new_rsvp)
        db.commit()
        db.refresh(new_rsvp)

        return {"success": True, "message": "Reservation created!", "rsvp": new_rsvp}
