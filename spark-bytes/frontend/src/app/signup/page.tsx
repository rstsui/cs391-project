"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";

export default function SignupPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const handleSignup = async () => {
    if (password !== confirm) {
      alert("Passwords do not match");
      return;
    }

    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      alert(error.message);
    } else {
      alert("Account created!");
      router.push("/login");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* NAVBAR */}
      <nav className="bg-black text-white flex justify-between px-8 py-4">
        <span className="font-semibold">Spark!Bytes</span>

        <div className="flex gap-6">
          <Link href="/">Home</Link>
          <Link href="/events">Events</Link>
          <Link href="/events/create">Create Event</Link>
          <Link href="/login">Login</Link>
        </div>
      </nav>

      {/* SIGNUP BOX */}
      <main className="flex flex-col items-center py-16">
        <div className="bg-gray-200 p-10 rounded-xl w-[350px] shadow">
          <h2 className="text-xl font-bold mb-6">Sign up</h2>

          <input
            type="email"
            placeholder="BU Email"
            className="w-full p-2 rounded-md border mb-4"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 rounded-md border mb-4"
            onChange={(e) => setPassword(e.target.value)}
          />

          <input
            type="password"
            placeholder="Confirm password"
            className="w-full p-2 rounded-md border mb-6"
            onChange={(e) => setConfirm(e.target.value)}
          />

          <p className="text-sm mb-4">
            Already have an account?{" "}
            <Link className="underline" href="/login">
              Sign in
            </Link>
          </p>

          <button
            onClick={handleSignup}
            className="w-full bg-white py-2 rounded-md border border-black hover:bg-gray-100"
          >
            Sign up
          </button>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="bg-black text-white text-center py-10 mt-16">
        <p>
          Boston University Center of Computing & Data Sciences:
          <br />Duan Family Spark! Initiative
          <br />
          665 Commonwealth Ave., Boston, MA 02215 <br />
          Floor 2, Spark! Space
        </p>
        <p className="mt-4">buspark@bu.edu</p>
      </footer>
    </div>
  );
}
