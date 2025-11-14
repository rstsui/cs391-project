"use client";

import Link from "next/link";
import { useSupabaseSession } from "@/lib/useSupabaseSession";
import { supabase } from "@/lib/supabaseClient"
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function NavbarClient() {
  const session = useSupabaseSession();
  const router = useRouter();
  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(() => {
      router.refresh(); // force UI update
    });

    return () => subscription.unsubscribe();
  }, [router]);
  
  return (
    <nav className="bg-black text-white flex justify-between items-center px-8 py-4">
      <span className="font-semibold text-lg">Spark!Bytes</span>
      <div className="flex gap-6 items-center">
        <Link href="/">Home</Link>
        <Link href="/search">Events</Link>
        <Link href="/events/create">Create Event</Link>

        {session ? (
          <Link href="/log_out" className="underline">
            Logout
          </Link>
        ) : (
          <Link href="/login" className="underline">
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}
