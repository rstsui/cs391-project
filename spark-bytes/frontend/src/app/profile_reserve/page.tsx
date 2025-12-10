"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";
import { useAuthGuard } from "@/lib/useAuthGuard";

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

type FoodItem = {
  name: string;
  quantity: number;
};

export default function ProfileReserve() {
  const router = useRouter();
  const { loading: authLoading, user } = useAuthGuard(); // redirect to /login if not auth

  const [rsvps, setRsvps] = useState<any[]>([]);
  const [events, setEvents] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const [editingRsvp, setEditingRsvp] = useState<any>(null);
  const [editFood, setEditFood] = useState("");
  const [editQuantity, setEditQuantity] = useState(1);

  useEffect(() => {
    const loadData = async () => {
      if (!user) return;

      if (!user.email?.endsWith("@bu.edu")) {
        await supabase.auth.signOut();
        alert("You must use your BU email to log in.");
        router.push("/login");
        return;
      }

      const { data: rsvpData, error: rsvpError } = await supabase
        .from("rsvps")
        .select("*, rsvp_items(*)")
        .eq("email", user.email);

      if (rsvpError) {
        console.error("RSVP fetch error:", rsvpError);
      }

      const { data: eventData, error: eventError } = await supabase
        .from("events")
        .select("*");

      if (eventError) {
        console.error("Event fetch error:", eventError);
      }

      setRsvps(rsvpData || []);
      setEvents(eventData || []);
      setLoading(false);
    };

    if (!authLoading && user) {
      loadData();
    }
  }, [authLoading, user, router]);

  const handleCancel = async (rsvp: any) => {
    const yes = confirm("Cancel this reservation?");
    if (!yes) return;

    const { data: items, error: itemsError } = await supabase
      .from("rsvp_items")
      .select("*")
      .eq("rsvp_id", rsvp.id);

    if (itemsError) {
      console.error(itemsError);
      alert("Could not load reservation items.");
      return;
    }

    const event = events.find((e) => e.id === rsvp.event_id);
    if (!event) {
      alert("Event not found.");
      return;
    }

    let updatedFood = [...event.food_items];

    items.forEach((item: any) => {
      updatedFood = updatedFood.map((food: any) =>
        food.name === item.food_item
          ? { ...food, quantity: food.quantity + item.quantity }
          : food
      );
    });

    const { error: updateError } = await supabase
      .from("events")
      .update({
        food_items: updatedFood,
        attendees: Math.max(0, (event.attendees || 1) - 1),
      })
      .eq("id", event.id);

    if (updateError) {
      console.error(updateError);
      alert("Failed to update event inventory.");
      return;
    }

    await supabase.from("rsvp_items").delete().eq("rsvp_id", rsvp.id);

    const { error: deleteError } = await supabase
      .from("rsvps")
      .delete()
      .eq("id", rsvp.id);

    if (deleteError) {
      console.error(deleteError);
      alert("Failed to delete RSVP.");
      return;
    }

    alert("Reservation canceled.");

    setEvents((prev) =>
      prev.map((e) =>
        e.id === event.id
          ? {
              ...e,
              food_items: updatedFood,
              attendees: event.attendees - 1,
            }
          : e
      )
    );

    setRsvps((prev) => prev.filter((x) => x.id !== rsvp.id));
  };

  const handleEditSubmit = async () => {
    if (!editingRsvp) return;

    const rsvpId = editingRsvp.id;
    const event = events.find((e) => e.id === editingRsvp.event_id);
    if (!event) return;

    const { data: existingItems, error: loadErr } = await supabase
      .from("rsvp_items")
      .select("*")
      .eq("rsvp_id", rsvpId);

    if (loadErr) {
      console.error(loadErr);
      alert("Failed to load existing items.");
      return;
    }

    const oldItem = existingItems.find(
      (i: { food_item: string }) => i.food_item === editFood
    );
    const oldQty = oldItem?.quantity || 0;
    const newQty = editQuantity;

    if (newQty > 3) {
      alert("You may only reserve up to 3 of each item.");
      return;
    }

    const updatedFood = event.food_items.map(
      (item: { name: string; quantity: number }) => {
        if (item.name === editFood) {
          return {
            ...item,
            quantity: item.quantity + oldQty - newQty,
          };
        }
        return item;
      }
    );

    if (updatedFood.some((i: { quantity: number }) => i.quantity < 0)) {
      alert("Not enough quantity available.");
      return;
    }

    if (newQty === 0 && oldItem) {
      await supabase.from("rsvp_items").delete().eq("id", oldItem.id);

      await supabase
        .from("events")
        .update({ food_items: updatedFood })
        .eq("id", event.id);

      alert("Item removed!");

      setEvents((prev) =>
        prev.map((ev) =>
          ev.id === event.id ? { ...ev, food_items: updatedFood } : ev
        )
      );

      setRsvps((prev) =>
        prev.map((r) =>
          r.id === rsvpId
            ? {
                ...r,
                rsvp_items: existingItems.filter(
                  (it: any) => it.food_item !== editFood
                ),
              }
            : r
        )
      );

      setEditingRsvp(null);
      return;
    }

    if (oldItem) {
      await supabase
        .from("rsvp_items")
        .update({ quantity: newQty })
        .eq("id", oldItem.id);
    } else {
      await supabase.from("rsvp_items").insert({
        rsvp_id: rsvpId,
        food_item: editFood,
        quantity: newQty,
      });
    }

    await supabase
      .from("events")
      .update({ food_items: updatedFood })
      .eq("id", event.id);

    alert("Reservation item updated!");

    const updatedItems = oldItem
      ? existingItems.map((it: any) =>
          it.food_item === editFood ? { ...it, quantity: newQty } : it
        )
      : [...existingItems, { food_item: editFood, quantity: newQty }];

    setEvents((prev) =>
      prev.map((ev) =>
        ev.id === event.id ? { ...ev, food_items: updatedFood } : ev
      )
    );

    setRsvps((prev) =>
      prev.map((r) =>
        r.id === rsvpId ? { ...r, rsvp_items: updatedItems } : r
      )
    );

    setEditingRsvp(null);
  };

  if (authLoading || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-lg">
        Loading reservations…
      </div>
    );
  }

  if (!user) return null;

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white via-teal-50 to-teal-100">
      <main className="flex-1 px-10 py-16 max-w-6xl mx-auto w-full">
        <h1 className="text-3xl font-semibold text-center mb-2">
          My Reservations
        </h1>
        <p className="text-lg text-center mb-12">
          Food pickups you have reserved
        </p>

        <section className="flex flex-wrap justify-center gap-6 px-8 pb-12 mt-10">
          {rsvps.length === 0 && (
            <p className="text-gray-700 text-center">
              You have no reservations yet.
            </p>
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
                  <strong>Items:</strong>
                </p>
                {rsvp.rsvp_items && rsvp.rsvp_items.length > 0 ? (
                  <ul className="list-disc ml-5 text-gray-700">
                    {rsvp.rsvp_items.map((item: any) => (
                      <li key={item.id}>
                        {item.food_item} &times; {item.quantity}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-700">No items reserved.</p>
                )}

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
                      const firstItem = rsvp.rsvp_items?.[0];
                      setEditFood(firstItem?.food_item || "");
                      setEditQuantity(firstItem?.quantity || 1);
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

      {editingRsvp && (
        <div className="fixed inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl w-96 shadow-xl">
            <h2 className="text-xl font-semibold mb-4">
              Edit Reservation —{" "}
              {events.find((e) => e.id === editingRsvp.event_id)?.title}
            </h2>

            <label className="block font-medium mb-1">Food Item</label>
            <select
              value={editFood || ""}
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

            <label className="block font-medium mb-1">
              Quantity (max 3)
            </label>
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
