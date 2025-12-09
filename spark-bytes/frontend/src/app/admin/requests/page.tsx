"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useAdminGuard } from "@/lib/useAdminGuard";

type RequestRow = {
  id: string;
  user_id: string;
  message: string;
  status: string;
  requested_at: string;
  email: string;
};

export default function AdminRequestsPage() {
  const { loading, authorized } = useAdminGuard();

  const [requests, setRequests] = useState<RequestRow[]>([]);
  const [filter, setFilter] = useState<"all" | "pending" | "approved" | "rejected">(
    "all"
  );

  async function loadRequests() {
    const { data, error } = await supabase
      .from("admin_requests_with_profiles")
      .select("*")
      .order("requested_at", { ascending: false });

    if (error) {
      console.error("Error loading requests:", error);
      return;
    }

    if (!data) return;

    setRequests(
      data.map((row: any) => ({
        id: row.id,
        user_id: row.user_id,
        message: row.message,
        status: row.status,
        requested_at: row.requested_at,
        email: row.email,
      }))
    );
  }

  useEffect(() => {
    if (authorized) {
      loadRequests();
    }
  }, [authorized]);

  async function updateStatus(id: string, newStatus: "approved" | "rejected") {
    const { data: reqRow } = await supabase
      .from("admin_requests")
      .select("user_id")
      .eq("id", id)
      .maybeSingle();

    if (!reqRow) {
      alert("Unable to load request.");
      return;
    }

    const userId = reqRow.user_id;

    const { error: statusErr } = await supabase
      .from("admin_requests")
      .update({ status: newStatus })
      .eq("id", id);

    if (statusErr) {
      alert(statusErr.message);
      return;
    }

    if (newStatus === "approved") {
      const { error: roleErr } = await supabase
        .from("profiles")
        .update({ role: "admin" })
        .eq("id", userId);

      if (roleErr) {
        alert(roleErr.message);
        return;
      }
    }

    loadRequests();
  }

  const filteredRequests =
    filter === "all"
      ? requests
      : requests.filter((req) => req.status === filter);

  if (loading) {
    return (
      <div className="p-10 text-center">
        Checking access…
      </div>
    );
  }

  if (!authorized) return null;

  return (
    <div className="p-10 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Admin Access Requests</h1>

      <div className="flex gap-4 mb-6">
        {["all", "pending", "approved", "rejected"].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f as any)}
            className={`px-4 py-2 rounded-lg border ${
              filter === f
                ? "bg-teal-600 text-white border-teal-600"
                : "bg-white text-gray-700 border-gray-300"
            }`}
          >
            {f[0].toUpperCase() + f.slice(1)}
          </button>
        ))}
      </div>

      {filteredRequests.length === 0 && (
        <p className="text-gray-600">No requests found.</p>
      )}

      {filteredRequests.map((req) => (
        <div
          key={req.id}
          className="border p-5 rounded-xl shadow-sm bg-white mb-4"
        >
          <div className="flex justify-between mb-2">
            <p className="font-semibold text-lg">{req.email}</p>
            <span
              className={`px-3 py-1 text-sm rounded-full ${
                req.status === "pending"
                  ? "bg-yellow-100 text-yellow-800"
                  : req.status === "approved"
                  ? "bg-green-100 text-green-800"
                  : "bg-red-100 text-red-800"
              }`}
            >
              {req.status[0].toUpperCase() + req.status.slice(1)}
            </span>
          </div>

          <p className="text-gray-700 mb-3">{req.message}</p>

          <p className="text-sm text-gray-500 mb-4">
            Requested on: {new Date(req.requested_at).toLocaleString()}
          </p>

          {req.status === "pending" && (
            <div className="flex gap-3">
              <button
                onClick={() => updateStatus(req.id, "approved")}
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
              >
                Approve
              </button>

              <button
                onClick={() => updateStatus(req.id, "rejected")}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
              >
                Reject
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
