import HomeFreelance from "@/components/freelance/HomeFreelance";
import AboutFreelance from "@/components/freelance/AboutFreelance";
import SkillsFreelance from "@/components/freelance/SkillsFreelance";
import ProjectsFreelance from "@/components/freelance/ProjectsFreelance";
import ContactFreelance from "@/components/freelance/ContactFreelance";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Arjan Cordia | Senior Software Engineer & Frontend Platform Specialist",
  description: "Freelance portfolio of Arjan Cordia. Specializing in enterprise design systems, React, StencilJS, Web Components, and .NET.",
};

export default function FreelancePage() {
  return (
    <div id="top" className="min-h-screen flex flex-col justify-between overflow-x-hidden">
      {/* Main Content Sections */}
      <main className="flex-grow">
        <HomeFreelance />
        <AboutFreelance />
        <SkillsFreelance />
        <ProjectsFreelance />
        <ContactFreelance />
      </main>

      {/* Footer */}
      <footer className="w-full bg-black py-8 border-t-4 border-black text-center">
        <p className="font-display font-bold text-xs uppercase tracking-widest text-duck-yellow">
          © {new Date().getFullYear()} Arjan Cordia. All Rights Reserved. Built with Neo-Brutalist Pride.
        </p>
      </footer>
    </div>
  );
}
