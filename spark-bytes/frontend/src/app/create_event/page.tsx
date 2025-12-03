"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";

type FoodItem = {
  name: string;
  quantity: string;
};

export default function CreateEvent() {
  const router = useRouter();

  // Admin authorization state
  const [authorized, setAuthorized] = useState(false);
  const [loading, setLoading] = useState(true);

  const [eventName, setEventName] = useState("");
  const [email, setEmail] = useState("");
  const [foodType, setFoodType] = useState("");
  const [quantity, setQuantity] = useState("");
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
  
      // Fetch profile role
      const { data: profile, error } = await supabase
        .from("profiles")
        .select("role")
        .eq("id", user.id)
        .maybeSingle();
  
      if (error) {
        console.error("Profile loading error:", error);
        router.push("/login");
        return;
      }
  
      // If profile missing: make them a user
      if (!profile) {
        await supabase.from("profiles").insert([
          { id: user.id, email: user.email, role: "user" },
        ]);
        router.push("/request_access");
        return;
      }
  
      // Reject non-admins
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

  // Submit Handler
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const cleanFoodItems = foodItems.filter(
      (item) => item.name.trim() !== "" && item.quantity !== ""
    );

    const { error } = await supabase.from("events").insert({
      title: eventName,
      organizer_email: email,
      type_of_food: foodType,
      quantity: quantity,
      location: location,
      event_date: date,
    });

    if (error) {
      alert("Failed to create event.");
      return;
    }

    alert("Event created!");
    router.push("/profile_reserve");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-lg">
        Checking access...
      </div>
    );
  }
  
  if (!authorized) {
    return null; // blocked users see nothing before redirect
  }
  

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">


      {/* FORM SECTION */}
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
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-teal-500 focus:outline-none"
              />
            </div>


            <div>
              <label className="block text-gray-700 mb-1">BU Email</label>
              <input
                type="email"
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

            <div>
              <label className="block text-gray-700 mb-1">Location</label>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-teal-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1">Date</label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-teal-500 focus:outline-none"
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
