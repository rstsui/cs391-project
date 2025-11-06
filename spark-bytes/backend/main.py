'''
from fastapi import FastAPI
from routes import events

app = FastAPI()

app.include_router(events.router)

@app.get("/")
def root():
    return {"message": "Welcome to SparkBytes API (Supabase REST version)"}
'''

# backend/main.py
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

# import both route modules
from routes import events, rsvp  # filenames: routes/events.py and routes/rsvp.py

app = FastAPI(title="SparkBytes API", version="0.1.0")

# CORS (so your Next.js app at :3000 can call this API)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Register routers with prefixes + tags (so they appear grouped in /docs)
app.include_router(events.router, prefix="/events", tags=["events"])
app.include_router(rsvp.router,   prefix="/rsvps", tags=["rsvps"])

@app.get("/")
def root():
    return {"message": "Welcome to SparkBytes API (Supabase REST version)"}
