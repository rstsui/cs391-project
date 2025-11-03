from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routes import events, rsvp
from database import Base, engine

# Create tables automatically
Base.metadata.create_all(bind=engine)

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Next.js dev server
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(events.router)
app.include_router(rsvp.router)

@app.get("/")
def root():
    return {"message": "SparkBytes backend is running!"}
