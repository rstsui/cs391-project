# Frontend Testing Plan

## 1. Introduction
This document outlines the testing strategy for the **Spark!Bytes** frontend (React + Next.js). It describes what UI features will be tested during this milestone, how they will be tested, and which features are out of scope given the current stage of development. Authentication is handled with **Supabase Auth** (email + password), not BU SSO yet.

## 2. Test Scope

### 2.1 In-Scope for Current Milestone
These features are implemented or partially implemented and can be tested now:

#### Authentication UI (`/login`, `/signup`, `/log_out`)
- Login and signup forms using Supabase Auth  
- Form validation and error messages  
- Redirects on successful login/logout  
- Navbar state based on auth (logged in vs logged out)

#### Event Browsing & Discovery (`/`, `/events/[id]`, `/search`)
- Event feed displays list of active events  
- Search results page shows filtered events (basic keyword/date or whatever is implemented)  
- Event details page shows title, description, time, location, and food info  
- Graceful handling of “event not found” or empty search results

#### Reservation / Profile Flows (`/profile_page`, `/profile_reserve`)
- Display of user’s reservations/profile info (if implemented)  
- Basic reservation and cancellation UI where wired to backend  
- Validation of reservation quantity on the frontend

#### Organizer / Admin Pages (MVP only)  
- Organizer create-event form (`/create_event`, `/event_organizer`)  
- Admin/admin_panel basic access and navigation (if wired up)

### 2.2 Out-of-Scope (Future Milestones)
These features are planned but not fully implemented on the frontend yet, or are too complex for this sprint:

- **BU SSO / Kerberos login** (current UI uses Supabase email/password)  
- Advanced role-based dashboards (full admin analytics, organizer analytics views)  
- Full notifications UI (in-app + push/email)  
- In-app chat and moderation interface  
- Full reporting tools (report user/event flows)  
- Bookmarking UI  
- Google Maps integration beyond basic links  
- Full accessibility / WCAG audit and cross-browser testing beyond primary browser

These will be covered in later testing cycles.

## 3. Testing Levels

### 3.1 Unit / Component Testing
- Scope: Individual React components (forms, buttons, event cards, navbar).  
- Focus:
  - Renders correct content given props/state
  - Handles basic interactions (click, type, submit)
  - Conditional rendering (loading, error, empty states)
- Tools: **Jest** + **React Testing Library**.

### 3.2 Integration Testing (Frontend)
- Scope: Page-level components and flows where multiple components interact.  
- Examples:
  - Login → redirected to events feed
  - Event feed → click event → event details shown
  - Event details → reservation form submit → success/error message
- Implementation: Jest + RTL with **mocked API/Supabase calls**.

### 3.3 System / E2E Smoke Testing
- Scope: Manual and/or lightweight E2E checks with real backend + Supabase.  
- Examples (run in browser):
  - “User logs in and sees events”
  - “Organizer creates an event and sees it in the feed”
  - “Student RSVPs for an event from details page”
- Tool (optional, time-permitting): **Playwright** or **Cypress**.

### 3.4 Regression Testing
- After merges to main branch:
  - Re-run core component tests and manual smoke tests for:
    - Login
    - Event feed load
    - Event details
    - Reservation flow

## 4. Testing Types

### 4.1 Black-Box (Functional) Testing
- Focus on visible behavior from a user’s perspective.  
- Example assertions:
  - “Submitting valid credentials logs the user in and redirects to `/`.”  
  - “If events fail to load, an error banner is displayed.”

### 4.2 White-Box (Structural) Testing
- Limited to component-level logic:
  - Branch coverage for loading/success/error states  
  - Ensuring handler functions are called with correct arguments (e.g., form submit)

## 5. Test Environment

- Framework: **React + Next.js (App Router)**  
- Auth: **Supabase Auth** (email/password)  
- API: Next.js frontend → FastAPI backend + Supabase DB  

**Testing Tools (to be set up from scratch):**
- **Jest** – test runner and assertion library  
- **React Testing Library** – DOM interaction and accessibility-oriented queries  
- Optional: **MSW** (Mock Service Worker) for intercepting network calls in tests  

**Target Browser (for manual/E2E):**
- Google Chrome (latest)

## 6. Test Data

Frontend tests will either mock data or reuse backend test fixtures.

### 6.1 Dummy Accounts
| Email               | Password     | Role        |
|---------------------|-------------|-------------|
| student@test.edu    | password123 | student     |
| organizer@test.edu  | password123 | organizer   |

### 6.2 Sample Events
- “Free Bagels @ GSU”  
- “CS Office Hours with Snacks”  
- “Food Leftover From Meeting”

### 6.3 Reservation Inputs
- Valid: `quantity = 1` (or any positive quantity allowed)  
- Invalid: `quantity = 0`, negative values, or empty input

## 7. Test Cases Overview

### 7.1 Authentication UI
1. Login with valid credentials → redirect to events feed, navbar shows logged-in state.  
2. Login with invalid password → error message, stay on `/login`.  
3. Submit login with empty fields → client-side validation errors.  
4. Signup with valid fields → account created (or success message / redirect).  
5. Logout from navbar or `/log_out` → user signed out, redirected to public landing/login.

### 7.2 Events & Navigation
1. Events feed loads → shows list of events; no error displayed.  
2. Backend error / empty list → show loading then user-friendly error or “no events” message.  
3. Click event in feed → navigate to `/events/[id]` with correct details rendered.  
4. Invalid event ID → “Event not found” / error page.

### 7.3 Reservation & Profile
1. Authenticated user submits valid reservation on `/events/[id]` → success message; optional update to profile/reservations.  
2. Unauthenticated user clicks “Reserve” → redirected to `/login` or shown “Please log in” message.  
3. Invalid reservation quantity → client-side validation message; no request sent.  
4. Profile page shows user info and current reservations (if available) with no crashing errors.

### 7.4 Organizer/Admin (MVP)
1. Organizer can access `/create_event` and submit a valid event → confirmation & event appears in feed.  
2. Non-organizer trying to access organizer/admin panel routes → redirected or shown “Not authorized” error (if implemented).

## 8. Risks & Mitigations

| Risk                                        | Impact | Mitigation |
|---------------------------------------------|--------|-----------|
| Frequent UI changes breaking tests          | High   | Test behavior via roles/text, not implementation details; keep tests focused on core flows. |
| Supabase and backend not aligned in staging | Medium | Use a shared test project and stable seed data for manual/E2E tests; mock Supabase in unit tests. |
| Limited time to configure E2E tooling       | Medium | Prioritize Jest + RTL for core flows; add E2E only for a few critical journeys. |
| Accessibility issues                        | Medium | Include quick keyboard/alt-text checks during manual testing; plan full WCAG audit for future milestone. |

## 9. Approval

Team members sign off that this frontend testing plan reflects the scope and priorities for the current milestone.

- **Aaron** – Backend Developer (and Testing Developer)
- **Karachi** – Frontend Developer  
- **Renee** – Frontend Developer  