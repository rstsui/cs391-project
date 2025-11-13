import Image from "next/image";
import Link from "next/link";

export default function ProfilePage() {
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

      {/* Profile Section */}
        <section className="flex flex-col items-center mt-16">
        {/* Profile Picture */}
        <div className="w-32 h-32 rounded-full bg-gray-300 overflow-hidden">
            <Image
            src="/profile.jpg" // Replace with actual profile image path
            alt=""
            width={128}
            height={128}
            className="object-cover w-full h-full"
            />
        </div>

        {/* Student Info Box */}
        <div className="bg-white border border-gray-300 rounded-2xl shadow-md p-6 mt-6 text-center w-80">
            <h2 className="text-xl font-semibold mb-2">Anna Smith</h2>
            <p className="text-gray-700">College of Arts and Sciences</p>
            <p className="text-gray-700">Spring 2028</p>
            <p className="text-gray-700 mt-2">anasmit@bu.edu</p>
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
