"use client";

import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">

      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-teal-300 opacity-20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-teal-500 opacity-20 rounded-full blur-3xl -z-10"></div>
      <section className="flex flex-col-reverse md:flex-row items-center justify-between px-10 lg:px-24 py-20">
        <div className="max-w-xl animate-fadeIn">
          <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight">
            Discover Free Food.<br />
            Reduce Waste.<br />
            <span className="text-teal-600">Connect at BU.</span>
          </h1>
          <p className="mt-4 text-gray-600 text-lg leading-relaxed">
            Spark!Bytes helps reduce food waste by allowing BU students to reserve food from events on campus and connect with others
          </p>
          <Link href="/search">
            <button className="mt-6 px-8 py-3 bg-teal-600 text-white rounded-full font-semibold shadow-md hover:bg-teal-700 hover:shadow-lg transition">
              Explore Events
            </button>
          </Link>
        </div>
        <div className="mb-10 md:mb-0">
          <div className="relative w-[500px] h-[300px] rounded-2xl overflow-hidden shadow-xl border border-gray-200 hover:scale-105 transition duration-300">
            <Image
              src="/sparkhomepic.jpg"
              fill
              alt="Food"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 px-10 lg:px-24 py-10">
        {[
          { title: "1. Find Events", text: "See what’s happening across BU" },
          { title: "2. Reduce Waste", text: "Reserve leftover event food" },
          { title: "3. Connect", text: "Meet new people on campus" },
        ].map((card) => (
          <div
            key={card.title}
            className="bg-white/60 backdrop-blur-xl border border-gray-200 shadow-xl p-8 rounded-3xl hover:shadow-2xl hover:-translate-y-2 transition cursor-pointer"
          >
            <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
            <p className="text-gray-700">{card.text}</p>
          </div>
        ))}
      </section>

      <section className="px-10 lg:px-24 py-12">
        <h2 className="text-3xl font-bold mb-6 text-center">Food Moments at BU</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {["gallery1.jpg", "gallery4.jpg", "gallery3.jpg"].map((img) => (
            <div
              key={img}
              className="relative h-52 rounded-2xl overflow-hidden shadow-lg hover:scale-[1.03] transition duration-300"
            >
              <Image src={`/${img}`} alt="Gallery" fill className="object-cover" />
            </div>
          ))}
        </div>
      </section>

      <section className="bg-teal-600 text-white text-center py-16 px-6 mt-10">
        <h2 className="text-3xl font-semibold mb-4">Make BU More Sustainable</h2>
        <p className="text-lg opacity-90 mb-6 max-w-xl mx-auto">
          Join hundreds of BU students reducing waste across campus.
        </p>

        <Link href="/login">
          <button className="bg-white text-teal-700 px-10 py-3 rounded-full font-semibold text-lg hover:bg-gray-100 shadow-md transition">
            Login with BU Email
          </button>
        </Link>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-white text-center text-sm py-10 mt-12">
        <p>Boston University Center of Computing & Data Sciences</p>
        <p>Duan Family Spark! Initiative</p>
        <p>665 Commonwealth Ave • Boston, MA 02215 • Floor 2, Spark! Space</p>
        <p className="mt-2">buspark@bu.edu</p>
      </footer>

    </div>
  );
}
