from sqlalchemy import Column, Integer, String, DateTime, ARRAY
from database import Base

class Event(Base):
    __tablename__ = "events"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, nullable=False)
    description = Column(String, nullable=False)
    location = Column(String, nullable=False)
    time = Column(DateTime, nullable=False)
    host = Column(String, nullable=False)
    tags = Column(ARRAY(String))
    image_url = Column(String, nullable=True)
