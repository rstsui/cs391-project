# tests/test_auth.py

# define backend root directory for supabase access --------------------------------------------------------------
import sys
from pathlib import Path

BACKEND_ROOT = Path(__file__).resolve().parents[1]
if str(BACKEND_ROOT) not in sys.path:
    sys.path.insert(0, str(BACKEND_ROOT))

# import necessary dependencies ----------------------------------------------------------------------------------
from fastapi.testclient import TestClient
from main import app
import pytest
import supabase_client
from routes import auth as auth_module

client = TestClient(app)

# create fake supabase for testing purposes ----------------------------------------------------------------------
class FakeResult:
    def __init__(self, data=None, error=None):
        self.data = data or []
        self.error = error

    def execute(self):
        return self

class FakeTable:
    def __init__(self, storage):
        self._storage = storage
        self._email_filter = None

    def select(self, *args, **kwargs):
        return self

    def eq(self, column, value):
        if column == "email":
            self._email_filter = value
        return self

    def insert(self, row):
        row_with_id = {**row, "id": len(self._storage) + 1}
        self._storage.append(row_with_id)
        return FakeResult([row_with_id])

    def execute(self):
        if self._email_filter is None:
            return FakeResult(list(self._storage))
        matches = [u for u in self._storage if u["email"] == self._email_filter]
        return FakeResult(matches)

class FakeSupabase:
    def __init__(self):
        self._tables = {"users": []}

    def table(self, name: str):
        return FakeTable(self._tables.setdefault(name, []))

@pytest.fixture(autouse=True)
def fake_supabase_and_secret(monkeypatch):
    """
    For every test in this file,
    - replace the real Supabase client with an in-memory fake
    - set a deterministic JWT secret
    """
    fake = FakeSupabase()

    # Replace supabase in both supabase_client.py and auth.py
    monkeypatch.setattr(supabase_client, "supabase", fake)
    monkeypatch.setattr(auth_module, "supabase", fake)

    # Make sure JWT uses a test secret
    monkeypatch.setattr(auth_module, "SECRET_KEY", "test-secret-key")

    return fake

# tests ----------------------------------------------------------------------------------------------------------
def test_successful_register_and_login():
    """
    End-to-end happy path:
    - Register a new user
    - Then log in with the same credentials
    """
    email = "testuser@example.com"
    password = "supersecretpassword"

    # register user
    reg_payload = {
        "email": email,
        "password": password,
        "role": "student",
    }
    reg_resp = client.post("/auth/register", json=reg_payload)
    assert reg_resp.status_code == 201

    reg_data = reg_resp.json()
    assert reg_data["message"] == "User registered successfully"
    assert reg_data["user"]["email"] == email

    # log in with correct password
    login_resp = client.post(
        "/auth/login",
        data={"username": email, "password": password},
    )
    assert login_resp.status_code == 200

    login_data = login_resp.json()
    assert "access_token" in login_data
    assert login_data["token_type"] == "bearer"


def test_login_wrong_password_rejected():
    """
    If the password is wrong, the login endpoint should reject the request.
    """
    email = "wrongpw@example.com"
    correct_password = "correct-password"

    # register user
    reg_resp = client.post(
        "/auth/register",
        json={
            "email": email,
            "password": correct_password,
            "role": "student",
        },
    )
    assert reg_resp.status_code == 201

    # attempt to log in with wrong password
    bad_login_resp = client.post(
        "/auth/login",
        data={"username": email, "password": "totally-wrong"},
    )
    assert bad_login_resp.status_code == 400
    assert bad_login_resp.json()["detail"] == "Invalid email or password"


def test_signup_missing_fields_returns_422():
    '''
    If we send an empty body to the signup endpoint,
    FastAPI should reject it with a validation error.
    '''
    response = client.post("/auth/register", json={})
    assert response.status_code == 422 


def test_login_missing_fields_returns_422():
    '''
    If we send an empty body to the login endpoint,
    FastAPI should reject it with a validation error.
    '''
    response = client.post("/auth/login", json={})
    assert response.status_code == 422 


def test_auth_routes_exist():
    '''
    Ensure that the routes are actually registered
    '''
    resp_register = client.post("/auth/register", json={})
    resp_login = client.post("/auth/login", data={})

    assert resp_register.status_code != 404 
    assert resp_login.status_code != 404 
