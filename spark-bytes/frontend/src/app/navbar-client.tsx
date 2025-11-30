"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useSupabaseSession } from "@/lib/useSupabaseSession";
import { supabase } from "@/lib/supabaseClient"
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function NavbarClient() {
  const session = useSupabaseSession();
  const router = useRouter();
  const pathname = usePathname();

  const [role, setRole] = useState<string | null>(null);
  useEffect(() => {
    async function loadRole() {
      if (!session) return;

      const { data } = await supabase
        .from("profiles")
        .select("role")
        .eq("id", session.user.id)
        .single();

      setRole(data?.role ?? null);
    }
    loadRole();
  }, [session]);
  const isActive = (path: string) =>
    pathname === path ? "underline font-semibold" : "hover:underline";
  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(() => {
      router.refresh();
    });

    return () => subscription.unsubscribe();
  }, [router]);
  
  return (
    <nav className="bg-black text-white flex justify-between items-center px-8 py-4">
      <span className="font-semibold text-lg">Spark!Bytes</span>

      <div className="flex gap-6 items-center">
        <Link href="/" className={isActive("/")}>
          Home
        </Link>

        <Link href="/search" className={isActive("/search")}>
          Events
        </Link>

        {/* If logged in */}
        {session && (
          <>
            <Link
              href={role === "admin" ? "/create_event" : "/request_access"}
              className={isActive(role === "admin" ? "/create_event" : "/request_access")}
            >
              Create Event
            </Link>


            <Link
              href="/profile_reserve"
              className={isActive("/profile_reserve")}
            >
              My Events
            </Link>
          </>
        )}
        {session && (
        <Link
            href="/profile_page"
            className={pathname === "/profile_page" ? "underline font-semibold" : ""}
        >
            Profile
        </Link>
        )}
        {/* Admin-only: View pending access requests */}
        {session && role === "admin" && (
          <Link
            href="/admin/requests"
            className={isActive("/admin/requests")}
          >
            Admin Requests
          </Link>
        )}

        {/* Auth link */}
        {session ? (
          <Link href="/log_out" className={isActive("/log_out")}>
            Logout
          </Link>
        ) : (
          <Link href="/login" className={isActive("/login")}>
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}