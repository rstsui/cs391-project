import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import LoginPage from "@/app/login/page";
import { supabase } from "@/lib/supabaseClient";

const mockPush = jest.fn();

jest.mock("next/navigation", () => ({
  useRouter: () => ({
    push: mockPush,
    replace: jest.fn(),
    refresh: jest.fn(),
    back: jest.fn(),
    forward: jest.fn(),
    prefetch: jest.fn(),
  }),
}));

jest.mock("@/lib/supabaseClient", () => ({
  supabase: {
    auth: {
      signInWithPassword: jest.fn(),
      signInWithOAuth: jest.fn(),
    },
  },
}));

describe("LoginPage", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    // mock alert to avoid jsdom errors
    // @ts-ignore
    global.alert = jest.fn();
  });

  test("renders email, password inputs and buttons", () => {
    render(<LoginPage />);

    const emailInput = screen.getByPlaceholderText(/BU Email/i);
    const passwordInput = screen.getByPlaceholderText(/Password/i);
    const signInButton = screen.getByRole("button", { name: /sign in/i });
    const googleButton = screen.getByRole("button", {
      name: /continue with google/i,
    });

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(signInButton).toBeInTheDocument();
    expect(googleButton).toBeInTheDocument();
  });

  test("calls supabase.auth.signInWithPassword and redirects on success", async () => {
    (supabase.auth.signInWithPassword as jest.Mock).mockResolvedValueOnce({
      data: { user: { id: "123", email: "test@bu.edu" } },
      error: null,
    });

    render(<LoginPage />);

    const emailInput = screen.getByPlaceholderText(/BU Email/i);
    const passwordInput = screen.getByPlaceholderText(/Password/i);
    const signInButton = screen.getByRole("button", { name: /sign in/i });

    fireEvent.change(emailInput, { target: { value: "test@bu.edu" } });
    fireEvent.change(passwordInput, { target: { value: "password123" } });
    fireEvent.click(signInButton);

    await waitFor(() => {
      expect(supabase.auth.signInWithPassword).toHaveBeenCalledWith({
        email: "test@bu.edu",
        password: "password123",
      });
    });

    await waitFor(() => {
      expect(mockPush).toHaveBeenCalledWith("/profile_page");
    });
  });

  test("shows alert when email/password login fails", async () => {
    (supabase.auth.signInWithPassword as jest.Mock).mockResolvedValueOnce({
      data: { user: null },
      error: { message: "Invalid login" },
    });

    render(<LoginPage />);

    const emailInput = screen.getByPlaceholderText(/BU Email/i);
    const passwordInput = screen.getByPlaceholderText(/Password/i);
    const signInButton = screen.getByRole("button", { name: /sign in/i });

    fireEvent.change(emailInput, { target: { value: "wrong@bu.edu" } });
    fireEvent.change(passwordInput, { target: { value: "wrongpass" } });
    fireEvent.click(signInButton);

    await waitFor(() => {
      expect(global.alert).toHaveBeenCalledWith("Invalid login");
    });

    expect(mockPush).not.toHaveBeenCalled();
  });

  test("calls supabase.auth.signInWithOAuth for Google login", async () => {
    (supabase.auth.signInWithOAuth as jest.Mock).mockResolvedValueOnce({
      data: {},
      error: null,
    });

    render(<LoginPage />);

    const googleButton = screen.getByRole("button", {
      name: /continue with google/i,
    });

    fireEvent.click(googleButton);

    await waitFor(() => {
      expect(supabase.auth.signInWithOAuth).toHaveBeenCalledWith({
        provider: "google",
        options: {
          redirectTo: "http://localhost:3000/profile_reserve",
        },
      });
    });
  });
});
