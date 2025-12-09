"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useAuthGuard } from "@/lib/useAuthGuard";

export default function RequestAccessPage() {
  const { loading, user } = useAuthGuard(); // redirects to /login if not authenticated

  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!user) return;

    const { error } = await supabase.from("admin_requests").insert({
      user_id: user.id,
      message,
      status: "pending",
    });

    if (error) {
      console.error(error);
      alert("Failed to submit request.");
      return;
    }

    setSubmitted(true);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-lg">
        Checking access…
      </div>
    );
  }

  // useAuthGuard already redirects if not logged in
  if (!user) return null;

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white via-teal-50 to-teal-100">
      <section className="flex flex-col items-center mt-16">
        <div className="bg-white border border-gray-300 rounded-2xl shadow-md p-6 mt-6 w-96 text-center">
          <h2 className="text-xl font-semibold mb-4">Request Admin Access</h2>

          {submitted ? (
            <p className="text-gray-700">
              Your request has been submitted. An admin will review it soon.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <p className="text-gray-700 mb-2">
                Only approved users can create events.
                <br />
                Please explain why you need access.
              </p>

              <textarea
                required
                placeholder="Explain your reason..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full border border-gray-300 rounded-lg p-2 h-28 resize-none"
              />

              <button
                type="submit"
                className="w-full bg-teal-600 text-white py-2 rounded-lg hover:bg-teal-700 transition"
              >
                Submit Request
              </button>
            </form>
          )}
        </div>
      </section>

      <footer className="bg-black text-white text-center text-sm py-6 px-4 mt-auto">
        <p>Boston University Center of Computing & Data Sciences: Duan Family Spark! Initiative</p>
        <p>665 Commonwealth Ave., Boston, MA 02215 | Floor 2, Spark! Space</p>
        <p>buspark@bu.edu</p>
      </footer>
    </div>
  );
}
