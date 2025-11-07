import Image from "next/image";
import Link from "next/link";

export default function LoggedOutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="bg-black text-white flex justify-between items-center px-8 py-4">
        <Image src="/next.svg" alt="Spark!Bytes logo" width={100} height={100} />
        <ul className="flex space-x-6 text-lg">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/events">Events</Link>
          </li>
          <li>
            <Link href="/create-event">Create Event</Link>
          </li>
          <li>
            <Link href="/login">Login</Link>
          </li>
        </ul>
      </nav>

      {/* Logged Out Confirmation Section */}
      <section className="flex flex-col items-center justify-center mt-20">
        <h1 className="text-2xl font-semibold mb-6">
          You have successfully logged out.
        </h1>
        <Link
            href="/login"
            className="border border-black text-black px-6 py-3 rounded-md hover:bg-teal-600 hover:text-white transition"
            >
            Log back in
        </Link>
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
