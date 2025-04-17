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
          <iframe frameborder="0" src="https://itch.io/embed-upload/13402399?color=641919" allowfullscreen="" width="640" height="380"><a href="https://crazygger.itch.io/raasta-nuces">Play Raasta_nuces on itch.io</a></iframe>
          </div>
        </div>

      </main>

    </div>
  )
}
