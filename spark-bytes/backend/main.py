from fastapi import FastAPI
from routes import events

app = FastAPI()

app.include_router(events.router)

@app.get("/")
def root():
    return {"message": "Welcome to SparkBytes API (Supabase REST version)"}
