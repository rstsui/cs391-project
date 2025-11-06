# backend/main.py
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routes import events, rsvp  # filenames: routes/events.py and routes/rsvp.py

app = FastAPI(title="SparkBytes API", version="0.1.0")

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# register routers with prefixes & tags 
app.include_router(events.router, prefix="/events", tags=["events"])
app.include_router(rsvp.router,   prefix="/rsvps", tags=["rsvps"])

@app.get("/")
def root():
    return {"message": "Welcome to SparkBytes API"}