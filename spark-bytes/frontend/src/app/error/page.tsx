"use client";

import Link from "next/link";

export default function ErrorPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">

      {/* ERROR BOX */}
      <main className="flex flex-col items-center justify-center flex-grow px-4 text-center">
        <h2 className="text-2xl font-semibold mb-4">Oops! Something went wrong.</h2>
        <p className="mb-6">The page you’re looking for doesn’t exist or was moved.</p>

        <Link href="/">
          <button className="px-6 py-2 bg-teal-600 text-white rounded-full hover:bg-teal-700">
            Return Home
          </button>
        </Link>
      </main>

      {/* FOOTER */}
      <footer className="bg-black text-white text-center py-10 mt-16">
        <p>
          Boston University Center of Computing & Data Sciences:
          <br />Duan Family Spark! Initiative
          <br />
          665 Commonwealth Ave., Boston, MA 02215 <br />
          Floor 2, Spark! Space
        </p>
        <p className="mt-4">buspark@bu.edu</p>
      </footer>
    </div>
  );
}
