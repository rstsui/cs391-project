"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";

/* Format time like 7:30 PM */
function formatTime(timeString: string) {
  if (!timeString) return "";

  const [hourStr, minuteStr] = timeString.split(":");
  let hour = parseInt(hourStr);
  const minute = parseInt(minuteStr);

  const ampm = hour >= 12 ? "PM" : "AM";

  hour = hour % 12;
  if (hour === 0) hour = 12;

  return `${hour}:${minute.toString().padStart(2, "0")} ${ampm}`;
}

export default function ProfileReserve() {
  const router = useRouter();

  const [rsvps, setRsvps] = useState<any[]>([]);
  const [events, setEvents] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const [editingRsvp, setEditingRsvp] = useState<any>(null);
  const [editFood, setEditFood] = useState("");
  const [editQuantity, setEditQuantity] = useState(1);

  /* Load RSVPs + Events */
  useEffect(() => {
    const loadData = async () => {
      const { data } = await supabase.auth.getUser();
      const user = data?.user;

      if (!user) {
        router.push("/login");
        return;
      }

      if (!user.email?.endsWith("@bu.edu")) {
        await supabase.auth.signOut();
        alert("You must use your BU email to log in.");
        router.push("/login");
        return;
      }

      // Load RSVPs
      const { data: rsvpData, error: rsvpError } = await supabase
        .from("rsvps")
        .select("*")
        .eq("email", user.email);

      if (rsvpError) console.error("RSVP fetch error:", rsvpError);

      // Load events
      const { data: eventData, error: eventError } = await supabase
        .from("events")
        .select("*");

      if (eventError) console.error("Event fetch error:", eventError);

      setRsvps(rsvpData || []);
      setEvents(eventData || []);
      setLoading(false);
    };

    loadData();
  }, [router]);

  /* CANCEL A RESERVATION */
  const handleCancel = async (rsvp: any) => {
    const confirmDelete = confirm(
      `Cancel reservation for ${rsvp.food_item} (x${rsvp.quantity})?`
    );
    if (!confirmDelete) return;

    const event = events.find((e) => e.id === rsvp.event_id);
    if (!event) return;

    // Restore quantity
    const updatedFoodItems = event.food_items.map((item: any) =>
      item.name === rsvp.food_item
        ? { ...item, quantity: item.quantity + rsvp.quantity }
        : item
    );

    // Update event inventory
    const { error: updateError } = await supabase
      .from("events")
      .update({ food_items: updatedFoodItems })
      .eq("id", event.id);

    if (updateError) {
      alert("Failed to restore food quantity.");
      console.error(updateError);
      return;
    }

    // Delete RSVP
    const { error: deleteError } = await supabase
      .from("rsvps")
      .delete()
      .eq("id", rsvp.id);

    if (deleteError) {
      alert("Failed to cancel reservation.");
      console.error(deleteError);
      return;
    }

    alert("Reservation canceled.");

    // Update UI
    setRsvps((prev) => prev.filter((item) => item.id !== rsvp.id));
  };

  /* SAVE EDIT */
  const handleEditSubmit = async () => {
    if (!editingRsvp) return;

    const event = events.find((e) => e.id === editingRsvp.event_id);
    if (!event) return;

    const oldFood = editingRsvp.food_item;
    const oldQty = editingRsvp.quantity;

    // Add old qty back first
    let updated = event.food_items.map((item: any) =>
      item.name === oldFood
        ? { ...item, quantity: item.quantity + oldQty }
        : item
    );

    // Subtract new qty
    updated = updated.map((item: any) =>
      item.name === editFood
        ? { ...item, quantity: item.quantity - editQuantity }
        : item
    );

    // Check inventory
    if (updated.some((item: any) => item.quantity < 0)) {
      alert("Not enough quantity available.");
      return;
    }

    // Update RSVP
    const { error: rsvpUpdateError } = await supabase
      .from("rsvps")
      .update({
        food_item: editFood,
        quantity: editQuantity,
      })
      .eq("id", editingRsvp.id);

    if (rsvpUpdateError) {
      alert("Failed to update RSVP.");
      return;
    }

    // Update event food list
    const { error: eventError } = await supabase
      .from("events")
      .update({ food_items: updated })
      .eq("id", event.id);

    if (eventError) {
      alert("Failed to update event food inventory.");
      return;
    }

    alert("Reservation updated!");

    // Update UI
    setEditingRsvp(null);

    setRsvps((prev) =>
      prev.map((item) =>
        item.id === editingRsvp.id
          ? { ...item, food_item: editFood, quantity: editQuantity }
          : item
      )
    );
  };

  /* LOADING SCREEN */
  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center text-lg">
        Loading reservations...
      </div>
    );
  }

  /* UI */
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white via-teal-50 to-teal-100">
      <main className="flex-1 px-10 py-16 max-w-6xl mx-auto w-full">
        <h1 className="text-3xl font-semibold text-center mb-2">My Events</h1>
        <p className="text-lg text-center mb-12">Food pickups you have reserved</p>

        <section className="flex flex-wrap justify-center gap-6 px-8 pb-12 mt-10">
          {rsvps.length === 0 && (
            <p className="text-gray-700 text-center">You have no reservations yet.</p>
          )}

          {rsvps.map((rsvp) => {
            const event = events.find((e) => e.id === rsvp.event_id);

            return (
              <div
                key={rsvp.id}
                className="bg-white border border-black w-72 p-6 rounded-2xl shadow-sm"
              >
                <h2 className="text-xl font-semibold">{event?.title}</h2>

                <p className="mt-3 text-gray-700">
                  <strong>Date:</strong> {event?.event_date}
                </p>

                <p className="text-gray-700">
                  <strong>Time:</strong> {formatTime(event?.event_time)}
                </p>

                <p className="text-gray-700">
                  <strong>Location:</strong> {event?.location}
                </p>

                <p className="text-gray-700 mt-3">
                  <strong>Food Item:</strong> {rsvp.food_item}
                </p>

                <p className="text-gray-700">
                  <strong>Quantity:</strong> {rsvp.quantity}
                </p>

                <div className="flex gap-3 mt-6">
                  <button
                    onClick={() => handleCancel(rsvp)}
                    className="bg-red-500 text-white px-4 py-1 rounded-md hover:bg-red-600"
                  >
                    Cancel
                  </button>

                  <button
                    onClick={() => {
                      setEditingRsvp(rsvp);
                      setEditFood(rsvp.food_item);
                      setEditQuantity(rsvp.quantity);
                    }}
                    className="bg-gray-200 text-gray-800 px-4 py-1 rounded-md hover:bg-gray-300"
                  >
                    Edit
                  </button>
                </div>
              </div>
            );
          })}
        </section>
      </main>

      {/* EDIT POPUP */}
      {editingRsvp && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl w-96 shadow-xl">
            <h2 className="text-xl font-semibold mb-4">
              Edit Reservation — {events.find((e) => e.id === editingRsvp.event_id)?.title}
            </h2>

            <label className="block font-medium mb-1">Food Item</label>
            <select
              value={editFood}
              onChange={(e) => setEditFood(e.target.value)}
              className="border w-full px-3 py-2 rounded mb-4"
            >
              {events
                .find((e) => e.id === editingRsvp.event_id)
                ?.food_items.map((item: any) => (
                  <option key={item.name} value={item.name}>
                    {item.name} ({item.quantity} left)
                  </option>
                ))}
            </select>

            <label className="block font-medium mb-1">Quantity (max 3)</label>
            <input
              type="number"
              min={1}
              max={3}
              value={editQuantity}
              onChange={(e) => setEditQuantity(Number(e.target.value))}
              className="border w-full px-3 py-2 rounded mb-6"
            />

            <div className="flex justify-between">
              <button
                onClick={() => setEditingRsvp(null)}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              >
                Close
              </button>

              <button
                onClick={handleEditSubmit}
                className="px-4 py-2 bg-teal-600 text-white rounded hover:bg-teal-700"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}

      <footer className="bg-black text-white text-center text-sm py-6 px-4 mt-auto">
        <p>Boston University Center of Computing & Data Sciences: Duan Family Spark! Initiative</p>
        <p>665 Commonwealth Ave., Boston, MA 02215 | Floor 2, Spark! Space</p>
        <p>buspark@bu.edu</p>
      </footer>
    </div>
  );
}
