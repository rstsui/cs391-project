"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function CreateEvent() {
  const [eventName, setEventName] = useState("");
  const [email, setEmail] = useState("");
  const [food, setFood] = useState("");
  const [quantity, setQuantity] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();

    const { data, error } = await supabase.from("events").insert([
      {
        name: eventName,
        email: email,
        food_item: food,
        quantity: Number(quantity),
        location: location,
        date: new Date(date).toISOString(), 
        time: date,
      },
    ]);

    if (error) {
      console.error("Error inserting event:", error);
      alert("Something went wrong!");
    } else {
      alert("Event submitted!");
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-teal-100 via-white to-teal-50">
      <section className="flex flex-col items-center justify-center flex-grow px-4">

        <div className="bg-white rounded-2xl shadow-md p-8 w-full max-w-lg">
          <h2 className="text-2xl font-semibold text-center mb-6">Create an Event</h2>

          <form className="space-y-4" onSubmit={handleSubmit}>

            <div>
              <label className="block text-gray-700 mb-1">Event Name</label>
              <input
                type="text"
                value={eventName}
                onChange={(e) => setEventName(e.target.value)}
                placeholder="Enter event name"
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1">BU Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your BU email"
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1">Type of Food</label>
              <input
                type="text"
                value={food}
                onChange={(e) => setFood(e.target.value)}
                placeholder="Enter type of food"
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1">Quantity</label>
              <input
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                placeholder="Enter quantity"
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1">Location</label>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Enter location"
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1">Date</label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-teal-600 text-white py-2 rounded-lg hover:bg-teal-700"
            >
              Submit
            </button>

          </form>
        </div>
      </section>
    </div>
  );
}
