# main.py
import os
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
from database import Base, engine
from routes import events, rsvp, auth
from models import user as user_model
from models import event as event_model 
from models import rsvp as rsvp_model

# load variables from .env 
load_dotenv()

# create tables automatically
Base.metadata.create_all(bind=engine)

app = FastAPI(title="SparkBytes API")

# allow frontend origin 
ALLOWED_ORIGINS = os.getenv("ALLOW_ORIGINS", "http://localhost:3000").split(",")

app.add_middleware(
    CORSMiddleware,
    allow_origins=ALLOWED_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# mount routes
app.include_router(auth.router)
app.include_router(events.router)
app.include_router(rsvp.router)

@app.get("/")
def root():
    return {"message": "SparkBytes backend is running!"}
