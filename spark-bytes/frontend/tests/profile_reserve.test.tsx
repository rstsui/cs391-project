import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import ProfileReserve from "@/app/profile_reserve/page";
import { supabase } from "@/lib/supabaseClient";
import { useAuthGuard } from "@/lib/useAuthGuard";

// Mock auth guard
jest.mock("@/lib/useAuthGuard", () => ({
  useAuthGuard: jest.fn(),
}));

// Mock router (in case the page uses it)
jest.mock("next/navigation", () => ({
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
    from: jest.fn(),
  },
}));

const mockedUseAuthGuard = useAuthGuard as jest.Mock;
const mockedFrom = supabase.from as jest.Mock;

describe("ProfileReserve page", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("shows empty state when user has no reservations", async () => {
    mockedUseAuthGuard.mockReturnValue({
      loading: false,
      user: { id: "user-1", email: "test@bu.edu" },
    });

    // Mock Supabase queries:
    // rsvps query
    mockedFrom.mockImplementation((table: string) => {
      if (table === "rsvps") {
        return {
          select: () => ({
            eq: () =>
              Promise.resolve({
                data: [],
                error: null,
              }),
          }),
        };
      }

      if (table === "events") {
        return {
          select: () =>
            Promise.resolve({
              data: [],
              error: null,
            }),
        };
      }

      return { select: () => ({}) };
    });

    render(<ProfileReserve />);

    // Wait for effect to finish and empty text to show
    expect(
      await screen.findByText(/you have no reservations yet/i)
    ).toBeInTheDocument();
  });

  test("renders reservation cards when RSVPs exist", async () => {
    mockedUseAuthGuard.mockReturnValue({
      loading: false,
      user: { id: "user-1", email: "test@bu.edu" },
    });

    const fakeEvent = {
      id: 10,
      title: "Free Pizza Night",
      event_date: "2025-12-15",
      event_time: "18:00",
      location: "CDS 17th Floor",
      food_items: [
        { name: "Cheese Pizza", quantity: 5 },
        { name: "Veggie Pizza", quantity: 3 },
      ],
      attendees: 1,
    };

    const fakeRsvp = {
      id: 100,
      event_id: 10,
      rsvp_items: [
        { id: 1, food_item: "Cheese Pizza", quantity: 2 },
        { id: 2, food_item: "Veggie Pizza", quantity: 1 },
      ],
    };

    mockedFrom.mockImplementation((table: string) => {
      if (table === "rsvps") {
        return {
          select: () => ({
            eq: () =>
              Promise.resolve({
                data: [fakeRsvp],
                error: null,
              }),
          }),
        };
      }

      if (table === "events") {
        return {
          select: () =>
            Promise.resolve({
              data: [fakeEvent],
              error: null,
            }),
        };
      }

      return { select: () => ({}) };
    });

    render(<ProfileReserve />);

    // Card title
    expect(
      await screen.findByText(/free pizza night/i)
    ).toBeInTheDocument();

    // Event details
    expect(screen.getByText(/2025-12-15/)).toBeInTheDocument();
    expect(screen.getByText(/CDS 17th Floor/)).toBeInTheDocument();

    // RSVP items
    expect(
      screen.getByText(/Cheese Pizza × 2/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Veggie Pizza × 1/i)
    ).toBeInTheDocument();
  });
});
