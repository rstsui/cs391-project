# tests/test_events.py

import pytest
from fastapi.testclient import TestClient
from datetime import datetime, timedelta, timezone

from main import app
client = TestClient(app)


# create fake supabase for testing purposes ----------------------------------------------------------------------
class FakeResult:
    def __init__(self, data):
        self.data = data

    def execute(self):
        return self


class FakeEventsTable:
    def __init__(self):
        self.rows = []
        self._auto_id = 1

    def _add_defaults(self, row: dict) -> dict:
        r = row.copy()
        r.setdefault("id", self._auto_id)
        self._auto_id += 1
        r.setdefault("attendees", 0)
        r.setdefault("created_at", datetime.now(timezone.utc).isoformat())
        return r

    def select(self, *args, **kwargs):
        return self

    def order(self, field, desc=False):
        reverse = bool(desc)
        ordered = sorted(self.rows, key=lambda r: r.get(field), reverse=reverse)
        return FakeResult(ordered)

    def insert(self, data):
        if isinstance(data, dict):
            data = [data]

        new_rows = []
        for d in data:
            row = self._add_defaults(d)
            self.rows.append(row)
            new_rows.append(row)

        return FakeResult(new_rows)


class FakeSupabaseForEvents:
    def __init__(self):
        self._events = FakeEventsTable()

    def table(self, name: str):
        if name != "events":
            raise ValueError(f"FakeSupabaseForEvents only supports 'events' table, got {name!r}")
        return self._events


@pytest.fixture(autouse=True)
def fake_supabase_events(monkeypatch):
    """
    For every test in this file, replace routes.events.supabase
    with our in-memory fake.

    This does NOT touch supabase_client.supabase, so auth tests stay
    using whatever setup they already have.
    """
    from routes import events as events_routes

    fake = FakeSupabaseForEvents()
    monkeypatch.setattr(events_routes, "supabase", fake)
    yield  # monkeypatch is automatically undone after each test


# helper function for testing ------------------------------------------------------------------------------------
def make_sample_event():
    """
    Build a valid JSON payload for EventCreate.

    Note: time is an ISO-8601 string so it's JSON-serializable.
    FastAPI/Pydantic will parse it back into a datetime.
    """
    return {
        "title": "Spark! Bytes Kickoff",
        "description": "Come learn about Spark! Bytes and upcoming events.",
        "location": "CDS 123",
        "time": (datetime.now(timezone.utc) + timedelta(days=1)).isoformat(),
        "capacity": 50,
    }


# tests ----------------------------------------------------------------------------------------------------------
def test_list_events_initially_empty():
    """
    When there are no events, GET /events/ should return 200 and an empty list.
    FakeSupabaseForEvents starts empty for each test.
    """
    resp = client.get("/events/")
    assert resp.status_code == 200
    assert resp.json() == []


def test_create_event_returns_201_and_event_body():
    """
    Happy path:
    - POST a valid event
    - Expect 201 Created
    - Response body should contain the same core fields we sent
      plus server-generated fields like id, attendees, created_at.
    """
    payload = make_sample_event()
    resp = client.post("/events/", json=payload)

    assert resp.status_code == 201
    body = resp.json()

    # ensure event details are stored
    assert body["title"] == payload["title"]
    assert body["description"] == payload["description"]
    assert body["location"] == payload["location"]
    assert body["capacity"] == payload["capacity"]

    assert "id" in body
    assert "attendees" in body
    assert "created_at" in body


def test_created_event_shows_up_in_list():
    """
    After creating an event, it should appear in GET /events/.
    """
    payload = make_sample_event()

    # create the event
    create_resp = client.post("/events/", json=payload)
    assert create_resp.status_code == 201

    # list events
    list_resp = client.get("/events/")
    assert list_resp.status_code == 200
    events = list_resp.json()

    # at least one event in the list should match what we created
    assert any(
        e["title"] == payload["title"]
        and e["description"] == payload["description"]
        and e["location"] == payload["location"]
        and e["capacity"] == payload["capacity"]
        for e in events
    )
