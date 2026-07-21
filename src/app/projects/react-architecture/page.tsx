import Link from "next/link";
import { RiRadioButtonFill } from "react-icons/ri";

export default function ReactArchitecturePage() {
  return (
    <div className="min-h-screen bg-bg">
      <main className="pt-20">
        {/* Banner with React architecture graphic */}
        <div className="w-full h-[45vh] relative border-b-4 border-black overflow-hidden bg-black">
          <div className="absolute inset-0 bg-black/30 z-10" />
          <img 
            className="w-full h-full object-cover z-0 filter contrast-[1.05] brightness-[0.95]" 
            src="/assets/projects/react-architecture.png" 
            alt="React Architecture Banner"
            style={{ ["viewTransitionName" as any]: "project-media-react-architecture" }}
          />
          
          {/* Brutalist Title Badge overlay */}
          <div className="absolute bottom-8 left-6 md:left-12 border-[4px] border-black bg-duck-yellow p-6 shadow-brutal max-w-lg z-20 hover:scale-[1.01] transition-transform">
            <h1 className="font-display font-black text-3xl md:text-5xl uppercase text-black leading-none mb-2">
              React Architecture
            </h1>
            <span className="font-display font-bold text-xs md:text-sm uppercase tracking-widest text-duck-beak bg-white border-2 border-black px-2 py-0.5 shadow-[2px_2px_0px_#000]">
              React / Next.js / Micro-frontends / State Management
            </span>
          </div>
        </div>

        {/* Details Grid */}
        <div className="max-w-[1240px] mx-auto p-6 md:p-12 grid md:grid-cols-5 gap-8">
          
          {/* Main Info */}
          <div className="md:col-span-3 flex flex-col justify-between border-[3px] border-black bg-white p-6 md:p-8 shadow-brutal">
            <div>
              <div className="inline-block border-2 border-black bg-duck-purple text-strong font-display font-black text-xs uppercase px-2.5 py-1 rounded-full shadow-[2px_2px_0px_#000] w-max mb-4">
                Frontend Platforms & Architecture
              </div>
              <h2 className="font-display font-black text-3xl text-strong mb-6 leading-none">
                Scalable React Applications
              </h2>
              <p className="font-medium text-gray-700 leading-relaxed text-base sm:text-lg mb-6">
                Over my years as a Senior Software Engineer, I have built multiple high-performance web applications and dashboard platforms using React, Next.js, and TypeScript. I specialize in setting up clean modular architectures, custom hooks, and solid state management patterns.
              </p>
              <p className="font-medium text-gray-700 leading-relaxed text-base sm:text-lg mb-6">
                My architectural focus is on developer experience (DX), build system performance, and maintainability. I have designed custom monorepo layouts for large-scale codebases, integrated Web Components inside React lifecycles, and built real-time synchronizations with WebSockets and Server-Sent Events.
              </p>
              <p className="font-medium text-gray-700 leading-relaxed text-base sm:text-lg">
                Additionally, I bridge the frontend with robust backend architectures (C#, .NET, Azure), ensuring secure authentication flows, performant API routing, and optimized static/dynamic page generation.
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
              Core Stack
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-2 text-sm font-bold text-gray-800">
                <RiRadioButtonFill className="text-duck-beak shrink-0 mt-1" />
                <span>React, Next.js, & React Query</span>
              </li>
              <li className="flex items-start gap-2 text-sm font-bold text-gray-800">
                <RiRadioButtonFill className="text-duck-beak shrink-0 mt-1" />
                <span>TypeScript & TailwindCSS</span>
              </li>
              <li className="flex items-start gap-2 text-sm font-bold text-gray-800">
                <RiRadioButtonFill className="text-duck-beak shrink-0 mt-1" />
                <span>Monorepo Architecture (Turborepo)</span>
              </li>
              <li className="flex items-start gap-2 text-sm font-bold text-gray-800">
                <RiRadioButtonFill className="text-duck-beak shrink-0 mt-1" />
                <span>RESTful APIs & WebSockets</span>
              </li>
            </ul>
          </div>

          {/* Achievements Card */}
          <div className="md:col-span-1 border-[3px] border-black bg-duck-green/15 p-6 shadow-brutal">
            <h3 className="font-display font-black text-lg uppercase tracking-wider text-strong border-b-2 border-black pb-2 mb-4">
              Impact
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-2 text-sm font-bold text-gray-800">
                <RiRadioButtonFill className="text-duck-beak shrink-0 mt-1" />
                <span>Setup maintainable monorepos for distributed teams</span>
              </li>
              <li className="flex items-start gap-2 text-sm font-bold text-gray-800">
                <RiRadioButtonFill className="text-duck-beak shrink-0 mt-1" />
                <span>Drastically improved Lighthouse Core Web Vitals score</span>
              </li>
              <li className="flex items-start gap-2 text-sm font-bold text-gray-800">
                <RiRadioButtonFill className="text-duck-beak shrink-0 mt-1" />
                <span>Built custom components using modern CSS Custom Properties</span>
              </li>
            </ul>
          </div>

        </div>
      </main>
    </div>
  );
}
