import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import RequestAccessPage from "@/app/request_access/page";
import { supabase } from "@/lib/supabaseClient";
import { useAuthGuard } from "@/lib/useAuthGuard";

// Mock useAuthGuard hook
jest.mock("@/lib/useAuthGuard", () => ({
  useAuthGuard: jest.fn(),
}));

// Mock Supabase client
jest.mock("@/lib/supabaseClient", () => ({
  supabase: {
    from: jest.fn(),
  },
}));

const mockedUseAuthGuard = useAuthGuard as jest.Mock;

describe("RequestAccessPage", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    // @ts-ignore
    global.alert = jest.fn();
  });

  test("shows loading state while auth guard is loading", () => {
    mockedUseAuthGuard.mockReturnValue({
      loading: true,
      user: null,
    });

    render(<RequestAccessPage />);

    expect(screen.getByText(/checking access/i)).toBeInTheDocument();
  });

  test("renders form when user is authenticated", () => {
    mockedUseAuthGuard.mockReturnValue({
      loading: false,
      user: { id: "user-123", email: "test@bu.edu" },
    });

    render(<RequestAccessPage />);

    expect(screen.getByText(/request admin access/i)).toBeInTheDocument();
    expect(
      screen.getByText(/only approved users can create events/i)
    ).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText(/explain your reason/i)
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /submit request/i })
    ).toBeInTheDocument();
  });

  test("submits request and shows success message on success", async () => {
    mockedUseAuthGuard.mockReturnValue({
      loading: false,
      user: { id: "user-123", email: "test@bu.edu" },
    });

    const insertMock = jest.fn().mockResolvedValue({ error: null });
    (supabase.from as jest.Mock).mockReturnValue({
      insert: insertMock,
    });

    render(<RequestAccessPage />);

    const textarea = screen.getByPlaceholderText(/explain your reason/i);
    const submitButton = screen.getByRole("button", { name: /submit request/i });

    fireEvent.change(textarea, {
      target: { value: "I host events and need to post free food listings." },
    });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(insertMock).toHaveBeenCalledWith({
        user_id: "user-123",
        message: "I host events and need to post free food listings.",
        status: "pending",
      });
    });

    expect(
      await screen.findByText(/your request has been submitted/i)
    ).toBeInTheDocument();
    expect(global.alert).not.toHaveBeenCalled();
  });

  test("shows alert when Supabase insert fails", async () => {
    mockedUseAuthGuard.mockReturnValue({
      loading: false,
      user: { id: "user-123", email: "test@bu.edu" },
    });

    const insertMock = jest.fn().mockResolvedValue({
      error: { message: "Database error" },
    });

    (supabase.from as jest.Mock).mockReturnValue({
      insert: insertMock,
    });

    render(<RequestAccessPage />);

    const textarea = screen.getByPlaceholderText(/explain your reason/i);
    const submitButton = screen.getByRole("button", { name: /submit request/i });

    fireEvent.change(textarea, {
      target: { value: "Please approve me" },
    });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(global.alert).toHaveBeenCalledWith("Failed to submit request.");
    });

    expect(
      screen.queryByText(/your request has been submitted/i)
    ).not.toBeInTheDocument();
  });
});
