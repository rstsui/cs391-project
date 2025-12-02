"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";

export default function CreateEvent() {
  const router = useRouter();

  // Admin authorization state
  const [authorized, setAuthorized] = useState(false);
  const [loading, setLoading] = useState(true);

  // Form fields
  const [eventName, setEventName] = useState("");
  const [email, setEmail] = useState("");
  const [foodType, setFoodType] = useState("");
  const [quantity, setQuantity] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");

  // Check admin role
 useEffect(() => {
  async function checkAccess() {
    setLoading(true);

    const { data: authData } = await supabase.auth.getUser();
    const user = authData?.user;

    if (!user) {
      router.push("/login");
      return;
    }

    // Load their profile
    const { data: profile, error } = await supabase
      .from("profiles")
      .select("role")
      .eq("id", user.id)
      .maybeSingle();

    // If profile missing — create one
    if (!profile) {
      await supabase.from("profiles").insert([
        { id: user.id, email: user.email, role: "user" }
      ]);

      router.push("/request_access");
      return;
    }

    // Now check permissions
    if (profile.role !== "admin") {
      router.push("/request_access");
      return;
    }

    setAuthorized(true);
    setLoading(false);
  }

  checkAccess();
}, []);

  // Submit Handler
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const { error } = await supabase.from("events").insert({
      title: eventName,
      organizer_email: email,
      type_of_food: foodType,
      quantity: quantity,
      location: location,
      event_date: date,
    });

    if (error) {
      console.error(error);
      alert("Failed to create event.");
      return;
    }

    alert("Event created!");
    router.push("/profile_reserve");
  };

  if (!authorized) return null;

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-teal-100 via-white to-teal-50">
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
                placeholder="Enter event name"
                value={eventName}
                onChange={(e) => setEventName(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-teal-500 focus:outline-none"
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
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-teal-500 focus:outline-none"
              />
            </div>

            {/* Type of Food */}
            <div>
              <label className="block text-gray-700 mb-1">Type of Food</label>
              <input
                type="text"
                placeholder="Enter type of food"
                value={foodType}
                onChange={(e) => setFoodType(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-teal-500 focus:outline-none"
              />
            </div>

            {/* Quantity */}
            <div>
              <label className="block text-gray-700 mb-1">Quantity</label>
              <input
                type="number"
                placeholder="Enter quantity"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-teal-500 focus:outline-none"
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
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-teal-500 focus:outline-none"
              />
            </div>

            {/* Date */}
            <div>
              <label className="block text-gray-700 mb-1">Date</label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-teal-500 focus:outline-none"
              />
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
