

"use client";

import { useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default function LoggedOutPage() {
  const router = useRouter();
  useEffect(() => {
    async function logout() {
      await supabase.auth.signOut();
      router.refresh();
    }
    logout();
  }, [router]);
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-white to-teal-100 flex flex-col">
      {/* Logged Out Confirmation */}
      <section className="flex flex-col items-center justify-center mt-20">
        <h1 className="text-2xl font-semibold mb-6">
          You have successfully logged out.
        </h1>
        <Link
            href="/login"
            className="border border-black text-black px-6 py-3 rounded-md hover:bg-teal-600 hover:text-white transition"
            >
            Log back in
        </Link>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white text-center text-sm py-6 px-4 mt-auto">
        <p>Boston University Center of Computing & Data Sciences: Duan Family Spark! Initiative</p>
        <p>665 Commonwealth Ave., Boston, MA 02215 | Floor 2, Spark! Space</p>
        <p>buspark@bu.edu</p>
      </footer>
    </div>
  );
}
