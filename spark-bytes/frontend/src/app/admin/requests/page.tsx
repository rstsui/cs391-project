"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

type RequestRow = {
  id: string;
  user_id: string;
  message: string;
  status: string;
  requested_at: string;
  email: string;
};

export default function AdminRequestsPage() {
  const [requests, setRequests] = useState<RequestRow[]>([]);
  const [filter, setFilter] = useState<"all" | "pending" | "approved" | "rejected">("all");

  // Fetch all admin requests from the VIEW
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

    const cleaned = data.map((row: any) => ({
      id: row.id,
      user_id: row.user_id,
      message: row.message,
      status: row.status,
      requested_at: row.requested_at,
      email: row.email,
    }));

    setRequests(cleaned);
  }

  useEffect(() => {
    loadRequests();
  }, []);

  // Approve or reject
  async function updateStatus(id: string, newStatus: "approved" | "rejected") {
    const { error } = await supabase
      .from("admin_requests")
      .update({ status: newStatus })
      .eq("id", id);

    if (error) {
      alert("Error updating request: " + error.message);
      return;
    }

    loadRequests();
  }

  // Filtering logic
  const filteredRequests =
    filter === "all"
      ? requests
      : requests.filter((req) => req.status === filter);

  return (
    <div className="p-10 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Admin Access Requests</h1>

      {/* FILTER TABS */}
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
            {f.charAt(0).toUpperCase() + f.slice(1)}
          </button>
        ))}
      </div>

      {/* REQUEST LIST */}
      {filteredRequests.length === 0 && (
        <p className="text-gray-600">No requests found.</p>
      )}

      {filteredRequests.map((req) => (
        <div
          key={req.id}
          className="border p-5 rounded-xl shadow-sm bg-white mb-4"
        >
          <div className="flex justify-between items-center mb-2">
            <p className="font-semibold text-lg">{req.email}</p>

            {/* STATUS BADGE */}
            <span
              className={`px-3 py-1 text-sm rounded-full ${
                req.status === "pending"
                  ? "bg-yellow-100 text-yellow-800"
                  : req.status === "approved"
                  ? "bg-green-100 text-green-800"
                  : "bg-red-100 text-red-800"
              }`}
            >
              {req.status.charAt(0).toUpperCase() + req.status.slice(1)}
            </span>
          </div>

          <p className="text-gray-700 mb-3">{req.message}</p>
          <p className="text-sm text-gray-500 mb-4">
            Requested on: {new Date(req.requested_at).toLocaleString()}
          </p>

          {/* APPROVE / REJECT BUTTONS — only show if pending */}
          {req.status === "pending" && (
            <div className="flex gap-3">
              <button
                onClick={() => updateStatus(req.id, "approved")}
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
              >
                Approve
              </button>

              <button
                onClick={() => updateStatus(req.id, "rejected")}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
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
