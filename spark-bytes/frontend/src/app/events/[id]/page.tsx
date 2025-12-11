"use client";

import { useParams } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";

/* Format time */
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

const EventMap = dynamic(() => import("./map_component"), {
  ssr: false,
});

type FoodItem = {
  name: string;
  quantity: number;
};

type EventType = {
  id: number;
  title: string;
  description: string;
  location: string;
  event_date: string;
  event_time: string;
  food_items: FoodItem[];
  capacity: number;
  attendees: number;
  organizer_email: string;
};

export default function EventInfoPage() {
  const params = useParams();
  const eventId = params.id as string;
  const router = useRouter();

  const [event, setEvent] = useState<EventType | null>(null);
  const [loading, setLoading] = useState(true);
  const [loggedInUser, setLoggedInUser] = useState<any>(null);

  /* RSVP form state */
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  /** MULTIPLE ITEMS STATE **/
  const [items, setItems] = useState([
    { food: "", quantity: 1 }
  ]);

  /* Load event + auth */
  useEffect(() => {
    async function loadEvent() {
      const { data: eventData } = await supabase
        .from("events")
        .select("*")
        .eq("id", eventId)
        .maybeSingle();

      const { data: userData } = await supabase.auth.getUser();
      setLoggedInUser(userData?.user || null);

      setEvent(eventData as EventType);
      setLoading(false);
    }

    loadEvent();
  }, [eventId]);

  /** FILTER OPTIONS so each dropdown only shows food not yet selected */
  function getAvailableOptions(index: number) {
    if (!event) return [];

    const selectedFoods = items
      .map((it, i) => (i === index ? null : it.food))
      .filter(Boolean);

    return event.food_items.filter(
      f => !selectedFoods.includes(f.name) && f.quantity > 0
    );
  }

  /** Add new row */
  function addItemRow() {
    setItems([...items, { food: "", quantity: 1 }]);
  }

  /** Remove row */
  function removeItem(index: number) {
    setItems(items.filter((_, i) => i !== index));
  }

  /** Handle food change */
  function updateItemFood(index: number, value: string) {
    const updated = [...items];
    updated[index].food = value;
    setItems(updated);
  }

  /** Handle quantity change */
  function updateQuantity(index: number, value: number) {
    const updated = [...items];
    updated[index].quantity = value;
    setItems(updated);
  }

  /** SUBMIT RSVP */
  async function handleReserve(e: React.FormEvent) {
    e.preventDefault();
    if (!event) return;

    // Validate form
    if (items.length === 0) {
      alert("Please select at least one food item.");
      return;
    }

    for (const row of items) {
      if (!row.food) {
        alert("Each item must have a food selection.");
        return;
      }
      if (row.quantity < 1 || row.quantity > 3) {
        alert("Each item must be between 1–3.");
        return;
      }

      const foodObj = event.food_items.find(f => f.name === row.food);
      if (!foodObj || row.quantity > foodObj.quantity) {
        alert(`Not enough quantity available for ${row.food}.`);
        return;
      }
    }

    // Prevent duplicate RSVP
    const { data: existing } = await supabase
      .from("rsvps")
      .select("*")
      .eq("email", email)
      .eq("event_id", eventId);

    if (existing && existing.length > 0) {
      alert("You already reserved food for this event.");
      return;
    }

    // Insert RSVP
    const { data: newRsvp, error } = await supabase
      .from("rsvps")
      .insert({
        event_id: event.id,
        name,
        email
      })
      .select()
      .single();

    if (error || !newRsvp) {
      console.error(error);
      alert("Failed to reserve.");
      return;
    }

    // Insert rsvp_items rows
    for (const row of items) {
      await supabase.from("rsvp_items").insert({
        rsvp_id: newRsvp.id,
        food_item: row.food,
        quantity: row.quantity
      });
    }

    // Update event inventory
    const updatedFood = event.food_items.map(f => {
      const row = items.find(i => i.food === f.name);
      return row
        ? { ...f, quantity: f.quantity - row.quantity }
        : f;
    });

    await supabase
      .from("events")
      .update({
        attendees: event.attendees + 1,
        food_items: updatedFood
      })
      .eq("id", event.id);

    alert("Reservation confirmed!");
    router.refresh();
  }

  if (loading || !event)
    return <div className="p-10 text-center">Loading event...</div>;

  const allFoods = event.food_items;
  const allSelected = items.length >= allFoods.length;

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white via-teal-50 to-teal-100">
      <main className="flex justify-center py-16 px-4">
        <div className="flex flex-col md:flex-row gap-10 w-full max-w-6xl">

          {/* EVENT INFO */}
          <div className="md:w-2/3 w-full bg-white p-8 rounded-2xl shadow-sm">
            <h2 className="text-3xl font-semibold mb-3">{event.title}</h2>

            <p className="text-gray-700 mb-6">{event.description}</p>

            <div className="space-y-3 text-gray-600 text-sm mb-8">
              <p><strong>Location:</strong> {event.location}</p>
              <p><strong>Date:</strong> {event.event_date}</p>
              <p><strong>Time:</strong> {formatTime(event.event_time)}</p>
              <p><strong>Created by:</strong> {event.organizer_email}</p>

              <p><strong>Available Food:</strong></p>
              <ul className="ml-6 list-disc">
                {event.food_items.map((item, i) => (
                  <li key={i}>{item.name} — {item.quantity} available</li>
                ))}
              </ul>

              <p><strong>Capacity:</strong> {event.attendees}/{event.capacity}</p>
            </div>

            <div className="w-full h-64 rounded-lg border overflow-hidden">
              <EventMap location={event.location} />
            </div>
          </div>

          {/* RESERVE FOOD */}
          <div className="md:w-1/3 w-full">
            <div className="bg-teal-600 text-white p-8 rounded-2xl shadow-md">

              {!loggedInUser ? (
                <div className="text-center">
                  <h3 className="text-xl font-semibold mb-4">Log in to reserve food</h3>
                  <button
                    onClick={() => router.push("/login")}
                    className="bg-white text-teal-700 font-semibold px-4 py-2 rounded-md"
                  >
                    Log In
                  </button>
                </div>
              ) : (
                <form className="flex flex-col gap-4" onSubmit={handleReserve}>
                  <h3 className="text-xl font-semibold text-center mb-4">Reserve Food</h3>

                  <input
                    type="text"
                    required
                    placeholder="Full Name"
                    className="p-2 rounded-md text-black"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />

                  <input
                    type="email"
                    required
                    placeholder="BU Email"
                    className="p-2 rounded-md text-black"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />

                  {/* MULTIPLE ITEM ROWS */}
                  {items.map((row, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <select
                        required
                        className="text-black p-2 rounded-md flex-1"
                        value={row.food}
                        onChange={(e) => updateItemFood(index, e.target.value)}
                      >
                        <option value="">Select item</option>
                        {getAvailableOptions(index).map((item) => (
                          <option key={item.name} value={item.name}>
                            {item.name} ({item.quantity} left)
                          </option>
                        ))}
                      </select>

                      <input
                        type="number"
                        min={1}
                        max={3}
                        className="w-16 text-black p-2 rounded-md"
                        value={row.quantity}
                        onChange={(e) => updateQuantity(index, Number(e.target.value))}
                      />

                      {items.length > 1 && (
                        <button
                          type="button"
                          className="text-white text-xl"
                          onClick={() => removeItem(index)}
                        >
                          ✕
                        </button>
                      )}
                    </div>
                  ))}

                  {/* ADD ANOTHER ITEM */}
                  {!allSelected && (
                    <button
                      type="button"
                      className="underline text-sm mt-1"
                      onClick={addItemRow}
                    >
                      + Add another item
                    </button>
                  )}

                  <button
                    type="submit"
                    className="bg-white text-teal-700 font-semibold py-2 rounded-md mt-4"
                  >
                    Reserve
                  </button>
                </form>
              )}

            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
