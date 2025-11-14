import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">

      {/* Hero Section */}
      <main className="flex flex-col items-center justify-center text-center py-16 px-4">
        <h1 className="text-3xl font-semibold mb-4">Welcome to Spark!Bytes</h1>
        <p className="max-w-xl text-gray-700 mb-6">
          Discover free food from BU events, reduce waste, and connect with your community.
        </p>
        <Link href="/events/test">
          <button className="bg-teal-600 text-white px-6 py-2 rounded-full hover:bg-teal-700">
            Explore Events
          </button>
        </Link>
      </main>

      {/* Info Cards */}
      <section className="flex flex-wrap justify-center gap-6 px-8 pb-12">
        {[
          { title: "Find Events", text: "See what’s happening around BU" },
          { title: "Reduce Waste", text: "Grab and reserve leftover food that would go uneaten" },
          { title: "Connect", text: "Meet new people and support sustainability" },
        ].map((card) => (
          <div
            key={card.title}
            className="bg-teal-600 text-white w-64 p-6 rounded-2xl text-center shadow-lg"
          >
            <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
            <p className="mb-4">{card.text}</p>
            <div className="bg-white text-black h-24 flex items-center justify-center rounded-md">
              Picture
            </div>
          </div>
        ))}
      </section>
      <section className="bg-teal-600 text-white text-center py-12 px-4">
        <h2 className="text-xl mb-4">
          Join hundreds of BU students making a difference through sustainability
        </h2>
        <button className="bg-white text-teal-700 px-8 py-3 rounded-full font-semibold hover:bg-gray-100">
          Login with BU email
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white text-center text-sm py-6 px-4">
        <p>Boston University Center of Computing & Data Sciences: Duan Family Spark! Initiative</p>
        <p>665 Commonwealth Ave., Boston, MA 02215 | Floor 2, Spark! Space</p>
        <p>buspark@bu.edu</p>
      </footer>
    </div>
  );
}
