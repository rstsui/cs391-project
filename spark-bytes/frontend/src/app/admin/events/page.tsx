"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";

type FoodItem = {
  name: string;
  quantity: string;
};

type EventType = {
  id: number;
  title: string;
  location: string;
  event_date: string;
  event_time: string;
  food_items: FoodItem[];
  organizer_email: string;
};

export default function AdminEventsPage() {
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);
  const [events, setEvents] = useState<EventType[]>([]);



  // Load events created by this admin
  const loadAdminEvents = async (userId: string) => {
    const { data, error } = await supabase
      .from("events")
      .select("*")
      .eq("host_id", userId)
      .order("created_at", { ascending: false });

    if (error) {
      console.error(error);
      return;
    }

    setEvents(data || []);
  };

  // SECURITY CHECK: ADMIN ONLY
  useEffect(() => {
    async function checkRole() {
      const { data: { user } } = await supabase.auth.getUser();

      if (!user) {
        router.push("/login");
        return;
      }

      const { data: profile } = await supabase
        .from("profiles")
        .select("role")
        .eq("id", user.id)
        .single();

      if (profile?.role !== "admin") {
        router.push("/request_access");
        return;
      }

      setAuthorized(true);
      loadAdminEvents(user.id);
    }

    checkRole();
  }, []);

  

  // Delete event
  const handleDelete = async (eventId: number) => {
    if (!confirm("Are you sure you want to delete this event?")) return;

    const { error } = await supabase.from("events").delete().eq("id", eventId);
    if (error) {
      alert("Failed to delete event");
    } else {
      setEvents(events.filter((e) => e.id !== eventId));
    }
  };

  // Format time to AM/PM
  const formatTime = (timeString: string) => {
    if (!timeString) return "";
    const [hourStr, minuteStr] = timeString.split(":");
    let hour = parseInt(hourStr);
    const minute = parseInt(minuteStr);
    const ampm = hour >= 12 ? "PM" : "AM";
    hour = hour % 12;
    if (hour === 0) hour = 12;
    return `${hour}:${minute.toString().padStart(2, "0")} ${ampm}`;
  };

  if (!authorized) return null;

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <section className="flex flex-col items-center px-4 py-8 flex-grow">
        <h1 className="text-3xl font-semibold mb-6">Admin: Your Events</h1>

        <div className="grid grid-cols-1 gap-6 w-full max-w-4xl">
          {events.length === 0 && (
            <p className="text-gray-600 text-center w-full">
              You haven&apos;t created any events yet.
            </p>
          )}

          {events.map((event) => (
            <div key={event.id} className="bg-white shadow-md border rounded-xl p-5">
              <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
              <p><strong>Date:</strong> {event.event_date}</p>
              <p><strong>Time:</strong> {formatTime(event.event_time)}</p>
              <p><strong>Location:</strong> {event.location}</p>

              <p className="mt-2"><strong>Food:</strong></p>
              <ul className="ml-4 list-disc">
                {event.food_items?.map((item, i) => (
                  <li key={i}>{item.name} — {item.quantity}</li>
                ))}
              </ul>

              <div className="mt-4 flex gap-2">
                <button
                  className="bg-blue-600 text-white px-3 py-1 rounded"
                  onClick={() => router.push(`/admin/edit/${event.id}`)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-600 text-white px-3 py-1 rounded"
                  onClick={() => handleDelete(event.id)}
                >
                  Delete
                </button>
                <button
                  className="bg-teal-600 text-white px-3 py-1 rounded"
                  onClick={() => router.push(`/admin/rsvps/${event.id}`)}
                >
                  See RSVPs
                </button>
              </div>
            </div>
          ))}
        </div>
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
