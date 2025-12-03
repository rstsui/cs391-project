"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";

type FoodItem = {
  name: string;
  quantity: string;
};

export default function CreateEvent() {
  const router = useRouter();

  // Admin authorization
  const [authorized, setAuthorized] = useState(false);
  const [loading, setLoading] = useState(true);

  // Form fields
  const [eventName, setEventName] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [description, setDescription] = useState("");
  const [capacity, setCapacity] = useState<number>(50); // default 50




  // Dynamic food items
  const [foodItems, setFoodItems] = useState<FoodItem[]>([
    { name: "", quantity: "" },
  ]);

  // Admin check
  useEffect(() => {
    async function checkAccess() {
      setLoading(true);

      const { data: authData } = await supabase.auth.getUser();
      const user = authData?.user;

      if (!user) {
        router.push("/login");
        return;
      }

      const { data: profile } = await supabase
        .from("profiles")
        .select("role")
        .eq("id", user.id)
        .maybeSingle();

      if (!profile) {
        await supabase.from("profiles").insert([
          { id: user.id, email: user.email, role: "user" },
        ]);
        router.push("/request_access");
        return;
      }

      if (profile.role !== "admin") {
        router.push("/request_access");
        return;
      }

      setAuthorized(true);
      setLoading(false);
    }

    checkAccess();
  }, [router]);

  // Add food item
  const addFoodItem = () => {
    setFoodItems((prev) => [...prev, { name: "", quantity: "" }]);
  };

  // Update field in a food item
  const updateFoodItem = (
    index: number,
    field: "name" | "quantity",
    value: string
  ) => {
    const updated = [...foodItems];
    updated[index][field] = value;
    setFoodItems(updated);
  };

  // Remove food item
  const removeFoodItem = (index: number) => {
    setFoodItems(foodItems.filter((_, i) => i !== index));
  };

  // Submit handler
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const cleanFoodItems = foodItems.filter(
      (item) => item.name.trim() !== "" && item.quantity !== ""
    );

    const { error } = await supabase.from("events").insert({
      title: eventName,
      organizer_email: email,
      location: location,
      description,
      event_date: date,
      event_time: time,
      capacity,
      attendees: 0, // need to initialize to zero before anyone RSVPS
      food_items: cleanFoodItems,
    });

    if (error) {
      console.error(error);
      alert("Failed to create event.");
      return;
    }

    alert("Event created!");
    router.push("/profile_reserve");
  };

  if (!authorized || loading) return null;

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-teal-100 via-white to-teal-50">
      <section className="flex flex-col items-center justify-center flex-grow px-4">
        <div className="bg-white rounded-2xl shadow-md p-8 w-full max-w-lg">
          <h2 className="text-2xl font-semibold text-center mb-6">
            Create an Event
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Event Name */}
            <div>
              <label className="block text-gray-700 mb-1">Event Name</label>
              <input
                type="text"
                placeholder="Enter event name"
                value={eventName}
                onChange={(e) => setEventName(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-teal-500"
                required
              />
            </div>
            {/* Description */}
            <div>
              <label className="block text-gray-700 mb-1">Description</label>
              <textarea
                placeholder="Describe the event..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 h-28 resize-none focus:ring-2 focus:ring-teal-500"
                required
              />
            </div>


            {/* BU Email */}
            <div>
              <label className="block text-gray-700 mb-1">BU Email</label>
              <input
                type="email"
                placeholder="Enter your BU email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-teal-500"
                required
              />
            </div>

            {/* Location */}
            <div>
              <label className="block text-gray-700 mb-1">Location</label>
              <input
                type="text"
                placeholder="Enter location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-teal-500"
                required
              />
            </div>

            {/* Date */}
            <div>
              <label className="block text-gray-700 mb-1">Date</label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-teal-500"
                required
              />
            </div>
            <div>
            <label className="block text-gray-700 mb-1">Time</label>
            <input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-teal-500"
              required
            />
          </div>
          {/* Capacity */}
          <div>
            <label className="block text-gray-700 mb-1"> Event Capacity</label>
            <input
              type="number"
              min="1"
              placeholder="Number of attendees allowed"
              value={capacity}
              onChange={(e) => setCapacity(Number(e.target.value))}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-teal-500"
              required
            />
          </div>



            {/* Food Items */}
            <div>
              <label className="block text-gray-700 mb-2">Food Items</label>

              {foodItems.map((item: FoodItem, index: number) => (
                <div key={index} className="flex gap-2 mb-2 items-center">
                  <input
                    type="text"
                    placeholder="Food name"
                    value={item.name}
                    onChange={(e) =>
                      updateFoodItem(index, "name", e.target.value)
                    }
                    className="flex-1 border border-gray-300 rounded-lg px-3 py-2"
                    required
                  />

                  <input
                    type="number"
                    placeholder="Qty"
                    value={item.quantity}
                    onChange={(e) =>
                      updateFoodItem(index, "quantity", e.target.value)
                    }
                    className="w-24 border border-gray-300 rounded-lg px-3 py-2"
                    required
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
              className="w-full bg-teal-600 text-white py-2 rounded-lg hover:bg-teal-700 transition-colors"
            >
              Submit
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
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
