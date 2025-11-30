import Image from 'next/image';
import Link from 'next/link';

export default function SearchPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-white to-teal-100 flex flex-col">
      <section className="flex flex-col items-center justify-center flex-grow">
        {/* Title */}
        <h1 className="text-3xl font-semibold mb-6 text-center">
          Search Spark!Bytes...
        </h1>

        {/* Search Input */}
        <div className="flex w-full max-w-md mb-6">
          <input
            type="text"
            placeholder="Type to search..."
            className="flex-grow border border-gray-300 rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="bg-teal-600 text-white px-4 py-2 rounded-r-lg hover:bg-teal-700">
            Search
          </button>
        </div>

        {/* Category Buttons */}
        <div className="flex items-center space-x-4">
          <span className="font-medium text-gray-700">Filters:</span>
          <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300">
            Dietary
          </button>
          <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300">
            Allergies
          </button>
          <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300">
            Vegan
          </button>
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
