"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useAdminGuard } from "@/lib/useAdminGuard";

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
  status?: string;
};

export default function AdminEventsPage() {
  const { loading, authorized } = useAdminGuard();

  const [events, setEvents] = useState<EventType[]>([]);

  // RSVPs for admin's events
  const [rsvps, setRsvps] = useState<any[]>([]);

  // map to toggle showing RSVPs per event
  const [showRsvpsMap, setShowRsvpsMap] = useState<Record<number, boolean>>({});

  // Edit modal state
  const [editingEvent, setEditingEvent] = useState<EventType | null>(null);
  const [editTitle, setEditTitle] = useState("");
  const [editLocation, setEditLocation] = useState("");
  const [editDate, setEditDate] = useState("");
  const [editTime, setEditTime] = useState("");
  const [editFoodItems, setEditFoodItems] = useState<FoodItem[]>([]);

  // Load events created by this admin, then load RSVPs for those events
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

    const eventsData = (data as EventType[]) || [];
    setEvents(eventsData);

    // If there are events, load RSVPs for those event IDs
    const eventIds = eventsData.map((e) => e.id);
    if (eventIds.length > 0) {
      const { data: rsvpData, error: rsvpError } = await supabase
        .from("rsvps")
        .select("*, rsvp_items(*)")
        .in("event_id", eventIds);

      if (rsvpError) {
        console.error("Failed to load RSVPs:", rsvpError);
        setRsvps([]);
      } else {
        setRsvps(rsvpData || []);
      }
    } else {
      setRsvps([]);
    }
  };

  // After admin guard passes, fetch the current user + events
  useEffect(() => {
    async function load() {
      if (!authorized) return;

      const { data: authData } = await supabase.auth.getUser();
      const user = authData?.user;
      if (!user) return; // should not happen if authorized, but just in case

      await loadAdminEvents(user.id);
    }

    load();
  }, [authorized]);

  // Delete event
  const handleDelete = async (eventId: number) => {
    if (!confirm("Delete this event? This cannot be undone.")) return;

    const { data: rsvpRows } = await supabase
      .from("rsvps")
      .select("id")
      .eq("event_id", eventId);

    const rsvpIds = rsvpRows?.map((r) => r.id) || [];

    if (rsvpIds.length > 0) {
      await supabase.from("rsvp_items").delete().in("rsvp_id", rsvpIds);
    }

    await supabase.from("rsvps").delete().eq("event_id", eventId);

    const { error } = await supabase.from("events").delete().eq("id", eventId);

    if (error) {
      console.error(error);
      alert("Failed to delete event");
      return;
    }

    // Update UI
    setEvents((prev) => prev.filter((e) => e.id !== eventId));
    setRsvps((prev) => prev.filter((r) => r.event_id !== eventId));
  };

  // Cancel event (UPDATE status to cancelled)
  const handleCancel = async (eventId: number) => {
    if (!confirm("Are you sure you want to cancel this event?")) return;

    const { error } = await supabase
      .from("events")
      .update({ status: "cancelled" })
      .eq("id", eventId);

    if (error) {
      alert("Failed to cancel event");
      return;
    }

    // Update UI immediately
    setEvents((prev) =>
      prev.map((e) => (e.id === eventId ? { ...e, status: "cancelled" } : e))
    );
  };

  // Format time to AM/PM
  const formatTime = (timeString: string) => {
    if (!timeString) return "";
    const [hourStr, minuteStr] = timeString.split(":");
    const hour = parseInt(hourStr || "0", 10);
    const minute = parseInt(minuteStr || "0", 10);
    const ampm = hour >= 12 ? "PM" : "AM";
    let h = hour % 12;
    if (h === 0) h = 12;
    return `${h}:${minute.toString().padStart(2, "0")} ${ampm}`;
  };

  // ========== EDIT HELPERS ==========
  const openEditModal = (event: EventType) => {
    setEditingEvent(event);
    setEditTitle(event.title || "");
    setEditLocation(event.location || "");
    setEditDate(event.event_date || "");
    setEditTime(event.event_time || "");
    
    // Deep copy food items to avoid mutating state directly
    setEditFoodItems(
      (event.food_items || []).map((f) => ({
        name: f.name,
        quantity: String(f.quantity),
      }))
    );
  };

  const closeEditModal = () => {
    setEditingEvent(null);
    setEditTitle("");
    setEditLocation("");
    setEditDate("");
    setEditTime("");
    setEditFoodItems([]);
  };

  const updateFoodItem = (
    index: number,
    field: "name" | "quantity",
    value: string
  ) => {
    setEditFoodItems((prev) =>
      prev.map((it, i) => (i === index ? { ...it, [field]: value } : it))
    );
  };

  const addFoodItem = () => {
    setEditFoodItems((prev) => [...prev, { name: "", quantity: "0" }]);
  };

  const removeFoodItem = (index: number) => {
    setEditFoodItems((prev) => prev.filter((_, i) => i !== index));
  };

  // Submit edits to Supabase and update UI
  const handleEditSubmit = async () => {
    if (!editingEvent) return;

    // Basic validation
    if (!editTitle.trim()) {
      alert("Title is required.");
      return;
    }

    // Normalize food items: ensure quantity are numbers (strings are okay in DB jsonb but normalize)
    const normalizedFoodItems = editFoodItems.map((f) => ({
      name: f.name,
      quantity: isNaN(Number(f.quantity)) ? f.quantity : Number(f.quantity),
    }));

    // Update DB
    const { error } = await supabase
      .from("events")
      .update({
        title: editTitle,
        location: editLocation,
        event_date: editDate,
        event_time: editTime,
        food_items: normalizedFoodItems,
      })
      .eq("id", editingEvent.id);

    if (error) {
      console.error("Failed to update event:", error);
      alert("Failed to update event. Check console for details.");
      return;
    }

    // Update local UI state
    setEvents((prev) =>
      prev.map((ev) =>
        ev.id === editingEvent.id
          ? {
              ...ev,
              title: editTitle,
              location: editLocation,
              event_date: editDate,
              event_time: editTime,
              food_items: normalizedFoodItems as any,
            }
          : ev
      )
    );

    alert("Event updated!");
    closeEditModal();
  };

  // Toggle showing RSVPs for a given event
  const toggleShowRsvps = (eventId: number) => {
    setShowRsvpsMap((prev) => ({ ...prev, [eventId]: !prev[eventId] }));
  };

  // Guard UI
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-lg">
        Checking access...
      </div>
    );
  }

  // useAdminGuard already redirected if not admin
  if (!authorized) return null;

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white via-teal-50 to-teal-100">
      <section className="flex flex-col items-center px-4 py-8 flex-grow">
        <h1 className="text-3xl font-semibold mb-6">Admin: Your Events</h1>

        <div className="grid grid-cols-1 gap-6 w-full max-w-4xl">
          {events.length === 0 && (
            <p className="text-gray-600 text-center w-full">
              You haven&apos;t created any events yet.
            </p>
          )}

          {events.map((event) => (
            <div
              key={event.id}
              className="bg-white shadow-md border rounded-xl p-5"
            >
              <h3 className="text-xl font-semibold mb-2">
                {event.title}{" "}
                {event.status === "cancelled" && (
                  <span className="text-red-600">(Cancelled)</span>
                )}
              </h3>

              <p>
                <strong>Date:</strong> {event.event_date}
              </p>
              <p>
                <strong>Time:</strong> {formatTime(event.event_time)}
              </p>
              <p>
                <strong>Location:</strong> {event.location}
              </p>

              <p className="mt-2">
                <strong>Food:</strong>
              </p>
              <ul className="ml-4 list-disc">
                {event.food_items?.map((item, i) => (
                  <li key={i}>
                    {item.name} — {item.quantity}
                  </li>
                ))}
              </ul>

              <div className="mt-4 flex gap-2">
                <button
                  className="bg-blue-600 text-white px-3 py-1 rounded"
                  onClick={() => openEditModal(event)}
                >
                  Edit
                </button>

                <button
                  className="bg-yellow-600 text-white px-3 py-1 rounded"
                  onClick={() => handleCancel(event.id)}
                >
                  Cancel
                </button>

                <button
                  className="bg-red-600 text-white px-3 py-1 rounded"
                  onClick={() => handleDelete(event.id)}
                >
                  Delete
                </button>

                {/* Toggle inline RSVPs view */}
                <button
                  className="bg-gray-200 text-gray-800 px-3 py-1 rounded"
                  onClick={() => toggleShowRsvps(event.id)}
                >
                  {showRsvpsMap[event.id] ? "Hide RSVPs" : "Show RSVPs"}
                </button>
              </div>

              {/* Inline RSVP list (admin view) */}
              {showRsvpsMap[event.id] && (
                <div className="mt-4 border-t pt-4">
                  <h4 className="font-semibold mb-2">RSVPs</h4>

                  {rsvps.filter((r) => r.event_id === event.id).length === 0 ? (
                    <p className="text-sm text-gray-600">No RSVPs yet.</p>
                  ) : (
                    <div className="space-y-2">
                      {rsvps
                        .filter((r) => r.event_id === event.id)
                        .map((r) => (
                          <div key={r.id} className="bg-gray-50 p-3 rounded">
                            <div className="mt-2">
                              <strong>Items:</strong>
                              <ul className="ml-4 list-disc">
                                {r.rsvp_items?.map((it: any) => (
                                  <li key={it.id}>
                                    {it.food_item} — {it.quantity}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <p className="text-sm">
                              <strong>Qty:</strong> {r.quantity}
                            </p>
                          </div>
                        ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* EDIT MODAL */}
      {editingEvent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-2xl p-6">
            <h2 className="text-xl font-semibold mb-4">Edit Event</h2>

            {/* Title */}
            <label className="block text-sm font-medium">Title</label>
            <input
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
              className="border w-full px-3 py-2 rounded mb-3"
            />

            <div className="grid grid-cols-2 gap-4">
              {/* Date */}
              <div>
                <label className="block text-sm font-medium">Date</label>
                <input
                  type="date"
                  value={editDate}
                  onChange={(e) => setEditDate(e.target.value)}
                  className="border w-full px-3 py-2 rounded mb-3"
                />
              </div>

              {/* Time */}
              <div>
                <label className="block text-sm font-medium">Time</label>
                <input
                  type="time"
                  value={editTime}
                  onChange={(e) => setEditTime(e.target.value)}
                  className="border w-full px-3 py-2 rounded mb-3"
                />
              </div>
            </div>

            {/* Location */}
            <label className="block text-sm font-medium">Location</label>
            <input
              value={editLocation}
              onChange={(e) => setEditLocation(e.target.value)}
              className="border w-full px-3 py-2 rounded mb-3"
            />

            {/* Food items */}
            <label className="block text-sm font-medium mt-2">
              Food Items
            </label>
            <div className="space-y-2 mt-2">
              {editFoodItems.map((item, index) => (
                <div key={index} className="flex gap-2">
                  <input
                    value={item.name}
                    onChange={(e) =>
                      updateFoodItem(index, "name", e.target.value)
                    }
                    placeholder="Food name"
                    className="border px-3 py-2 rounded w-2/3"
                  />
                  <input
                    value={String(item.quantity)}
                    onChange={(e) =>
                      updateFoodItem(index, "quantity", e.target.value)
                    }
                    placeholder="Qty"
                    className="border px-3 py-2 rounded w-1/3"
                  />
                  <button
                    type="button"
                    onClick={() => removeFoodItem(index)}
                    className="text-red-500 ml-1"
                  >
                    ✕
                  </button>
                </div>
              ))}

              <button
                type="button"
                onClick={addFoodItem}
                className="text-teal-600 text-sm underline"
              >
                + Add food item
              </button>
            </div>

            {/* Controls */}
            <div className="mt-6 flex justify-end gap-3">
              <button
                type="button"
                onClick={closeEditModal}
                className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
              >
                Close
              </button>
              <button
                type="button"
                onClick={handleEditSubmit}
                className="px-4 py-2 bg-teal-600 text-white rounded hover:bg-teal-700"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-black text-white text-center text-sm py-6 px-4 mt-auto">
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
