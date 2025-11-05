from sqlalchemy import Column, Integer, String, DateTime
from database import Base
from datetime import datetime

class Event(Base):
    __tablename__ = "events"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, nullable=False)
    description = Column(String, nullable=False)
    location = Column(String, nullable=False)
    time = Column(DateTime, nullable=False)
    capacity = Column(Integer, nullable=False)
    attendees = Column(Integer, default=0)
    created_at = Column(DateTime, default=datetime.utcnow)
