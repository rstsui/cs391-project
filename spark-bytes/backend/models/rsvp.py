from sqlalchemy import Column, Integer, String, ForeignKey
from database import Base

class RSVP(Base):
    __tablename__ = "rsvps"

    id = Column(Integer, primary_key=True, index=True)
    event_id = Column(Integer, ForeignKey("events.id"))
    name = Column(String, nullable=False)
    email = Column(String, nullable=False)
    food_item = Column(String, nullable=False)
    quantity = Column(Integer, nullable=False)
