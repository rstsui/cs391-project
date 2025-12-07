"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";

export default function AttendeesPage() {
  const router = useRouter();
  const params = useParams();              
  const eventId = Number(params.id);     

  console.log("🟦 FIXED PARAMS:", params);
  console.log("🟦 FIXED eventId:", eventId);


  const [eventInfo, setEventInfo] = useState<any>(null);
  const [attendees, setAttendees] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      // Fetch event details
      const { data: eventData, error: eventError } = await supabase
        .from("events")
        .select("*")
        .eq("id", eventId)
        .single();

      setEventInfo(eventData);

      // Fetch RSVPs
      const { data: rsvpData, error: rsvpError } = await supabase
        .from("rsvps")
        .select("id, name, email")
        .eq("event_id", eventId);

      if (!rsvpData || rsvpError) {
        setAttendees([]);
        setLoading(false);
        return;
      }

      // Fetch their items from rsvp_items
      const attendeeList = [];

      for (const rsvp of rsvpData) {
        const { data: itemRows } = await supabase
          .from("rsvp_items")
          .select("food_item, quantity")
          .eq("rsvp_id", rsvp.id);

        attendeeList.push({
          name: rsvp.name,
          email: rsvp.email,
          items: itemRows ?? []
        });
      }

      setAttendees(attendeeList);
      setLoading(false);
    }

    loadData();
  }, [eventId]);

  if (loading) return <p className="p-4">Loading...</p>;

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <button onClick={() => router.back()} className="text-blue-600 underline mb-4">
        ← Back
      </button>

      <h1 className="text-3xl font-semibold mb-4">
        Attendees for: {eventInfo?.title}
      </h1>

      {attendees.length === 0 ? (
        <p>No one has signed up yet.</p>
      ) : (
        <div className="space-y-4">
          {attendees.map((a, i) => (
            <div key={i} className="bg-white shadow p-4 rounded border">
              <p><strong>Name:</strong> {a.name}</p>
              <p><strong>Email:</strong> {a.email}</p>

              <p className="font-semibold mt-2">Reserved Items:</p>
              {a.items.length === 0 ? (
                <p className="text-sm text-gray-600">No items reserved.</p>
              ) : (
                <ul className="list-disc ml-5">
                  {a.items.map((item: any, idx: number) => (
                    <li key={idx}>
                      {item.food_item} — {item.quantity}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
