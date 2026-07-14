import Link from "next/link";
import { RiRadioButtonFill } from "react-icons/ri";

export default function TowerOfPowerPage() {
  return (
    <div className="min-h-screen bg-bg">
      {/* Main Container */}
      <main className="pt-20">
        
        {/* Banner with game screenshot */}
        <div className="w-full h-[45vh] relative border-b-4 border-black overflow-hidden bg-black">
          <div className="absolute inset-0 bg-black/30 z-10" />
          <img 
            className="w-full h-full object-cover z-0 filter contrast-[1.05] brightness-[0.95]" 
            src="/assets/projects/towerofpower.png" 
            alt="Tower of Power Banner"
            style={{ ["viewTransitionName" as any]: "project-media-tower-of-power" }}
          />
          
          {/* Brutalist Title Badge overlay */}
          <div className="absolute bottom-8 left-6 md:left-12 border-[4px] border-black bg-duck-yellow p-6 shadow-brutal max-w-lg z-20 hover:scale-[1.01] transition-transform">
            <h1 className="font-display font-black text-3xl md:text-5xl uppercase text-black leading-none mb-2">
              Tower of Power
            </h1>
            <span className="font-display font-bold text-xs md:text-sm uppercase tracking-widest text-duck-beak bg-white border-2 border-black px-2 py-0.5 shadow-[2px_2px_0px_#000]">
              Active Development / TypeScript / Strategy
            </span>
          </div>
        </div>

        {/* Details Grid */}
        <div className="max-w-[1240px] mx-auto p-6 md:p-12 grid md:grid-cols-5 gap-8">
          
          {/* Main Info */}
          <div className="md:col-span-3 flex flex-col justify-between border-[3px] border-black bg-white p-6 md:p-8 shadow-brutal">
            <div>
              <div className="inline-block border-2 border-black bg-duck-purple text-strong font-display font-black text-xs uppercase px-2.5 py-1 rounded-full shadow-[2px_2px_0px_#000] w-max mb-4">
                Latest Project
              </div>
              <h2 className="font-display font-black text-3xl text-strong mb-6 leading-none">
                Overview & Architecture
              </h2>
              <p className="font-medium text-gray-700 leading-relaxed text-base sm:text-lg mb-6">
                Tower of Power is my latest game project, currently in active prototype development. It is an incremental strategy game that blends classic tower defense positioning with incremental math progression loops.
              </p>
              <p className="font-medium text-gray-700 leading-relaxed text-base sm:text-lg">
                The game is written natively in HTML5 and TypeScript, leveraging advanced math formulas for scaling difficulty, upgrading core nodes, and managing waves of incoming enemies. A fully playable demo is available directly in the browser on itch.io.
              </p>
            </div>
            
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a 
                href="https://arjaneend.itch.io/tower-of-power" 
                target="_blank" 
                rel="noreferrer" 
                className="btn-brutal text-sm py-3 px-6 text-center"
              >
                Play on itch.io ➜
              </a>
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
                <span>Solo Game Designer & Systems Programmer</span>
              </li>
              <li className="flex items-start gap-2 text-sm font-bold text-gray-800">
                <RiRadioButtonFill className="text-duck-beak shrink-0 mt-1" />
                <span>Created object pooling for weapon physics & enemy spawners</span>
              </li>
              <li className="flex items-start gap-2 text-sm font-bold text-gray-800">
                <RiRadioButtonFill className="text-duck-beak shrink-0 mt-1" />
                <span>Configured modular incremental game loops</span>
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
                <span>Published fully playable browser demo on itch.io</span>
              </li>
              <li className="flex items-start gap-2 text-sm font-bold text-gray-800">
                <RiRadioButtonFill className="text-duck-beak shrink-0 mt-1" />
                <span>Optimized engine rendering to support 500+ dynamic entities</span>
              </li>
            </ul>
          </div>

        </div>
      </main>
    </div>
  );
}
