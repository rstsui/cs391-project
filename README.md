# Spark!Bytes: Setup Guide

This guide explains how to install and run Spark!Bytes locally.  
Follow these steps if you have just cloned the repository and want to launch the backend API, run the frontend interface, or execute the test suite.

---

## 📁 Project Structure
```
spark-bytes/
  ├── backend/
  │     ├── main.py
  │     ├── routes/
  │     ├── models/
  │     └── tests/
  └── frontend/
        ├── package.json
        └── src/
```

---

# 1. Backend Setup (FastAPI + Supabase)

### Step 1 — Navigate into the backend directory
```bash
cd spark-bytes/backend
```

### Step 2 — Create & activate a virtual environment
```bash
python -m venv venv
```

**Windows:**
```bash
venv\Scripts\activate
```

**macOS/Linux:**
```bash
source venv/bin/activate
```

### Step 3 — Install backend dependencies
```bash
pip install -r requirements.txt
```

---

## 2. Environment Variables (.env.local)

Inside `spark-bytes/backend/`, create a file named:

```
.env.local
```

Add the following variables (will be updated with keys):

```
SUPABASE_URL=your_supabase_url
SUPABASE_KEY=your_service_role_key_or_anon_key
JWT_SECRET=your_jwt_secret_key
```

> NOTE: The backend will not run without these variables.

---

# 3. Running the Backend Server

With the virtual environment active:

```bash
uvicorn main:app --reload
```

API will run at:

```
http://localhost:8000
```

Swagger UI:

```
http://localhost:8000/docs
```

---

# 4. Running Backend Tests (pytest)

From inside the backend folder:

```bash
pytest
```

This runs all backend test cases, including:
- Authentication tests  
- Events tests  
- RSVP tests  
- Smoke test  
- FakeSupabase-backed integration tests  

---

# 5. Frontend Setup (Next.js or React)

### Step 1 — Navigate to the frontend directory
```bash
cd ../frontend
```

### Step 2 — Install dependencies
```bash
npm install
```

### Step 3 — Create `.env.local`
Inside `spark-bytes/frontend/`, create:

```
.env.local
```

Add environment variables:

```
NEXT_PUBLIC_API_URL=http://localhost:8000
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_KEY=your_anon_key
```

---

# 6. Running the Frontend

```bash
npm run dev
```

Default URL:

```
http://localhost:3000
```

---

# 7. Common Issues

### CORS Errors
Make sure the backend allows requests from the frontend:

```python
allow_origins=["http://localhost:3000"]
```

### Supabase connection errors
Verify `.env.local` values.

### JWT Errors
Ensure `JWT_SECRET` is set correctly.

---