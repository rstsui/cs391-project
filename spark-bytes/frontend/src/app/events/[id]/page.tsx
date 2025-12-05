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
  const [selectedFood, setSelectedFood] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [loggedInUser, setLoggedInUser] = useState<any>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  
  // TEMPORARY: dummy location data for EventMap
  const dummyLat = 42.3498;
  const dummyLng = -71.0990;

  // Fetch event + RSVPs
  useEffect(() => {
    async function loadEvent() {
      const { data, error } = await supabase
        .from("events")
        .select("*")
        .eq("id", eventId)
        .maybeSingle();
      // Check user login status
    // Check user login status
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

  // Submit RSVP
  async function handleReserve(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!event) return;

    // 1. Capacity check
    if (event.attendees >= event.capacity) {
      alert("This event is full.");
      return;
    }

    // 2. Food availability
    const foodObj = event.food_items.find((f) => f.name === selectedFood);
    if (!foodObj) {
      alert("Invalid food selection.");
      return;
    }

    if (quantity > foodObj.quantity) {
      alert("Not enough quantity available.");
      return;
    }

    // 3. Max 3 per person
    if (quantity > 3) {
      alert("You can only reserve up to 3 items.");
      return;
    }

    // 4. Prevent duplicate RSVPs by email
    const { data: existingRSVP } = await supabase
      .from("rsvps")
      .select("*")
      .eq("email", email)
      .eq("event_id", eventId);

    if (existingRSVP && existingRSVP.length > 0) {
      alert("You already reserved food for this event.");
      return;
    }

    // Insert new RSVP
    const { error } = await supabase.from("rsvps").insert({
      event_id: event.id,
      name,
      email,
      food_item: selectedFood,
      quantity,
    });

    if (error) {
      console.error("SUPABASE RSVP ERROR →", JSON.stringify(error, null, 2));
      alert("Failed to reserve.");
      return;
    }

    // Update event attendees count AND food quantity
    const updatedFood = event.food_items.map((item) =>
      item.name === selectedFood
        ? { ...item, quantity: item.quantity - quantity }
        : item
    );

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
          {/* Event Info */}
          <div className="md:w-2/3 w-full bg-white p-8 rounded-2xl shadow-sm">
            <h2 className="text-3xl font-semibold mb-3">{event.title}</h2>

            <p className="text-gray-700 mb-6 leading-relaxed">
              {event.description}
            </p>

            <div className="space-y-3 mb-8 text-gray-600 text-sm">
              <p>
                <strong>Location:</strong> {event.location}
              </p>
              <p>
                <strong>Date:</strong> {event.event_date}
              </p>
              <p>
                <strong>Time:</strong> {formatTime(event.event_time)}
              </p>
              <p>
                <strong>Created by:</strong> {event.organizer_email}
              </p>
              <p>
                <strong>Available Food:</strong>
              </p>
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
              <EventMap lat={dummyLat} lng={dummyLng} />
            </div>
          </div>

          {/* Reservation Form */}
{/* Reservation Form / Login Prompt */}
<div className="md:w-1/3 w-full">
  <div className="bg-teal-600 text-white p-8 rounded-2xl shadow-md h-full flex flex-col justify-center">

    {/* ⭐ If not logged in → show login message */}
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
        {/* ⭐ If logged in → show reservation form */}
        <h3 className="text-xl font-semibold mb-6 text-center">
          Reserve Food
        </h3>

        <form className="flex flex-col gap-4" onSubmit={handleReserve}>
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

          <div>
            <label className="block text-sm mb-1">Select Food</label>
            <select
              required
              value={selectedFood}
              onChange={(e) => setSelectedFood(e.target.value)}
              className="p-2 w-full rounded-md text-black"
            >
              <option value="">Select an item</option>
              {event.food_items.map((item, i) =>
                item.quantity > 0 ? (
                  <option key={i} value={item.name}>
                    {item.name} ({item.quantity} left)
                  </option>
                ) : null
              )}
            </select>
          </div>

          <div>
            <label className="block text-sm mb-1">Quantity</label>
            <input
              type="number"
              min="1"
              max="3"
              required
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="p-2 w-full rounded-md text-black"
            />
            <p className="text-xs mt-1 opacity-80">Max 3 per person</p>
          </div>

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

      {/* Footer */}
      <footer className="bg-black text-white text-center text-sm py-6 px-4 mt-12">
        <p>Boston University Center of Computing & Data Sciences: Duan Family Spark! Initiative</p>
        <p>665 Commonwealth Ave., Boston, MA 02215 | Floor 2, Spark! Space</p>
        <p>buspark@bu.edu</p>
      </footer>
    </div>
  );
}
