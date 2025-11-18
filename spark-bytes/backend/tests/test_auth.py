# tests/test_auth.py
import sys
from pathlib import Path

BACKEND_ROOT = Path(__file__).resolve().parents[1]
if str(BACKEND_ROOT) not in sys.path:
    sys.path.insert(0, str(BACKEND_ROOT))

from fastapi.testclient import TestClient
from main import app

client = TestClient(app)


def test_signup_missing_fields_returns_422():
    '''
    If we send an empty body to the signup endpoint,
    FastAPI should reject it with a validation error.
    '''
    response = client.post("/auth/register", json={})
    assert response.status_code == 422 # validation error


def test_login_missing_fields_returns_422():
    '''
    If we send an empty body to the login endpoint,
    FastAPI should reject it with a validation error.
    '''
    response = client.post("/auth/login", json={})
    assert response.status_code == 422 # validation error


def test_auth_routes_exist():
    '''
    Ensure that the routes are actually registered
    '''
    resp_register = client.post("/auth/register", json={})
    resp_login = client.post("/auth/login", data={})

    assert resp_register.status_code != 404 # page not found
    assert resp_login.status_code != 404 # page not found
