"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert(error.message);
    } else {
      router.push("/profile_reserve"); // redirect after login
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-white to-teal-100 flex flex-col">
    {/* Center Container */}
    <div className="flex-grow flex items-center justify-center px-4">
      <div className="bg-white/80 backdrop-blur-xl p-10 rounded-2xl shadow-xl w-[90%] max-w-md border border-gray-200">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Log in to Spark!Bytes
        </h2>

        <input
          type="email"
          placeholder="BU Email"
          className="w-full p-3 rounded-lg border mb-4 focus:outline-none focus:ring-2 focus:ring-teal-500"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 rounded-lg border mb-6 focus:outline-none focus:ring-2 focus:ring-teal-500"
          onChange={(e) => setPassword(e.target.value)}
        />

        <p className="text-sm text-center mb-4 text-gray-600">
          Don’t have an account?{" "}
          <Link href="/signup" className="text-teal-600 font-medium underline">
            Create an account
          </Link>
        </p>

        <button
          onClick={handleLogin}
          className="w-full bg-teal-600 text-white py-3 rounded-lg font-semibold text-lg hover:bg-teal-700 transition shadow-md"
        >
          Sign In
        </button>
      </div>
    </div>

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