# tests/test_rsvp.py
from datetime import datetime, timezone
import pytest
from fastapi.testclient import TestClient
from main import app

# fake supabase result wrapper
class FakeResult:
    def __init__(self, data):
        self.data = data

    def execute(self):
        return self

# fake rsvps table
class FakeRSVPTable:
    def __init__(self):
        self.rows = []
        self._auto_id = 1

    def insert(self, data):
        if isinstance(data, dict):
            data = [data]

        new_rows = []
        for d in data:
            row = d.copy()
            row.setdefault("id", self._auto_id)
            
            # FIX: Add the timestamp that Supabase would normally add!
            row.setdefault("created_at", datetime.now(timezone.utc).isoformat())
            
            self._auto_id += 1
            self.rows.append(row)
            new_rows.append(row)

        return FakeResult(new_rows)

# fake supabase that only handles rsvps table
class FakeSupabaseForRSVP:
    def __init__(self):
        self._rsvps = FakeRSVPTable()

    def table(self, name: str):
        if name != "rsvps":
            raise ValueError(f"fake rsvp supabase only supports 'rsvps' table, got {name!r}")
        return self._rsvps

# replace routes.rsvp.supabase with fake for all tests
@pytest.fixture(autouse=True)
def fake_supabase_rsvp(monkeypatch):
    from routes import rsvp as rsvp_routes
    fake = FakeSupabaseForRSVP()
    monkeypatch.setattr(rsvp_routes, "supabase", fake)
    yield

# test client
client = TestClient(app)

# helper to generate sample RSVP payload
def make_sample_rsvp():
    return {
        "name": "Test Student",
        "email": "student@example.com",
        "food_item": "Pizza",
        "quantity": 2,
    }

# missing fields should give 422
def test_rsvp_missing_fields_returns_422():
    resp = client.post("/rsvp/1", json={})
    assert resp.status_code == 422

# invalid email should give 422
def test_rsvp_invalid_email_returns_422():
    payload = {
        "name": "Bad Email",
        "email": "not-an-email",
        "food_item": "Salad",
        "quantity": 1,
    }
    resp = client.post("/rsvp/1", json=payload)
    assert resp.status_code == 422

# valid rsvp should return 201 and correct response body
def test_create_rsvp_returns_201_and_body():
    event_id = 42
    payload = make_sample_rsvp()

    resp = client.post(f"/rsvp/{event_id}", json=payload)
    assert resp.status_code == 201

    body = resp.json()

    # check user fields
    assert body["name"] == payload["name"]
    assert body["email"] == payload["email"]
    assert body["food_item"] == payload["food_item"]
    assert body["quantity"] == payload["quantity"]

    # check generated fields
    assert body["event_id"] == event_id
    assert "id" in body
