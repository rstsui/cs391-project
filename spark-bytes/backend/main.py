from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

# import routes
from routes import events, rsvp, auth  # <-- add auth here

# initialize app
app = FastAPI(title="SparkBytes API", version="0.2.0")

# configure CORS (frontend on localhost:3000)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# register all routers
app.include_router(auth.router) 
app.include_router(events.router, prefix="/events", tags=["events"])
app.include_router(rsvp.router, prefix="/rsvp", tags=["rsvp"])

# root route
@app.get("/")
def root():
    return {"message": "Welcome to SparkBytes API"}
