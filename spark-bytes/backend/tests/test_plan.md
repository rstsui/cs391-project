# Backend Testing Plan

## 1. Introduction
This document outlines the testing strategy for the Spark!Bytes platform, including what backend features will be tested during this milestone, how they will be tested, and which parts of the system are out of scope for the application's current stage of development.  

## 2. Test Scope

### 2.1 In-Scope for Current Milestone
These features are already implemented or partially implemented in the backend/frontend and can be tested now:

#### Authentication
- User registration (email + password)
- User login with JWT token issuance
- Access control for protected routes

#### Role-Based Permissions
- Role field on user (e.g., student, organizer)
- Permission logic for protected endpoints (e.g., event creation)

#### Event Management
- Create event (organizer only)
- View list of events
- View single event details

#### RSVP / Reservation System
- Submit RSVP for an event (authenticated users)
- Prevent unauthenticated RSVP attempts
- Prevent invalid RSVP submissions (e.g., negative quantity)

### 2.2 Out-of-Scope (Future Milestones)
These features are not yet implemented or are too complex for current sprint testing:

- BU SSO (Kerberos) authentication
- Push/email notifications
- In-app chat and moderation workflow
- Reporting features (report user/event)
- Analytics dashboard
- Bookmarking system
- Accessibility / WCAG full audit
- Performance/stress testing
- Automated Google Maps integration testing

These will be included in later test cycles.


## 3. Testing Levels

### 3.1 Unit Testing
- Tests individual backend functions (e.g., password hashing, validation logic).
- Focus: correctness of small components.
- Tools: **pytest**, FastAPI dependency overrides.

### 3.2 Integration Testing
- Tests communication between backend routes and Supabase database.
- Examples:
  - Register → Login → Access protected route
  - Create event → List events → RSVP to event

### 3.3 System Testing
- Ensures the system works as a whole.
- Performed via API testing in Swagger

### 3.4 Regression Testing
- After merging teammate branches, re-run key test cases to ensure nothing breaks (e.g., login, event feed, RSVP).


## 4. Testing Types

### 4.1 Black-Box Testing
- Tests functionality without looking at code.
- Example:  
  “POST /auth/register → should return 201 with user object.”

### 4.2 White-Box Testing
- Tests internal logic and branches.
- Example:  
  “Ensure role=='student' cannot access /events/create (403).”

## 5. Test Environment
- Framework: FastAPI  
- DB: Supabase PostgreSQL  
- Tools: Uvicorn, pytest  
- Authentication: JWT tokens  


## 6. Test Data

### 6.1 Dummy User Accounts
| Email | Password | Role |
|--------|----------|-------|
| student@test.edu | password123 | student |
| organizer@test.edu | password123 | organizer |

### 6.2 Dummy Events
- "Free Bagels @ GSU"
- "CS Office Hours with Snacks"
- "Food Leftover From Meeting"

### 6.3 RSVP Inputs
- Valid: `{ "quantity": 1 }`  
- Invalid: `{ "quantity": 0 }`, `{ "quantity": -3 }`


## 7. Test Cases Overview

### 7.1 Authentication
1. Register new user → **201 Created**
2. Register existing email → **400 Bad Request**
3. Login with correct password → **200 OK + token**
4. Login with incorrect password → **401 Unauthorized**
5. Access protected route with token → **200 OK**
6. Access protected route without token → **401**


### 7.2 Role-Based Permissions
1. Organizer can create event → **201**
2. Student cannot create event → **403 Forbidden**


### 7.3 Events API
1. Create event with valid data → **201**
2. Create event missing fields → **400**
3. GET `/events` → returns list of events
4. GET single event → **200** or **404** if not found


### 7.4 RSVP API
1. Authenticated RSVP succeeds → **200**
2. Unauthenticated RSVP fails → **401**
3. Invalid RSVP quantity → **400**


## 8. Test Execution Plan

| Task | Assigned To | Due |
|------|--------------|------|
| Write backend unit tests | Aaron | Nov 19 |
| Write integration tests | Aaron | Nov 19 |
| Regression testing after merges | Everyone | Ongoing |


## 9. Risks & Mitigations

| Risk | Impact | Mitigation |
|--------|---------|--------------|
| Database inconsistencies | High | Use isolated test data / test tables |
| Missing documentation | Medium | Update API docs as features finalize |
| Authentication failures | Medium | Thorough coverage of auth flows |
| Environment differences | Medium | Share `.env.example` file |


## 10. Approval

Team members sign off that the scope and test cases are accurate.

- **Aaron** – Backend Developer (and Testing Developer)
- **Kunchok** – Backend Developer 
- **Karachi** – Backend Developer
- **Uwe, Michael, or Kevin** – Course Staff (if necessary)
