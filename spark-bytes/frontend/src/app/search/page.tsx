"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function SearchPage() {
  const [events, setEvents] = useState<any[]>([]);
  const [filtered, setFiltered] = useState<any[]>([]);
  const [query, setQuery] = useState("");

  // Fetch events on load
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

      setEvents(data || []);
      setFiltered(data || []);
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
      
      <section className="flex flex-col items-center justify-center flex-grow px-4">
        <h1 className="text-3xl font-semibold mb-6 text-center">
          Search Spark!Bytes...
        </h1>

        <div className="flex w-full max-w-md mb-6">
          <input
            type="text"
            placeholder="Type to search..."
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

        {/* Events List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4xl mt-10">
          {filtered.length === 0 && (
            <p className="text-gray-600 text-center w-full col-span-full">
              No events found.
            </p>
          )}

          {filtered.map((event) => (
            <div key={event.id} className="bg-white shadow-md border border-gray-300 rounded-xl p-5">
              <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
              <p className="text-gray-700"><strong>Location:</strong> {event.location}</p>
              <p className="text-gray-700"><strong>Food:</strong> {event.tag}</p>
              <p className="text-gray-700"><strong>Quantity:</strong> {event.food_items}</p>
              <p className="text-gray-700"><strong>Date:</strong> {event.event_date}</p>
            </div>
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