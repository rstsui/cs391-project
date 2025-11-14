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
    <div className="min-h-screen bg-gray-100 flex flex-col">


      <main className="flex flex-col items-center py-16">
        <div className="bg-gray-200 p-10 rounded-xl w-[350px] shadow">
          <h2 className="text-xl font-bold mb-6">Login</h2>

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

          <p className="text-sm mb-4">
            Don’t have an account?{" "}
            <Link className="underline" href="/signup">
              Create an account
            </Link>
          </p>

          <button
            onClick={handleLogin}
            className="w-full bg-white py-2 rounded-md border border-black hover:bg-gray-100"
          >
            Sign in
          </button>
        </div>
      </main>
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