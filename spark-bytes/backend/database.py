from sqlalchemy import create_engine, MetaData
from sqlalchemy.orm import sessionmaker, declarative_base
import os

# Example local DB connection string
DATABASE_URL = os.getenv("DATABASE_URL", "postgresql://localhost/sparkbytes")

engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(bind=engine, autoflush=False, autocommit=False)
Base = declarative_base()
meta = MetaData()
