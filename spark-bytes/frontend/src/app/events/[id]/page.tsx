export default function EventInfoPage({ params }: { params: { id: string } }) {
    return (
      <div className="min-h-screen flex flex-col bg-gray-50">
        <nav className="bg-black text-white flex justify-between items-center px-8 py-4">
          <h1 className="text-xl font-bold">Spark!Bytes</h1>
          <ul className="flex space-x-6">
            <li>Home</li>
            <li>Events</li>
            <li>Create Event</li>
            <li>Login</li>
          </ul>
        </nav>
        <main className="flex justify-center py-16 px-4">
          <div className="flex flex-col md:flex-row gap-10 w-full max-w-6xl">
            
            {/*Event Info */}
            <div className="md:w-2/3 w-full bg-white p-8 rounded-2xl shadow-sm">
              <h2 className="text-3xl font-semibold mb-3">Cookie O’Clock</h2>
  
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="bg-teal-100 text-teal-700 px-4 py-1 rounded-full font-medium text-sm">
                  Vegan
                </span>
                <span className="bg-teal-100 text-teal-700 px-4 py-1 rounded-full font-medium text-sm">
                  Allergy Friendly
                </span>
              </div>
              <p className="text-gray-700 mb-8 leading-relaxed">
                Enjoy freshly baked cookies and help us reduce food waste! Bring your friends and enjoy
                leftover snacks from BU Spark! events. Cookies will be available on a first-come,
                first-serve basis, so make sure to reserve early!
              </p>
              <div className="space-y-3 mb-8 text-gray-600 text-sm">
                <p><span className="text-lg"></span> <strong>Location:</strong> BU Spark! — 665 Commonwealth Ave, Floor 2</p>
                <p><span className="text-lg"></span> <strong>Time:</strong> Friday, Nov 3, 3:00 PM – 5:00 PM</p>
                <p><span className="text-lg"></span> <strong>Hosted by:</strong> BU Spark! Sustainability Team</p>
              </div>
  
              <div className="w-full bg-gray-200 h-64 flex items-center justify-center text-gray-600 rounded-lg border border-gray-300">
                Map or Event Image Here
              </div>
            </div>
  
            {/*Reservation Form */}
            <div className="md:w-1/3 w-full">
              <div className="bg-teal-600 text-white p-8 rounded-2xl shadow-md h-full flex flex-col justify-center">
                <h3 className="text-xl font-semibold mb-6 text-center">Reserve Food</h3>
                <form className="flex flex-col gap-4">
                  <div>
                    <label className="block text-sm mb-1">Full Name</label>
                    <input
                      type="text"
                      placeholder="Enter your name"
                      className="p-2 w-full rounded-md text-black focus:outline-none focus:ring-2 focus:ring-teal-300"
                    />
                  </div>
  
                  <div>
                    <label className="block text-sm mb-1">BU Email</label>
                    <input
                      type="email"
                      placeholder="yourname@bu.edu"
                      className="p-2 w-full rounded-md text-black focus:outline-none focus:ring-2 focus:ring-teal-300"
                    />
                  </div>
  
                  <div>
                    <label className="block text-sm mb-1">Select food</label>
                    <select
                      className="p-2 w-full rounded-md text-black focus:outline-none focus:ring-2 focus:ring-teal-300"
                    >
                      <option>Cookies</option>
                      <option>Fruit</option>
                      <option>Pastries</option>
                    </select>
                  </div>
  
                  <div>
                    <label className="block text-sm mb-1">Enter quantity</label>
                    <input
                      type="number"
                      min="1"
                      placeholder="e.g. 2"
                      className="p-2 w-full rounded-md text-black focus:outline-none focus:ring-2 focus:ring-teal-300"
                    />
                  </div>
  
                  <button
                    type="submit"
                    className="bg-white text-teal-700 font-semibold py-2 rounded-md hover:bg-gray-100 mt-4 transition-colors duration-200"
                  >
                    Reserve
                  </button>
                </form>
              </div>
            </div>
          </div>
        </main>
  
        {/* Footer */}
        <footer className="bg-black text-white text-center text-sm py-6 px-4 mt-12">
          <p>Boston University Center of Computing & Data Sciences: Duan Family Spark! Initiative</p>
          <p>665 Commonwealth Ave., Boston, MA 02215 | Floor 2, Spark! Space</p>
          <p>buspark@bu.edu</p>
        </footer>
      </div>
    );
  }
  