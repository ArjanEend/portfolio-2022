import Link from "next/link";
import { RiRadioButtonFill } from "react-icons/ri";

export default function StormboundPage() {
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
            src="/assets/projects/stormbound.mp4" 
            style={{ ["viewTransitionName" as any]: "project-media-stormbound" }}
          />
          
          {/* Brutalist Title Badge overlay */}
          <div className="absolute bottom-8 left-6 md:left-12 border-[4px] border-black bg-duck-purple text-white p-6 shadow-brutal max-w-lg z-20 hover:scale-[1.01] transition-transform">
            <h1 className="font-display font-black text-3xl md:text-5xl uppercase text-white leading-none mb-2">
              Stormbound
            </h1>
            <span className="font-display font-bold text-xs md:text-sm uppercase tracking-widest text-duck-yellow bg-black border-2 border-duck-yellow px-2 py-0.5 shadow-[2px_2px_0px_rgba(0,0,0,1)]">
              Unity3D / Mobile / NodeJS / Steam
            </span>
          </div>
        </div>

        {/* Details Grid */}
        <div className="max-w-[1240px] mx-auto p-6 md:p-12 grid md:grid-cols-5 gap-8">
          
          {/* Main Info */}
          <div className="md:col-span-3 flex flex-col justify-between border-[3px] border-black bg-white p-6 md:p-8 shadow-brutal">
            <div>
              <div className="inline-block border-2 border-black bg-duck-blue text-black font-display font-black text-xs uppercase px-2.5 py-1 rounded-full shadow-[2px_2px_0px_#000] w-max mb-4">
                CCG Card Battler
              </div>
              <h2 className="font-display font-black text-3xl text-strong mb-6 leading-none">
                Overview & Live Ops
              </h2>
              <p className="font-medium text-gray-700 leading-relaxed text-base sm:text-lg mb-6">
                Stormbound was my first experience working on a successful, globally launched live game. I joined the project right before the soft launch phase. Initially, my primary focus was building and optimizing the game's UI in Unity3D.
              </p>
              <p className="font-medium text-gray-700 leading-relaxed text-base sm:text-lg">
                Later during live operations, I stepped into a broader role, taking responsibility for building frontend features, mentoring interns, and writing core server-side gameplay code in Node.js to support card mechanics and backend balance changes.
              </p>
            </div>
            
            <div className="mt-8 flex flex-wrap gap-4">
              <a 
                href="https://play.google.com/store/apps/details?id=com.kongregate.mobile.stormbound.google" 
                target="_blank" 
                rel="noreferrer" 
                className="btn-brutal text-sm py-3 px-6 text-center"
              >
                Google Play ➜
              </a>
              <a 
                href="https://store.steampowered.com/app/790600/Stormbound/" 
                target="_blank" 
                rel="noreferrer" 
                className="btn-brutal-accent text-sm py-3 px-6 text-center text-black"
              >
                Steam Store ➜
              </a>
              <Link 
                href="/#projects" 
                className="btn-brutal-secondary text-sm py-3 px-6 text-center"
              >
                Back
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
                <span>UI implementation & animations in Unity3D</span>
              </li>
              <li className="flex items-start gap-2 text-sm font-bold text-gray-800">
                <RiRadioButtonFill className="text-duck-beak shrink-0 mt-1" />
                <span>NodeJS backend gameplay implementation</span>
              </li>
              <li className="flex items-start gap-2 text-sm font-bold text-gray-800">
                <RiRadioButtonFill className="text-duck-beak shrink-0 mt-1" />
                <span>Guided and mentored engineering interns</span>
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
                <span>Successful worldwide launch on App Store & Google Play</span>
              </li>
              <li className="flex items-start gap-2 text-sm font-bold text-gray-800">
                <RiRadioButtonFill className="text-duck-beak shrink-0 mt-1" />
                <span>Seamless server-client card sync architecture</span>
              </li>
              <li className="flex items-start gap-2 text-sm font-bold text-gray-800">
                <RiRadioButtonFill className="text-duck-beak shrink-0 mt-1" />
                <span>Stabilized Live Ops features for millions of players</span>
              </li>
            </ul>
          </div>

        </div>
      </main>
    </div>
  );
}
