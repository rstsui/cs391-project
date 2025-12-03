"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
function formatTime(timeString: string) {
  if (!timeString) return "";

  const [hourStr, minuteStr] = timeString.split(":");
  let hour = parseInt(hourStr);
  const minute = parseInt(minuteStr);

  const ampm = hour >= 12 ? "PM" : "AM";
  hour = hour % 12;
  if (hour === 0) hour = 12; // convert 0 → 12 AM

  return `${hour}:${minute.toString().padStart(2, "0")} ${ampm}`;
}


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

export default function SearchPage() {
  const [events, setEvents] = useState<EventType[]>([]);
  const [filtered, setFiltered] = useState<EventType[]>([]);
  const [query, setQuery] = useState("");

  // Load events
  useEffect(() => {
    async function loadEvents() {
      const { data, error } = await supabase
        .from("events")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error(error);
        return;
      }

      setEvents(data as EventType[]);
      setFiltered(data as EventType[]);
    }

    loadEvents();
  }, []);


  const handleSearch = async () => {
  const { data, error } = await supabase
    .from("events")
    .select("*")
    .or(`title.ilike.%${query}%,location.ilike.%${query}%,food_items.ilike.%${query}%`)
    .order("created_at", { ascending: false });

  if (error) {
    console.error(error);
    return;
  }

  setFiltered(data || []);
};



  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-white to-teal-100 flex flex-col">
      
      {/* Search Section */}
      <section className="flex flex-col items-center justify-center flex-grow px-4">
        <h1 className="text-3xl font-semibold mb-6 text-center">
          Search Spark!Bytes Events
        </h1>
  
        {/* Search Bar */}
        <div className="flex w-full max-w-md mb-6">
          <input
            type="text"
            placeholder="Search by name, food, location..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-grow border border-gray-300 rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
          <button
            onClick={handleSearch}
            className="bg-teal-600 text-white px-4 py-2 rounded-r-lg hover:bg-teal-700"
          >
            Search
          </button>
        </div>
  
        {/* Events Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4xl mt-10">
  
          {filtered.length === 0 && (
            <p className="text-gray-600 text-center w-full col-span-full">
              No events found.
            </p>
          )}
  
          {filtered.map((event) => (
            <Link key={event.id} href={`/events/${event.id}`}>
              <div className="bg-white shadow-md border border-gray-300 rounded-xl p-5 cursor-pointer hover:shadow-lg transition">
                
                {/* Title */}
                <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
  
                {/* Location */}
                <p className="text-gray-700">
                  <strong>Location:</strong> {event.location}
                </p>
  
                {/* Date */}
                <p className="text-gray-700">
                  <strong>Date:</strong> {event.event_date}
                </p>
  
                {/* Time */}
                <p className="text-gray-700">
                  <strong>Time:</strong> {formatTime(event.event_time)}
                </p>
  
                {/* Food List */}
                <p className="text-gray-700">
                  <strong>Food:</strong>
                </p>
                <ul className="ml-4 list-disc text-gray-700">
                  {event.food_items?.map((item: any, index: number) => (
                    <li key={index}>
                      {item.name} — {item.quantity} left
                    </li>
                  ))}
                </ul>
  
              </div>
            </Link>
          ))}
        </div>
      </section>

      <footer className="bg-black text-white text-center text-sm py-6 px-4 mt-auto">
        <p>
          Boston University Center of Computing & Data Sciences: Duan Family Spark! Initiative
        </p>
        <p>665 Commonwealth Ave., Boston, MA 02215 | Floor 2, Spark! Space</p>
        <p>buspark@bu.edu</p>
      </footer>
  
    </div>
  );
}