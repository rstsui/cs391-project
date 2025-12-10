"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";
import { useAdminGuard } from "@/lib/useAdminGuard";

type FoodItem = {
  name: string;
  quantity: string;
};

export default function CreateEvent() {
  const router = useRouter();

  const { loading, authorized } = useAdminGuard();

  const [eventName, setEventName] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [description, setDescription] = useState("");
  const [capacity, setCapacity] = useState(50);

  const [foodItems, setFoodItems] = useState<FoodItem[]>([
    { name: "", quantity: "" },
  ]);

  // --------------------------
  // FOOD ITEM HELPERS
  // --------------------------
  const addFoodItem = () => {
    setFoodItems((prev) => [...prev, { name: "", quantity: "" }]);
  };

  const updateFoodItem = (
    index: number,
    field: "name" | "quantity",
    value: string
  ) => {
    const updated = [...foodItems];
    updated[index][field] = value;
    setFoodItems(updated);
  };

  const removeFoodItem = (index: number) => {
    setFoodItems(foodItems.filter((_, i) => i !== index));
  };

  // --------------------------
  // SUBMIT EVENT
  // --------------------------
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const cleanFoodItems = foodItems
      .filter((item) => item.name.trim() !== "" && item.quantity !== "")
      .map((item) => ({
        name: item.name.trim(),
        quantity: Number(item.quantity),
      }));

    const { error } = await supabase.from("events").insert({
      title: eventName,
      organizer_email: email,
      location,
      event_date: date,
      event_time: time,
      description,
      food_items: cleanFoodItems,
      capacity,
      attendees: 0, // new events start with 0 attendees
      created_at: new Date().toISOString(),
    });

    if (error) {
      console.error(error);
      alert("Failed to create event.");
      return;
    }

    alert("Event created!");
    router.push("/profile_reserve");
  };

  // --------------------------
  // LOADING + AUTH GUARD
  // --------------------------
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-lg">
        Checking access...
      </div>
    );
  }

  // useAdminGuard already redirected if not admin; render nothing here
  if (!authorized) return null;

  // --------------------------
  // PAGE UI
  // --------------------------
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white via-teal-50 to-teal-100">
      <section className="flex flex-col items-center justify-center flex-grow px-4">
        <div className="bg-white rounded-2xl shadow-md p-8 w-full max-w-lg">
          <h2 className="text-2xl font-semibold text-center mb-6">
            Create an Event
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Event Name */}
            <div>
              <label className="block text-gray-700 mb-1">Event Name</label>
              <input
                type="text"
                value={eventName}
                onChange={(e) => setEventName(e.target.value)}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
              />
            </div>

            {/* Organizer */}
            <div>
              <label className="block text-gray-700 mb-1">
                Organizer Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-gray-700 mb-1">
                Event Description
              </label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 h-24"
              />
            </div>

            {/* Location */}
            <div>
              <label className="block text-gray-700 mb-1">
                Location (please enter complete address or building name)
              </label>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
              />
            </div>

            {/* Date */}
            <div>
              <label className="block text-gray-700 mb-1">Date</label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
              />
            </div>

            {/* Time */}
            <div>
              <label className="block text-gray-700 mb-1">Time</label>
              <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
              />
            </div>

            {/* Capacity */}
            <div>
              <label className="block text-gray-700 mb-1">Capacity</label>
              <input
                type="number"
                min={1}
                value={capacity}
                onChange={(e) => setCapacity(Number(e.target.value))}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
              />
            </div>

            {/* Food Items */}
            <div>
              <label className="block text-gray-700 mb-2">Food Items</label>

              {foodItems.map((item, index) => (
                <div key={index} className="flex gap-2 mb-2 items-center">
                  <input
                    type="text"
                    placeholder="Food name"
                    value={item.name}
                    onChange={(e) =>
                      updateFoodItem(index, "name", e.target.value)
                    }
                    required
                    className="flex-1 border border-gray-300 rounded-lg px-3 py-2"
                  />

                  <input
                    type="number"
                    placeholder="Qty"
                    value={item.quantity}
                    onChange={(e) =>
                      updateFoodItem(index, "quantity", e.target.value)
                    }
                    required
                    className="w-24 border border-gray-300 rounded-lg px-3 py-2"
                  />

                  {foodItems.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeFoodItem(index)}
                      className="text-red-500 text-lg font-bold px-2"
                    >
                      ✕
                    </button>
                  )}
                </div>
              ))}

              <button
                type="button"
                onClick={addFoodItem}
                className="mt-2 text-sm text-teal-600 font-semibold"
              >
                + Add another food item
              </button>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-teal-600 text-white py-2 rounded-lg hover:bg-teal-700"
            >
              Submit
            </button>
          </form>
        </div>
      </section>

      <footer className="bg-black text-white text-center text-sm py-6 mt-auto">
        <p>Boston University Center of Computing & Data Sciences:</p>
        <p>Duan Family Spark! Initiative</p>
        <p>buspark@bu.edu</p>
      </footer>
    </div>
  );
}
