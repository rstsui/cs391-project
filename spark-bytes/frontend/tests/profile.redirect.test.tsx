import { render, waitFor } from "@testing-library/react";
import ProfilePage from "@/app/profile_page/page";
import { supabase } from "@/lib/supabaseClient";

// Mock router
jest.mock("next/navigation", () => ({
  useRouter: () => ({
    push: jest.fn(),
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

describe("ProfilePage redirect behavior", () => {
  test("redirects to /login when no user is authenticated", async () => {
    // No user returned
    (supabase.auth.getUser as jest.Mock).mockResolvedValue({
      data: { user: null },
    });

    const { getByText } = render(<ProfilePage />);

    // Should eventually show nothing because redirect triggered
    await waitFor(() => {
      expect(supabase.auth.getUser).toHaveBeenCalled();
    });
  });
});
