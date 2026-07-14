import Link from "next/link";
import { RiRadioButtonFill } from "react-icons/ri";

export default function VoggelPage() {
  return (
    <div className="min-h-screen bg-bg">
      {/* Main Container */}
      <main className="pt-20">
        
        {/* Banner with auto-playing video */}
        <div className="w-full h-[45vh] relative border-b-4 border-black overflow-hidden bg-black">
          <div className="absolute inset-0 bg-black/40 z-10" />
          <video 
            className="w-full h-full object-cover z-0" 
            loop 
            autoPlay 
            muted 
            playsInline 
            src="/assets/projects/voggel.mp4" 
            style={{ ["viewTransitionName" as any]: "project-media-voggel" }}
          />
          
          {/* Brutalist Title Badge overlay */}
          <div className="absolute bottom-8 left-6 md:left-12 border-[4px] border-black bg-duck-green text-strong p-6 shadow-brutal max-w-lg z-20 hover:scale-[1.01] transition-transform">
            <h1 className="font-display font-black text-3xl md:text-5xl uppercase text-black leading-none mb-2">
              Voggel
            </h1>
            <span className="font-display font-bold text-xs md:text-sm uppercase tracking-widest text-white bg-black border-2 border-black px-2 py-0.5 shadow-[2px_2px_0px_#000]">
              Publisher: Soedesco / Engine: Unity3D
            </span>
          </div>
        </div>

        {/* Details Grid */}
        <div className="max-w-[1240px] mx-auto p-6 md:p-12 grid md:grid-cols-5 gap-8">
          
          {/* Main Info */}
          <div className="md:col-span-3 flex flex-col justify-between border-[3px] border-black bg-white p-6 md:p-8 shadow-brutal">
            <div>
              <div className="inline-block border-2 border-black bg-duck-yellow text-black font-display font-black text-xs uppercase px-2.5 py-1 rounded-full shadow-[2px_2px_0px_#000] w-max mb-4">
                Indie Local Multiplayer
              </div>
              <h2 className="font-display font-black text-3xl text-strong mb-6 leading-none">
                Overview & RockitBit
              </h2>
              <p className="font-medium text-gray-700 leading-relaxed text-base sm:text-lg mb-6">
                I worked on Voggel together with four fellow university students under our own indie company named **RockitBit**. In Voggel, the core gameplay loop revolves around stealing flocks of birds from your friends to weaken them and send them flying out of the arena—much like Super Smash Bros.
              </p>
              <p className="font-medium text-gray-700 leading-relaxed text-base sm:text-lg">
                While we decided not to continue full production as everyone wanted to pursue separate career paths after graduation, we successfully showcased Voggel at multiple games conferences and navigated the entire process of negotiating and signing a contract with publisher Soedesco.
              </p>
            </div>
            
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link 
                href="/#projects" 
                className="btn-brutal-secondary text-sm py-3 px-6 text-center"
              >
                Back to Projects
              </Link>
            </div>
          </div>

          {/* Contributions Card */}
          <div className="md:col-span-1 border-[3px] border-black bg-duck-blue/15 p-6 shadow-brutal">
            <h3 className="font-display font-black text-lg uppercase tracking-wider text-strong border-b-2 border-black pb-2 mb-4">
              Contributions
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-2 text-sm font-bold text-gray-800">
                <RiRadioButtonFill className="text-duck-beak shrink-0 mt-1" />
                <span>Core gameplay mechanics & combat feel design</span>
              </li>
              <li className="flex items-start gap-2 text-sm font-bold text-gray-800">
                <RiRadioButtonFill className="text-duck-beak shrink-0 mt-1" />
                <span>Custom rendering & stylized game shaders</span>
              </li>
              <li className="flex items-start gap-2 text-sm font-bold text-gray-800">
                <RiRadioButtonFill className="text-duck-beak shrink-0 mt-1" />
                <span>3D assets and polished UI animations</span>
              </li>
            </ul>
          </div>

          {/* Achievements Card */}
          <div className="md:col-span-1 border-[3px] border-black bg-duck-green/15 p-6 shadow-brutal">
            <h3 className="font-display font-black text-lg uppercase tracking-wider text-strong border-b-2 border-black pb-2 mb-4">
              Achievements
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-2 text-sm font-bold text-gray-800">
                <RiRadioButtonFill className="text-duck-beak shrink-0 mt-1" />
                <span>Showcased prototype at multiple industry expos</span>
              </li>
              <li className="flex items-start gap-2 text-sm font-bold text-gray-800">
                <RiRadioButtonFill className="text-duck-beak shrink-0 mt-1" />
                <span>Pitched and signed publishing contract with Soedesco</span>
              </li>
            </ul>
          </div>

        </div>
      </main>
    </div>
  );
}
