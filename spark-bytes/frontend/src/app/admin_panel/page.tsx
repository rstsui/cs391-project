"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useAdminGuard } from "@/lib/useAdminGuard";

export default function AdminPanel() {
  const { loading, authorized } = useAdminGuard();
  const [requests, setRequests] = useState<any[]>([]);
  const [loadingRequests, setLoadingRequests] = useState(true);

  useEffect(() => {
    if (!authorized) return;

    async function loadRequests() {
      const { data, error } = await supabase
        .from("admin_requests")
        .select("*")
        .order("created_at", { ascending: false });

      if (!error) {
        setRequests(data || []);
      }

      setLoadingRequests(false);
    }

    loadRequests();
  }, [authorized]);

  async function approveRequest(request: any) {
    await supabase
      .from("profiles")
      .update({ role: "admin" })
      .eq("id", request.user_id);

    await supabase
      .from("admin_requests")
      .delete()
      .eq("id", request.id);

    setRequests((prev) => prev.filter((r) => r.id !== request.id));
  }

  if (loading) {
    return (
      <div className="p-10 text-center">
        Checking access…
      </div>
    );
  }

  if (!authorized) return null;

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white via-teal-50 to-teal-100 px-6 py-16">
      <h1 className="text-3xl font-semibold text-center mb-10">
        Admin Requests
      </h1>

      {loadingRequests ? (
        <p className="text-center text-gray-600">Loading...</p>
      ) : requests.length === 0 ? (
        <p className="text-center text-gray-600">
          No pending admin access requests.
        </p>
      ) : (
        <div className="max-w-3xl mx-auto space-y-4">
          {requests.map((req) => (
            <div
              key={req.id}
              className="bg-white border border-gray-300 p-6 rounded-xl shadow-sm flex items-center justify-between"
            >
              <div>
                <p className="font-semibold">{req.email}</p>
                <p className="text-gray-600 text-sm">
                  Requested at: {new Date(req.created_at).toLocaleString()}
                </p>
              </div>

              <button
                onClick={() => approveRequest(req)}
                className="bg-teal-600 text-white px-5 py-2 rounded-lg hover:bg-teal-700 transition"
              >
                Approve
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
