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

const EventMap = dynamic(() => import("./map_component"), { ssr: false });

type FoodItem = { name: string; quantity: number };
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
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  //  MULTI-ITEM RSVP STATE
  const [items, setItems] = useState([{ food: "", quantity: 1 }]);

  // Load event + user
  useEffect(() => {
    async function loadEvent() {
      const { data, error } = await supabase
        .from("events")
        .select("*")
        .eq("id", eventId)
        .maybeSingle();

      const { data: userData } = await supabase.auth.getUser();
      setLoggedInUser(userData?.user || null);

      if (error) {
        console.error(error);
        return;
      }

      setEvent(data as EventType);
      setLoading(false);
    }

    loadEvent();
  }, [eventId]);

  /* -----------------------------------
            HANDLE RSVP SUBMISSION
  ------------------------------------*/
  async function handleReserve(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!event) return;

    // 1️⃣ Capacity check
    if (event.attendees >= event.capacity) {
      alert("This event is full.");
      return;
    }

    // 2Prevent duplicate RSVPs by email
    const { data: existingRSVP } = await supabase
      .from("rsvps")
      .select("*")
      .eq("email", email)
      .eq("event_id", event.id);

    if (existingRSVP && existingRSVP.length > 0) {
      alert("You already reserved food for this event.");
      return;
    }

    // Validate each selected item
    for (const it of items) {
      if (!it.food) {
        alert("Please select all food items.");
        return;
      }
      if (it.quantity < 1 || it.quantity > 3) {
        alert("Each item must be between 1 and 3.");
        return;
      }

      const foodObj = event.food_items.find((f) => f.name === it.food);
      if (!foodObj || foodObj.quantity < it.quantity) {
        alert(`Not enough ${it.food} available.`);
        return;
      }
    }

    // Insert an RSVP row for EACH selected item
    for (const it of items) {
      await supabase.from("rsvps").insert({
        event_id: event.id,
        name,
        email,
        food_item: it.food,
        quantity: it.quantity,
      });
    }

    // Update inventory & attendance count
    const updatedFood = event.food_items.map((item) => {
      const match = items.find((it) => it.food === item.name);
      return match
        ? { ...item, quantity: item.quantity - match.quantity }
        : item;
    });

    await supabase
      .from("events")
      .update({
        attendees: event.attendees + 1,
        food_items: updatedFood,
      })
      .eq("id", event.id);

    alert("Reservation confirmed!");
    router.refresh();
  }

  if (loading || !event)
    return <div className="p-10 text-center">Loading event...</div>;

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white via-teal-50 to-teal-100">
      <main className="flex justify-center py-16 px-4">
        <div className="flex flex-col md:flex-row gap-10 w-full max-w-6xl">

          {/* EVENT INFO */}
          <div className="md:w-2/3 w-full bg-white p-8 rounded-2xl shadow-sm">
            <h2 className="text-3xl font-semibold mb-3">{event.title}</h2>

            <p className="text-gray-700 mb-6 leading-relaxed">
              {event.description}
            </p>

            <div className="space-y-3 mb-8 text-gray-600 text-sm">
              <p><strong>Location:</strong> {event.location}</p>
              <p><strong>Date:</strong> {event.event_date}</p>
              <p><strong>Time:</strong> {formatTime(event.event_time)}</p>
              <p><strong>Created by:</strong> {event.organizer_email}</p>

              <p><strong>Available Food:</strong></p>
              <ul className="ml-6 list-disc">
                {event.food_items.map((item, i) => (
                  <li key={i}>
                    {item.name} — {item.quantity} available
                  </li>
                ))}
              </ul>

              <p>
                <strong>Capacity:</strong> {event.attendees}/{event.capacity}
              </p>
            </div>

            <div className="w-full h-64 rounded-lg border border-gray-300 overflow-hidden">
              <EventMap location={event.location} />
            </div>
          </div>

          {/* RSVP FORM */}
          <div className="md:w-1/3 w-full">
            <div className="bg-teal-600 text-white p-8 rounded-2xl shadow-md flex flex-col justify-center h-full">

              {!loggedInUser ? (
                <div className="text-center">
                  <h3 className="text-xl font-semibold mb-4">Log in to reserve food</h3>
                  <button
                    onClick={() => router.push("/login")}
                    className="bg-white text-teal-700 font-semibold py-2 px-4 rounded-md hover:bg-gray-100"
                  >
                    Log In
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="text-xl font-semibold mb-6 text-center">
                    Reserve Food
                  </h3>

                  <form className="flex flex-col gap-4" onSubmit={handleReserve}>
                    {/* Name */}
                    <div>
                      <label className="block text-sm mb-1">Full Name</label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="p-2 w-full rounded-md text-black"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm mb-1">BU Email</label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="p-2 w-full rounded-md text-black"
                      />
                    </div>

                    {/* MULTI-ITEM SELECT UI */}
                    {items.map((it, index) => (
                      <div key={index} className="flex gap-2 items-center">
                        {/* Food Dropdown */}
                        <select
                          required
                          value={it.food}
                          onChange={(e) => {
                            const updated = [...items];
                            updated[index].food = e.target.value;
                            setItems(updated);
                          }}
                          className="p-2 rounded-md text-black w-1/2"
                        >
                          <option value="">Select item</option>
                          {event.food_items.map((item, i) =>
                            item.quantity > 0 ? (
                              <option key={i} value={item.name}>
                                {item.name} ({item.quantity} left)
                              </option>
                            ) : null
                          )}
                        </select>

                        {/* Quantity Input */}
                        <input
                          type="number"
                          min="1"
                          max="3"
                          value={it.quantity}
                          onChange={(e) => {
                            const updated = [...items];
                            updated[index].quantity = Number(e.target.value);
                            setItems(updated);
                          }}
                          className="p-2 w-20 rounded-md text-black"
                        />

                        {/* Remove button */}
                        {index > 0 && (
                          <button
                            type="button"
                            onClick={() =>
                              setItems(items.filter((_, idx) => idx !== index))
                            }
                            className="text-white px-2 text-lg"
                          >
                            ✕
                          </button>
                        )}
                      </div>
                    ))}

                    {/* Add Another Item */}
                    <button
                      type="button"
                      onClick={() => setItems([...items, { food: "", quantity: 1 }])}
                      className="bg-white text-teal-700 py-1 px-3 rounded-md hover:bg-gray-100 mt-1"
                    >
                      + Add Another Item
                    </button>

                    {/* Submit */}
                    <button
                      type="submit"
                      className="bg-white text-teal-700 font-semibold py-2 rounded-md hover:bg-gray-100 mt-4"
                    >
                      Reserve
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>

        </div>
      </main>

      <footer className="bg-black text-white text-center text-sm py-6 px-4 mt-12">
        <p>Boston University Center of Computing & Data Sciences: Duan Family Spark! Initiative</p>
        <p>665 Commonwealth Ave., Boston, MA 02215 | Floor 2, Spark! Space</p>
        <p>buspark@bu.edu</p>
      </footer>
    </div>
  );
}
