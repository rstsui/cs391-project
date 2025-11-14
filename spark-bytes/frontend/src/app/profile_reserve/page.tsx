import Image from "next/image";
import Link from "next/link";

export default function ProfileReserve() {
  return (
  <div className="min-h-screen flex flex-col bg-gradient-to-b from-white via-teal-50 to-teal-100">
    <main className="flex-1 px-10 py-16 max-w-6xl mx-auto w-full">
    <h1 className="text-3xl font-semibold text-center mb-2">
          My Events
        </h1>

        <p className="text-lg text-center mb-12">
          Food pickups you have reserved
        </p>
        <section className="flex flex-wrap justify-center gap-6 px-8 pb-12 mt-20">
          
        {["Event 1", "Event 2", "Event 3"].map((event, index) => (
            <div
            key={index}
            className="bg-white border border-black w-64 p-6 rounded-2xl text-left shadow-sm"
            >
            <div className="flex flex-col space-y-3">
                <p className="font-semibold">Name:</p>
                <p className="font-semibold">Organizer:</p>
                <p className="font-semibold">Date and Time:</p>
                    <div className="flex justify-start gap-3 mt-4">
                    <button className="bg-gray-200 text-gray-700 px-3 py-1 rounded-md border border-gray-300 hover:bg-gray-300 transition">
                        Vegan
                    </button>
                    <button className="bg-gray-200 text-gray-700 px-3 py-1 rounded-md border border-gray-300 hover:bg-gray-300 transition">
                        Allergy
                    </button>
                    </div>
            </div>
            </div>
        ))}
        </section>
      </main>
      {/* Footer */}
      <footer className="bg-black text-white text-center text-sm py-6 px-4 mt-auto">
        <p>Boston University Center of Computing & Data Sciences: Duan Family Spark! Initiative</p>
        <p>665 Commonwealth Ave., Boston, MA 02215 | Floor 2, Spark! Space</p>
        <p>buspark@bu.edu</p>
      </footer>

    </div>
  
  );
}
