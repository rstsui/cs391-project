# tests/test_smoke.py

import sys
from pathlib import Path

BACKEND_ROOT = Path(__file__).resolve().parents[1]
if str(BACKEND_ROOT) not in sys.path:
    sys.path.insert(0, str(BACKEND_ROOT))

from fastapi.testclient import TestClient
from main import app

client = TestClient(app)

def test_app_starts_up():
    '''
    Ensure that the application loads as intended.
    '''
    response = client.get("/")
    assert response.status_code in (200, 404)
