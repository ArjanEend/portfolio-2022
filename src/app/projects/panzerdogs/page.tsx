import Link from "next/link";
import { RiRadioButtonFill } from "react-icons/ri";

export default function PanzerdogsPage() {
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
            src="/assets/projects/panzerdogs.mp4" 
            style={{ ["viewTransitionName" as any]: "project-media-panzerdogs" }}
          />
          
          {/* Brutalist Title Badge overlay */}
          <div className="absolute bottom-8 left-6 md:left-12 border-[4px] border-black bg-duck-yellow p-6 shadow-brutal max-w-lg z-20 hover:scale-[1.01] transition-transform">
            <h1 className="font-display font-black text-3xl md:text-5xl uppercase text-black leading-none mb-2">
              Panzerdogs
            </h1>
            <span className="font-display font-bold text-xs md:text-sm uppercase tracking-widest text-duck-beak bg-white border-2 border-black px-2 py-0.5 shadow-[2px_2px_0px_#000]">
              Web3 / Rust / TypeScript / Solana
            </span>
          </div>
        </div>

        {/* Details Grid */}
        <div className="max-w-[1240px] mx-auto p-6 md:p-12 grid md:grid-cols-5 gap-8">
          
          {/* Main Info */}
          <div className="md:col-span-3 flex flex-col justify-between border-[3px] border-black bg-white p-6 md:p-8 shadow-brutal">
            <div>
              <div className="inline-block border-2 border-black bg-duck-purple text-strong font-display font-black text-xs uppercase px-2.5 py-1 rounded-full shadow-[2px_2px_0px_#000] w-max mb-4">
                Project Overview
              </div>
              <h2 className="font-display font-black text-3xl text-strong mb-6 leading-none">
                Overview & Mechanics
              </h2>
              <p className="font-medium text-gray-700 leading-relaxed text-base sm:text-lg mb-6">
                Panzerdogs is a self-published Web3 NFT project and game delivering an action-packed multiplayer experience to players. During this project, I took ownership of writing the smart contracts on Solana and implementing blockchain-backed logic in the game client, back-end servers, and auxiliary applications.
              </p>
              <p className="font-medium text-gray-700 leading-relaxed text-base sm:text-lg">
                I worked with a wide range of technologies, developing complex server-side systems with Node.js and Rust, and front-end dApps using TypeScript and React.
              </p>
            </div>
            
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a 
                href="https://www.panzerdogs.io/" 
                target="_blank" 
                rel="noreferrer" 
                className="btn-brutal text-sm py-3 px-6 text-center"
              >
                Visit Panzerdogs Website ➜
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
                <span>Responsible for all Web3 integrations</span>
              </li>
              <li className="flex items-start gap-2 text-sm font-bold text-gray-800">
                <RiRadioButtonFill className="text-duck-beak shrink-0 mt-1" />
                <span>Built custom Solana in-house toolsuite</span>
              </li>
              <li className="flex items-start gap-2 text-sm font-bold text-gray-800">
                <RiRadioButtonFill className="text-duck-beak shrink-0 mt-1" />
                <span>Designed & built responsive dApps</span>
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
                <span>Dynamic NFT rendering from Node.js servers</span>
              </li>
              <li className="flex items-start gap-2 text-sm font-bold text-gray-800">
                <RiRadioButtonFill className="text-duck-beak shrink-0 mt-1" />
                <span>Platform for user-generated NFTs</span>
              </li>
              <li className="flex items-start gap-2 text-sm font-bold text-gray-800">
                <RiRadioButtonFill className="text-duck-beak shrink-0 mt-1" />
                <span>Sold out 5,555 NFTs in 15 minutes</span>
              </li>
            </ul>
          </div>

        </div>
      </main>
    </div>
  );
}
