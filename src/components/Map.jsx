import { Github, Twitter, MapPin, School, Coffee, Users } from "lucide-react"

export default function UniversityMapShowcase() {
  return (
    <div className="min-h-screen flex flex-col bg-zinc-900/30 text-white">
      
      <main className="flex-grow container mx-auto px-4 md:px-8 py-6 md:py-12">
        {/* Map Title Section */}
        <div className="text-center mb-6 md:mb-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-2 md:mb-4">
            <span className="text-red-600">EXPLORE</span> FAST NUCES
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-sm md:text-base">
            Navigate FAST NUCES Karachi Main Campus like never before with this interactive map.
          </p>
        </div>

        <div className="relative w-full max-w-5xl mx-auto rounded-lg overflow-hidden border-2 border-red-700 shadow-[0_0_15px_rgba(220,38,38,0.5)]">
          {/* Game embed from itch.io */}
          <div className="w-full h-full flex justify-center items-center">
            <iframe
              width="100%"
              height="600"
              style={{ maxHeight: "80vh" }}
              frameBorder="0"
              src="https://itch.io/embed/3301578"
              title="Raasta_nuces by crazygger"
              className="aspect-video"
            >
              <a href="https://crazygger.itch.io/raasta-nuces">Raasta_nuces by crazygger</a>
            </iframe>
          </div>
        </div>

        {/* Map Features */}
        {/* <div className="mt-8 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          <div className="bg-zinc-900 p-4 md:p-6 rounded-lg border-l-4 border-red-600 hover:transform hover:scale-105 transition-transform">
            <div className="flex items-center mb-3">
              <MapPin className="w-5 h-5 md:w-6 md:h-6 text-red-500 mr-2" />
              <h3 className="text-lg md:text-xl font-bold text-red-500">Interactive Navigation</h3>
            </div>
            <p className="text-zinc-400 text-sm md:text-base">
              Find the fastest routes between buildings and discover shortcuts across campus.
            </p>
          </div>
          <div className="bg-zinc-900 p-4 md:p-6 rounded-lg border-l-4 border-red-600 hover:transform hover:scale-105 transition-transform">
            <div className="flex items-center mb-3">
              <School className="w-5 h-5 md:w-6 md:h-6 text-red-500 mr-2" />
              <h3 className="text-lg md:text-xl font-bold text-red-500">Building Info</h3>
            </div>
            <p className="text-zinc-400 text-sm md:text-base">
              Access details about classrooms, offices, and facilities in each university building.
            </p>
          </div>
          <div className="bg-zinc-900 p-4 md:p-6 rounded-lg border-l-4 border-red-600 hover:transform hover:scale-105 transition-transform">
            <div className="flex items-center mb-3">
              <Coffee className="w-5 h-5 md:w-6 md:h-6 text-red-500 mr-2" />
              <h3 className="text-lg md:text-xl font-bold text-red-500">Points of Interest</h3>
            </div>
            <p className="text-zinc-400 text-sm md:text-base">
              Locate cafeterias, study spots, and recreational areas throughout the campus.
            </p>
          </div>
          <div className="bg-zinc-900 p-4 md:p-6 rounded-lg border-l-4 border-red-600 hover:transform hover:scale-105 transition-transform">
            <div className="flex items-center mb-3">
              <Users className="w-5 h-5 md:w-6 md:h-6 text-red-500 mr-2" />
              <h3 className="text-lg md:text-xl font-bold text-red-500">Events & Activities</h3>
            </div>
            <p className="text-zinc-400 text-sm md:text-base">
              Discover ongoing and upcoming events happening around your university.
            </p>
          </div>
        </div> */}

        {/* How to Use Section */}
        {/* <div className="mt-8 md:mt-16 bg-zinc-900 rounded-lg p-4 md:p-8">
          <h3 className="text-xl md:text-2xl font-bold mb-4 text-center text-red-500">HOW TO USE THE MAP</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
            <div className="text-center p-4">
              <div className="w-12 h-12 rounded-full bg-red-900 flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h4 className="font-bold mb-2">Navigate</h4>
              <p className="text-sm text-zinc-400">Use WASD keys or arrow keys to move around the campus map</p>
            </div>
            <div className="text-center p-4">
              <div className="w-12 h-12 rounded-full bg-red-900 flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h4 className="font-bold mb-2">Interact</h4>
              <p className="text-sm text-zinc-400">Click on buildings and points of interest to get more information</p>
            </div>
            <div className="text-center p-4">
              <div className="w-12 h-12 rounded-full bg-red-900 flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h4 className="font-bold mb-2">Discover</h4>
              <p className="text-sm text-zinc-400">Complete challenges and unlock achievements as you explore</p>
            </div>
          </div>
        </div> */}

        {/* Call to Action */}
        {/* <div className="mt-8 md:mt-16 text-center">
          <button className="px-6 py-3 bg-red-700 hover:bg-red-800 text-white font-bold rounded-full transition-colors shadow-lg text-sm md:text-base">
            START EXPLORING
          </button>
        </div> */}
      </main>

    </div>
  )
}
