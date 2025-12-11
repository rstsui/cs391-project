"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";

/* Format time like 7:30 PM */
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
type FoodItem = {
  name: string;
  quantity: number;
};


export default function ProfileReserve() {
  const router = useRouter();

  const [rsvps, setRsvps] = useState<any[]>([]);
  const [events, setEvents] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const [editingRsvp, setEditingRsvp] = useState<any>(null);
  const [editItems, setEditItems] = useState<any[]>([]); 
  

  /* Load RSVPs + Events */
  useEffect(() => {
    const loadData = async () => {
      const { data } = await supabase.auth.getUser();
      const user = data?.user;

      if (!user) {
        router.push("/login");
        return;
      }

      if (!user.email?.endsWith("@bu.edu")) {
        await supabase.auth.signOut();
        alert("You must use your BU email to log in.");
        router.push("/login");
        return;
      } 

      // Load RSVPs
      const { data: rsvpData, error: rsvpError} = await supabase
      .from("rsvps")
      .select("*, rsvp_items(*)")   // JOIN rsvp_items
      .eq("email", user.email);
    

      if (rsvpError) console.error("RSVP fetch error:", rsvpError);

      // Load events
      const { data: eventData, error: eventError } = await supabase
        .from("events")
        .select("*");

      if (eventError) console.error("Event fetch error:", eventError);

      setRsvps(rsvpData || []);
      setEvents(eventData || []);
      setLoading(false);
    };

    loadData();
  }, [router]);

  const updateItemQuantity = (index: number, newQty: number) => {
    setEditItems(prev =>
      prev.map((item, i) =>
        i === index ? { ...item, quantity: newQty } : item
      )
    );
  };
  

  /* CANCEL A RESERVATION */
/* CANCEL A RESERVATION — supports multiple food items */
const handleCancel = async (rsvp: any) => {
  const yes = confirm("Cancel this reservation?");
  if (!yes) return;

  // 1. Load all food items attached to this RSVP
  const { data: items, error: itemsError } = await supabase
    .from("rsvp_items")
    .select("*")
    .eq("rsvp_id", rsvp.id);

  if (itemsError) {
    console.error(itemsError);
    alert("Could not load reservation items.");
    return;
  }

  const event = events.find(e => e.id === rsvp.event_id);
  if (!event) {
    alert("Event not found.");
    return;
  }

  // 2. Restore EVERY food item qty
  let updatedFood = [...event.food_items];

  items.forEach((item: any) => {
    updatedFood = updatedFood.map((food: any) =>
      food.name === item.food_item
        ? { ...food, quantity: food.quantity + item.quantity }
        : food
    );
  });

  // 3. Update event inventory + attendees count
  const { error: updateError } = await supabase
    .from("events")
    .update({
      food_items: updatedFood,
      attendees: Math.max(0, (event.attendees || 1) - 1)
    })
    .eq("id", event.id);

  if (updateError) {
    console.error(updateError);
    alert("Failed to update event inventory.");
    return;
  }

  // 4. Delete all rsvp_items rows for this rsvp
  await supabase.from("rsvp_items").delete().eq("rsvp_id", rsvp.id);

  // 5. Delete the rsvp itself
  const { error: deleteError } = await supabase
    .from("rsvps")
    .delete()
    .eq("id", rsvp.id);

  if (deleteError) {
    console.error(deleteError);
    alert("Failed to delete RSVP.");
    return;
  }

  alert("Reservation canceled.");

  // 6. Update UI
  setEvents(prev =>
    prev.map(e =>
      e.id === event.id
        ? { ...e, food_items: updatedFood, attendees: event.attendees - 1 }
        : e
    )
  );

  setRsvps(prev => prev.filter(x => x.id !== rsvp.id));
};
/* SAVE EDIT — supports multiple food items */
/* SAVE EDIT — supports multiple food items */
const handleEditSubmit = async () => {
  if (!editingRsvp) return;

  const rsvpId = editingRsvp.id;
  const event = events.find((e) => e.id === editingRsvp.event_id);
  if (!event) return;

  // Load existing items safely
  const { data: existingItemsRaw } = await supabase
    .from("rsvp_items")
    .select("*")
    .eq("rsvp_id", rsvpId);

  const existingItems = existingItemsRaw || [];
  let updatedFood = [...event.food_items];

  // Loop through every existing reserved item
  for (const existing of existingItems) {
    const edited = editItems.find((e) => e.food_item === existing.food_item);

    // If UI somehow doesn't send something, default to old quantity
    const newQty = edited?.quantity ?? existing.quantity;
    const oldQty = existing.quantity;

    // Validate range
    if (newQty < 1) {
      alert("Quantity must be at least 1.");
      return;
    }
    if (newQty > 3) {
      alert("Max quantity per item is 3.");
      return;
    }

    // Update inventory: add back old, subtract new
    updatedFood = updatedFood.map((f) =>
      f.name === existing.food_item
        ? { ...f, quantity: f.quantity + oldQty - newQty }
        : f
    );

    // Prevent negative inventory
    const check = updatedFood.find((f) => f.quantity < 0);
    if (check) {
      alert(`Not enough ${check.name} available.`);
      return;
    }

    // Update item quantity in DB
    await supabase
      .from("rsvp_items")
      .update({ quantity: newQty })
      .eq("id", existing.id);
  }

  // Update event inventory in DB
  await supabase
    .from("events")
    .update({ food_items: updatedFood })
    .eq("id", event.id);

  alert("Reservation updated!");

  // Update state (UI)
  setEvents((prev) =>
    prev.map((ev) =>
      ev.id === event.id ? { ...ev, food_items: updatedFood } : ev
    )
  );

  setRsvps((prev) =>
    prev.map((r) =>
      r.id === rsvpId
        ? { ...r, rsvp_items: editItems } // filtered & updated items
        : r
    )
  );

  setEditingRsvp(null);
};

  /* UI */
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white via-teal-50 to-teal-100">
      <main className="flex-1 px-10 py-16 max-w-6xl mx-auto w-full">
        <h1 className="text-3xl font-semibold text-center mb-2">My Reservations</h1>
        <p className="text-lg text-center mb-12">Food pickups you have reserved</p>

        <section className="flex flex-wrap justify-center gap-6 px-8 pb-12 mt-10">
          {rsvps.length === 0 && (            <p className="text-gray-700 text-center">You have no reservations yet.</p>
          )}

          {rsvps.map((rsvp) => {
            const event = events.find((e) => e.id === rsvp.event_id);

            return (
              <div
                key={rsvp.id}
                className="bg-white border border-black w-72 p-6 rounded-2xl shadow-sm"
              >
                <h2 className="text-xl font-semibold">{event?.title}</h2>

                <p className="mt-3 text-gray-700">
                  <strong>Date:</strong> {event?.event_date}
                </p>

                <p className="text-gray-700">
                  <strong>Time:</strong> {formatTime(event?.event_time)}
                </p>

                <p className="text-gray-700">
                  <strong>Location:</strong> {event?.location}
                </p>

                <p className="text-gray-700 mt-3">
                    <strong>Items:</strong>
                  </p>
                  {rsvp.rsvp_items && rsvp.rsvp_items.length > 0 ? (
                    <ul className="list-disc ml-5 text-gray-700">
                      {rsvp.rsvp_items.map((item: any) => (
                        <li key={item.id}>
                          {item.food_item} &times; {item.quantity}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-700">No items reserved.</p>
                  )}


                <div className="flex gap-3 mt-6">
                  <button
                    onClick={() => handleCancel(rsvp)}
                    className="bg-red-500 text-white px-4 py-1 rounded-md hover:bg-red-600"
                  >
                    Cancel
                  </button>

                  <button
                    onClick={() => {
                      setEditingRsvp(rsvp);

                      setEditingRsvp(rsvp);
                      setEditItems(
                        rsvp.rsvp_items.map((i: any) => ({
                          id: i.id,
                          food_item: i.food_item,
                          quantity: i.quantity,
                        }))
                      );
                      
                    }}
                    className="bg-gray-200 text-gray-800 px-4 py-1 rounded-md hover:bg-gray-300"
                  >
                    Edit
                  </button>

                </div>
              </div>
            );
          })}
        </section>
      </main>

      {/* EDIT POPUP */}
      {editingRsvp && (
  <div className="fixed inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center z-50">
    <div className="bg-white p-6 rounded-xl w-96 shadow-xl">
      <h2 className="text-xl font-semibold mb-4">
        Edit Reservation — {
          events.find((e) => e.id === editingRsvp.event_id)?.title
        }
      </h2>

      {editItems.map((item: any, index: number) => (
        <div key={item.food_item} className="mb-4 border-b pb-3">
          <p className="font-medium">{item.food_item}</p>

          <label className="block text-sm mt-1">Quantity (1–3)</label>
          <input
            type="number"
            min={1}
            max={3}
            value={item.quantity}
            onChange={(e) =>
              updateItemQuantity(index, Number(e.target.value))
            }
            className="border w-full px-3 py-2 rounded"
          />
        </div>
      ))}

      <div className="flex justify-between mt-6">
        <button
          onClick={() => setEditingRsvp(null)}
          className="px-4 py-2 bg-gray-300 rounded"
        >
          Close
        </button>

        <button
          onClick={handleEditSubmit}
          className="px-4 py-2 bg-teal-600 text-white rounded"
        >
          Save Changes
        </button>
      </div>
    </div>
  </div>
)}


      <footer className="bg-black text-white text-center text-sm py-6 px-4 mt-auto">
        <p>Boston University Center of Computing & Data Sciences: Duan Family Spark! Initiative</p>
        <p>665 Commonwealth Ave., Boston, MA 02215 | Floor 2, Spark! Space</p>
        <p>buspark@bu.edu</p>
      </footer>
    </div>
  );
}
