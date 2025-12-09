"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useAuthGuard } from "@/lib/useAuthGuard";

export default function ProfilePage() {
  const { loading, user } = useAuthGuard(); // login + redirect to /login if needed

  const [profile, setProfile] = useState<any>(null);
  const [profileLoading, setProfileLoading] = useState(true);

  useEffect(() => {
    async function loadProfile() {
      if (!user) return;

      setProfileLoading(true);

      const { data: profileData, error } = await supabase
        .from("profiles")
        .select("email, role")
        .eq("id", user.id)
        .single();

      if (error) {
        console.error("Error loading profile:", error);
        setProfile(null);
      } else {
        setProfile(profileData);
      }

      setProfileLoading(false);
    }

    loadProfile();
  }, [user]);

  // While we're checking auth or fetching the profile
  if (loading || profileLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-lg">
        Loading profile…
      </div>
    );
  }

  // useAuthGuard has already redirected if not logged in
  if (!user || !profile) return null;

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white via-teal-50 to-teal-100 px-6 py-16">
      <div className="max-w-xl mx-auto bg-white border border-gray-200 shadow-lg rounded-2xl p-10">
        {/* HEADER */}
        <h1 className="text-2xl font-bold text-center mb-2">
          {profile.email}
        </h1>

        <p className="text-center text-gray-500 mb-1">
          Member since {new Date(user.created_at).toLocaleDateString()}
        </p>

        <div className="flex justify-center mt-3">
          <span
            className={`px-3 py-1 rounded-full text-sm font-medium ${
              profile.role === "admin"
                ? "bg-green-100 text-green-700 border border-green-300"
                : "bg-gray-100 text-gray-700 border"
            }`}
          >
            {profile.role === "admin" ? "Administrator" : "Standard User"}
          </span>
        </div>

        {/* ABOUT */}
        <div className="mt-8 text-center text-gray-700">
          <p>Welcome to Spark!Bytes — helping reduce food waste across campus.</p>
        </div>

        {/* ACTION BUTTONS */}
        <div className="mt-10 space-y-4">
          {profile.role === "admin" && (
            <a
              href="/admin/requests"
              className="block w-full text-center bg-black text-white py-2 rounded-lg hover:bg-gray-900"
            >
              Admin Dashboard
            </a>
          )}

          {profile.role !== "admin" && (
            <a
              href="/request_access"
              className="block w-full text-center bg-teal-600 text-white py-2 rounded-lg hover:bg-teal-700"
            >
              Request Admin Access
            </a>
          )}

          <a
            href="/profile_reserve"
            className="block w-full text-center bg-gray-100 text-gray-800 py-2 rounded-lg hover:bg-gray-200"
          >
            View My Events
          </a>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="bg-black text-white text-center text-sm py-6 px-4 mt-20">
        <p>
          Boston University Center of Computing & Data Sciences: Duan Family
          Spark! Initiative
        </p>
        <p>665 Commonwealth Ave., Boston, MA 02215 | Floor 2, Spark! Space</p>
        <p>buspark@bu.edu</p>
      </footer>
    </div>
  );
}
