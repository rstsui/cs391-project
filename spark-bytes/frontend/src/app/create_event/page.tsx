"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";

export default function CreateEvent() {
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);
  const [loading, setLoading] = useState(true);

  const [eventName, setEventName] = useState("");
  const [email, setEmail] = useState("");
  const [foodItem, setFoodItem] = useState("");
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { error } = await supabase.from("events").insert([
      {
        name: eventName,
        email,
        food_item: foodItem,
        quantity: Number(quantity),
        location,
        date: new Date(date).toISOString(),
        time: date,
      },
    ]);

    if (error) {
      alert("Failed to create event.");
      return;
    }

    alert("Event created!");
    router.push("/profile_reserve");
  };

  if (!authorized) return null;

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">


      {/* FORM SECTION */}
      <section className="flex flex-col items-center justify-center flex-grow px-4">
        <div className="bg-white rounded-2xl shadow-md p-8 w-full max-w-lg">
          <h2 className="text-2xl font-semibold text-center mb-6">
            Create an Event
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-1">Event Name</label>
              <input
                type="text"
                value={eventName}
                onChange={(e) => setEventName(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-teal-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1">BU Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-teal-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1">Type of Food</label>
              <input
                type="text"
                value={foodItem}
                onChange={(e) => setFoodItem(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-teal-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1">Quantity</label>
              <input
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-teal-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1">Location</label>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-teal-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1">Date</label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-teal-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-teal-600 text-white py-2 rounded-lg hover:bg-teal-700 transition-colors"
            >
              Submit
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-white text-center text-sm py-6 mt-auto">
        <p>Boston University Center of Computing & Data Sciences: Duan Family Spark! Initiative</p>
        <p>665 Commonwealth Ave., Boston, MA 02215 | Floor 2, Spark! Space</p>
        <p>buspark@bu.edu</p>
      </footer>

    </div>
  );
}
