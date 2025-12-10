import React from "react";
import { render, screen } from "@testing-library/react";
import ProfilePage from "@/app/profile_page/page";
import { supabase } from "@/lib/supabaseClient";

// Mock Next.js navigation (App Router)
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

// Mock Supabase client
jest.mock("@/lib/supabaseClient", () => ({
  supabase: {
    auth: {
      getUser: jest.fn(),
    },
    from: jest.fn(),
  },
}));

describe("ProfilePage UI", () => {
  test("renders the user's email and role", async () => {
    (supabase.auth.getUser as jest.Mock).mockResolvedValue({
      data: {
        user: { id: "1", email: "test@bu.edu", created_at: "2025-01-01" },
      },
    });

    (supabase.from as jest.Mock).mockReturnValue({
      select: () => ({
        eq: () => ({
          single: () =>
            Promise.resolve({
              data: { email: "test@bu.edu", role: "user" },
            }),
        }),
      }),
    });

    render(<ProfilePage />);

    expect(await screen.findByText("test@bu.edu")).toBeInTheDocument();
    expect(await screen.findByText("Standard User")).toBeInTheDocument();
  });
});
