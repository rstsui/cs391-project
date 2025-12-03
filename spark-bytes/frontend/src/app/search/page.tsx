"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";


export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setLoading(true);

    
    const { data, error } = await supabase
      .from("events")
      .select("*")
      .ilike("name", `%${query}%`);

    if (error) {
      console.error(error);
      setLoading(false);
      return;
    }

    setResults(data);
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-white to-teal-100 flex flex-col">
      <section className="flex flex-col items-center justify-center flex-grow">
        <h1 className="text-3xl font-semibold mb-6 text-center">
          Search Spark!Bytes...
        </h1>

        {/* Search Bar */}
        <div className="flex w-full max-w-md mb-6">
          <input
            type="text"
            placeholder="Type to search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-grow border border-gray-300 rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleSearch}
            className="bg-teal-600 text-white px-4 py-2 rounded-r-lg hover:bg-teal-700"
          >
            Search
          </button>
        </div>

        {/* Search Results */}
        <div className="w-full max-w-md space-y-4">
          {loading && <p className="text-center text-gray-600">Searching...</p>}

          {!loading && results.length === 0 && query !== "" && (
            <p className="text-center text-gray-600">No events found.</p>
          )}

          {results.map((event) => (
            <div
              key={event.id}
              className="bg-white shadow-md rounded-lg p-4 border border-gray-200"
            >
              <h2 className="text-lg font-semibold">{event.name}</h2>
              <p className="text-gray-600">Food: {event.food_item}</p>
              <p className="text-gray-600">Location: {event.location}</p>
              <p className="text-gray-600">
                Date: {new Date(event.date).toLocaleDateString()}
              </p>
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
