import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ProfilePage from "@/app/profile_page/page";
import { supabase } from "@/lib/supabaseClient";

// Mock Next.js navigation
jest.mock("next/navigation", () => ({
  useRouter: () => ({ push: jest.fn() }),
}));

// Mock Supabase client
jest.mock("@/lib/supabaseClient");

describe("ProfilePage", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders profile info for authenticated user", async () => {
    // Mock auth user
    (supabase.auth.getUser as jest.Mock).mockResolvedValue({
      data: { user: { id: "123", email: "test@bu.edu", created_at: "2024-01-01" } }
    });

    // Mock profile
    (supabase.from as any).mockReturnValue({
      select: () => ({
        eq: () => ({
          single: async () => ({
            data: {
              email: "test@bu.edu",
              role: "user"
            }
          })
        })
      })
    });

    render(<ProfilePage />);

    expect(await screen.findByText("test@bu.edu")).toBeInTheDocument();
    expect(await screen.findByText("Standard User")).toBeInTheDocument();
  });
});
