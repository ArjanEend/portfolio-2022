import Link from "next/link";
import { RiRadioButtonFill } from "react-icons/ri";

export default function UwvDesignSystemPage() {
  return (
    <div className="min-h-screen bg-bg">
      <main className="pt-20">
        {/* Banner with design system graphic */}
        <div className="w-full h-[45vh] relative border-b-4 border-black overflow-hidden bg-black">
          <div className="absolute inset-0 bg-black/30 z-10" />
          <img 
            className="w-full h-full object-cover z-0 filter contrast-[1.05] brightness-[0.95]" 
            src="/assets/projects/uwv-design-system.png" 
            alt="UWV Design System Banner"
            style={{ ["viewTransitionName" as any]: "project-media-uwv-design-system" }}
          />
          
          {/* Brutalist Title Badge overlay */}
          <div className="absolute bottom-8 left-6 md:left-12 border-[4px] border-black bg-duck-yellow p-6 shadow-brutal max-w-lg z-20 hover:scale-[1.01] transition-transform">
            <h1 className="font-display font-black text-3xl md:text-5xl uppercase text-black leading-none mb-2">
              UWV Design System
            </h1>
            <span className="font-display font-bold text-xs md:text-sm uppercase tracking-widest text-duck-beak bg-white border-2 border-black px-2 py-0.5 shadow-[2px_2px_0px_#000]">
              StencilJS / Web Components / Accessibility / WCAG
            </span>
          </div>
        </div>

        {/* Details Grid */}
        <div className="max-w-[1240px] mx-auto p-6 md:p-12 grid md:grid-cols-5 gap-8">
          
          {/* Main Info */}
          <div className="md:col-span-3 flex flex-col justify-between border-[3px] border-black bg-white p-6 md:p-8 shadow-brutal">
            <div>
              <div className="inline-block border-2 border-black bg-duck-purple text-strong font-display font-black text-xs uppercase px-2.5 py-1 rounded-full shadow-[2px_2px_0px_#000] w-max mb-4">
                Enterprise Design Systems
              </div>
              <h2 className="font-display font-black text-3xl text-strong mb-6 leading-none">
                Enterprise-Grade UI Components
              </h2>
              <p className="font-medium text-gray-700 leading-relaxed text-base sm:text-lg mb-6">
                As a Design System Engineer at UWV (the Employee Insurance Agency of the Dutch Government), I play a key role in building, architecting, and maintaining the central, enterprise-scale design system. The system serves multiple teams, divisions, and applications across the organization.
              </p>
              <p className="font-medium text-gray-700 leading-relaxed text-base sm:text-lg mb-6">
                To guarantee complete framework interoperability, we build the component library using **StencilJS** and native **Web Components**. This allows the design system to be seamlessly integrated into React, Angular, Vue, .NET, or pure HTML pages.
              </p>
              <p className="font-medium text-gray-700 leading-relaxed text-base sm:text-lg">
                A primary focus of my work is ensuring strict compliance with web accessibility standards (WCAG 2.1 AA/AAA), building accessible keyboard navigation, semantic ARIA roles, and high-performance rendering.
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
                <span>StencilJS & TypeScript</span>
              </li>
              <li className="flex items-start gap-2 text-sm font-bold text-gray-800">
                <RiRadioButtonFill className="text-duck-beak shrink-0 mt-1" />
                <span>Web Components (Shadow DOM)</span>
              </li>
              <li className="flex items-start gap-2 text-sm font-bold text-gray-800">
                <RiRadioButtonFill className="text-duck-beak shrink-0 mt-1" />
                <span>React Component Wrappers</span>
              </li>
              <li className="flex items-start gap-2 text-sm font-bold text-gray-800">
                <RiRadioButtonFill className="text-duck-beak shrink-0 mt-1" />
                <span>Sass & CSS Custom Properties</span>
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
                <span>Interoperable components for Dutch Gov applications</span>
              </li>
              <li className="flex items-start gap-2 text-sm font-bold text-gray-800">
                <RiRadioButtonFill className="text-duck-beak shrink-0 mt-1" />
                <span>100% WCAG 2.1 AA Web Accessibility compliant</span>
              </li>
              <li className="flex items-start gap-2 text-sm font-bold text-gray-800">
                <RiRadioButtonFill className="text-duck-beak shrink-0 mt-1" />
                <span>Automated build & distribution pipelines on npm</span>
              </li>
            </ul>
          </div>

        </div>
      </main>
    </div>
  );
}
