import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import EventInfoPage from "@/app/events/[id]/page";
import { supabase } from "@/lib/supabaseClient";

// Mock router + params
jest.mock("next/navigation", () => ({
  useParams: () => ({ id: "42" }),
  useRouter: () => ({
    push: jest.fn(),
    replace: jest.fn(),
    refresh: jest.fn(),
    back: jest.fn(),
    forward: jest.fn(),
    prefetch: jest.fn(),
  }),
}));

// Mock Supabase
jest.mock("@/lib/supabaseClient", () => ({
  supabase: {
    auth: {
      getUser: jest.fn(),
    },
    from: jest.fn(),
  },
}));

const mockedFrom = supabase.from as jest.Mock;
const mockedGetUser = supabase.auth.getUser as jest.Mock;

// Dummy fetch implementation for the map component's geocoding
beforeAll(() => {
  // @ts-ignore
  global.fetch = jest.fn().mockResolvedValue({
    ok: true,
    json: async () => ({
      status: "OK",
      results: [
        { geometry: { location: { lat: 42.35, lng: -71.1 } } },
      ],
    }),
  });
});


describe("EventInfoPage (/events/[id])", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders event details from Supabase", async () => {
    // Mock logged-in user 
    mockedGetUser.mockResolvedValue({
      data: { user: { id: "user-1", email: "test@bu.edu" } },
    });

    const fakeEvent = {
      id: 42,
      title: "Cookie O’Clock",
      description: "Enjoy freshly baked cookies and help reduce food waste.",
      location: "BU Spark! — 665 Commonwealth Ave, Floor 2",
      event_date: "2025-12-15",
      event_time: "15:00",
      food_items: [
        { name: "Chocolate Chip Cookies", quantity: 10 },
        { name: "Oatmeal Raisin Cookies", quantity: 5 },
      ],
      attendees: 3,
      capacity: 50,
      organizer_email: "host@bu.edu",
    };

    // Mock events query
    mockedFrom.mockImplementation((table: string) => {
      if (table === "events") {
        return {
          select: () => ({
            eq: () => ({
              maybeSingle: () =>
                Promise.resolve({
                  data: fakeEvent,
                  error: null,
                }),
            }),
          }),
        };
      }

      return {
        select: () => ({
          eq: () =>
            Promise.resolve({
              data: null,
              error: null,
            }),
        }),
      };
    });

    render(<EventInfoPage />);

    // Wait for event to load
    expect(await screen.findByText(/Cookie O’Clock/i)).toBeInTheDocument();

    // Basic assertions for details
    expect(
      screen.getByText(/bu spark! — 665 commonwealth ave, floor 2/i)
    ).toBeInTheDocument();

    expect(screen.getByText(/2025-12-15/)).toBeInTheDocument();
    expect(screen.getByText(/15:00|3:00/i)).toBeInTheDocument();

    // Expected food items 
    expect(
      screen.getByText(/Chocolate Chip Cookies/i, { selector: "li" })
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Oatmeal Raisin Cookies/i, { selector: "li" })
    ).toBeInTheDocument();
  });
});
