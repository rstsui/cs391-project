"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function EventOrganizer() {
  const [rsvps, setRsvps] = useState<
  { name: string; food_item: string | null; quantity: number }[]
    >([]);

  useEffect(() => {
    async function loadRSVPs() {
      const { data, error } = await supabase
        .from("rsvps")
        .select("name, food_item, quantity");

      if (error) {
        console.error("Error loading RSVPs:", error);
      } else {
        setRsvps(data);
      }
    }

    loadRSVPs();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      
      

      {/* Main Section */}
      <section className="flex-grow px-8 py-12">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Event Sign-Up Overview
        </h1>

        <div className="overflow-x-auto bg-white shadow-md rounded-2xl p-6 border border-gray-200">
          <table className="min-w-full text-left text-gray-800">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-3 px-4 border-b font-semibold">Name</th>
                <th className="py-3 px-4 border-b font-semibold">Food Type</th>
                <th className="py-3 px-4 border-b font-semibold">Amount</th>
              </tr>
            </thead>

            <tbody>
              {rsvps.length === 0 ? (
                <tr>
                  <td className="py-3 px-4 border-b text-center" colSpan={3}>
                    No RSVPs yet.
                  </td>
                </tr>
              ) : (
                rsvps.map((item, index) => (
                  <tr key={index}>
                    <td className="py-3 px-4 border-b">{item.name}</td>
                    <td className="py-3 px-4 border-b">{item.food_item}</td>
                    <td className="py-3 px-4 border-b">{item.quantity}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white text-center text-sm py-6 px-4 mt-auto">
        <p>Boston University Center of Computing & Data Sciences: Duan Family Spark! Initiative</p>
        <p>665 Commonwealth Ave., Boston, MA 02215 | Floor 2, Spark! Space</p>
        <p>buspark@bu.edu</p>
      </footer>
    </div>
  );
}
