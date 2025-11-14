# Frontend Test Plan

## 1. Overview

This test plan covers the **Next.js frontend** for Spark!Bytes, focusing on the user-facing flows implemented in `src/app`:

- `/` (home page, if implemented)
- `/create_event`
- `/events/[id]`
- `/search`
- `/profile_page`
- `/profile_reserve`
- `/log_out`

The goal is to verify that core user journeys — browsing events, viewing event details, creating events, managing reservations, and logging out — behave as expected and match the functional requirements of the system.


## 2. Scope

### In Scope

- **Component/page rendering & UI behavior**:
  - Pages render without crashing.
  - Required UI elements (forms, buttons, lists) appear correctly.
  - Validation and conditional UI (error messages, empty states, loading states).

- **Client-side logic**:
  - Form submission handlers are called.
  - Query parameters and route params (`[id]`) are handled correctly.
  - Calls to mocked APIs (e.g. fetch to backend endpoints) use correct URLs and payload shapes.

- **Accessibility basics**:
  - Important elements have accessible labels.
  - Buttons/links are focusable and clickable in tests.

### Out of Scope (for this assignment)

- Cross-browser visual layout/Styling tests.
- End-to-end navigation (covered by manual testing or Playwright, if used).
- Deep performance testing in Jest.

## 3. Test Strategy

### 3.1 Tools

- **Test runner**: Jest
- **React component testing**: React Testing Library (`@testing-library/react`)
- **DOM matchers**: `@testing-library/jest-dom`
- **Environment**: `jest-environment-jsdom`
- **Helper**: `next/jest` for Next.js-specific config

### 3.2 Test Organization

Tests will live alongside the pages they test:

```text
spark-bytes/frontend/
  jest.config.mjs
  setupTests.ts
  src/
    app/
      create_event/
        page.tsx
        __tests__/
          page.test.tsx

      events/
        [id]/
          page.tsx
          __tests__/
            page.test.tsx

      search/
        page.tsx
        __tests__/
          page.test.tsx

      profile_page/
        page.tsx
        __tests__/
          page.test.tsx

      profile_reserve/
        page.tsx
        __tests__/
          page.test.tsx

      log_out/
        page.tsx
        __tests__/
          page.test.tsx
