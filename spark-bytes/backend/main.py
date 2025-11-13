from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routes import events, rsvp, auth

app = FastAPI(title="SparkBytes API", version="0.2.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "http://127.0.0.1:3000",
        "http://127.0.0.1:8000",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# register all routers
app.include_router(auth.router, prefix="/auth", tags=["auth"])
app.include_router(events.router, prefix="/events", tags=["events"])
app.include_router(rsvp.router, prefix="/rsvp", tags=["rsvp"])

@app.get("/")
def root():
    return {"message": "Welcome to SparkBytes API"}
