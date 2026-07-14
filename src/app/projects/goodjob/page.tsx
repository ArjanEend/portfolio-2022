import Link from "next/link";
import { RiRadioButtonFill } from "react-icons/ri";

export default function GoodJobPage() {
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
            src="/assets/projects/goodjob.mp4" 
            style={{ ["viewTransitionName" as any]: "project-media-goodjob" }}
          />
          
          {/* Brutalist Title Badge overlay */}
          <div className="absolute bottom-8 left-6 md:left-12 border-[4px] border-black bg-duck-blue p-6 shadow-brutal max-w-lg z-20 hover:scale-[1.01] transition-transform">
            <h1 className="font-display font-black text-3xl md:text-5xl uppercase text-black leading-none mb-2">
              Good Job!
            </h1>
            <span className="font-display font-bold text-xs md:text-sm uppercase tracking-widest text-white bg-black border-2 border-white px-2 py-0.5 shadow-[2px_2px_0px_rgba(255,255,255,0.2)]">
              Publisher: Nintendo / Engine: Unity3D
            </span>
          </div>
        </div>

        {/* Details Grid */}
        <div className="max-w-[1240px] mx-auto p-6 md:p-12 grid md:grid-cols-5 gap-8">
          
          {/* Main Info */}
          <div className="md:col-span-3 flex flex-col justify-between border-[3px] border-black bg-white p-6 md:p-8 shadow-brutal">
            <div>
              <div className="inline-block border-2 border-black bg-duck-purple text-strong font-display font-black text-xs uppercase px-2.5 py-1 rounded-full shadow-[2px_2px_0px_#000] w-max mb-4">
                Nintendo Switch Title
              </div>
              <h2 className="font-display font-black text-3xl text-strong mb-6 leading-none">
                Overview & Production
              </h2>
              <p className="font-medium text-gray-700 leading-relaxed text-base sm:text-lg mb-6">
                Good Job! is published by Nintendo. During the project, they helped guide Paladin Studios to realize this physics-based workplace puzzle game. My role during production varied extensively as I worked on multiple core components of the game.
              </p>
              <p className="font-medium text-gray-700 leading-relaxed text-base sm:text-lg mb-6">
                My first contribution started during the earliest prototype phases where I implemented physics interactions like sitting in chairs and pushing objects. Later, I joined the production team working closely with level designers to ideate and implement level-specific gameplay mechanisms.
              </p>
              <p className="font-medium text-gray-700 leading-relaxed text-base sm:text-lg">
                During the final production phase, I took full responsibility for the UI implementation, delivering the interface visually and technically based on initial mockups and preview videos.
              </p>
            </div>
            
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a 
                href="https://www.nintendo.com/store/products/good-job-switch/" 
                target="_blank" 
                rel="noreferrer" 
                className="btn-brutal text-sm py-3 px-6 text-center"
              >
                Nintendo E-Shop ➜
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
          <div className="md:col-span-1 border-[3px] border-black bg-duck-yellow/15 p-6 shadow-brutal">
            <h3 className="font-display font-black text-lg uppercase tracking-wider text-strong border-b-2 border-black pb-2 mb-4">
              Contributions
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-2 text-sm font-bold text-gray-800">
                <RiRadioButtonFill className="text-duck-beak shrink-0 mt-1" />
                <span>Main developer responsible for game UI</span>
              </li>
              <li className="flex items-start gap-2 text-sm font-bold text-gray-800">
                <RiRadioButtonFill className="text-duck-beak shrink-0 mt-1" />
                <span>Built custom tools for level designers</span>
              </li>
              <li className="flex items-start gap-2 text-sm font-bold text-gray-800">
                <RiRadioButtonFill className="text-duck-beak shrink-0 mt-1" />
                <span>Gameplay mechanics & procedural physics</span>
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
                <span>Successful console launch alongside Nintendo</span>
              </li>
              <li className="flex items-start gap-2 text-sm font-bold text-gray-800">
                <RiRadioButtonFill className="text-duck-beak shrink-0 mt-1" />
                <span>Resolved core physics stability issues</span>
              </li>
              <li className="flex items-start gap-2 text-sm font-bold text-gray-800">
                <RiRadioButtonFill className="text-duck-beak shrink-0 mt-1" />
                <span>Delivered UI fully bug-free for launch</span>
              </li>
            </ul>
          </div>

        </div>
      </main>
    </div>
  );
}
