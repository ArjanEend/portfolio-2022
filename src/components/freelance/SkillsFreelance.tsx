import React from "react";
import Card from "../ui/Card";
import Badge from "../ui/Badge";
import Heading from "../ui/Heading";

interface SkillItemProps {
  name: string;
  image?: string;
  svgIcon?: React.ReactNode;
  color: string;
}

export default function SkillsFreelance() {
  const frontendSkills: SkillItemProps[] = [
    { 
      name: "Design Systems", 
      svgIcon: (
        <svg viewBox="0 0 24 24" className="w-12 h-12 text-strong" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="7" height="9" />
          <rect x="14" y="3" width="7" height="5" />
          <rect x="14" y="12" width="7" height="9" />
          <rect x="3" y="16" width="7" height="5" />
        </svg>
      ),
      color: "hover:bg-duck-yellow"
    },
    { 
      name: "React & Next.js", 
      image: "/assets/skills/react.svg", 
      color: "hover:bg-duck-blue" 
    },
    { 
      name: "StencilJS", 
      svgIcon: (
        <svg viewBox="0 0 512 512" className="w-12 h-12 text-white" fill="currentColor">
          <circle cx="256" cy="256" r="240" fill="#161618" />
          <path d="M160 160h192v36H160zm0 156h192v36H160zm80-120h32v120h-32z" fill="#E2E8F0" />
        </svg>
      ),
      color: "hover:bg-black hover:text-white"
    },
    { 
      name: "Web Components", 
      svgIcon: (
        <svg viewBox="0 0 24 24" className="w-12 h-12 text-strong" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
          <line x1="12" y1="2" x2="12" y2="22" />
        </svg>
      ),
      color: "hover:bg-duck-green"
    },
    { 
      name: "TypeScript", 
      image: "/assets/skills/typescript.svg", 
      color: "hover:bg-duck-blue" 
    },
  ];

  const backendSkills: SkillItemProps[] = [
    { 
      name: ".NET / C#", 
      image: "/assets/skills/csharp.svg", 
      color: "hover:bg-duck-purple" 
    },
    { 
      name: "NodeJS", 
      image: "/assets/skills/nodejs.png", 
      color: "hover:bg-duck-beak hover:text-white" 
    },
    { 
      name: "Azure Cloud", 
      image: "/assets/skills/azure.png", 
      color: "hover:bg-duck-navy hover:text-white" 
    },
    { 
      name: "Realtime Systems", 
      svgIcon: (
        <svg viewBox="0 0 24 24" className="w-12 h-12 text-strong" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
      ),
      color: "hover:bg-duck-yellow"
    },
  ];

  const interactiveSkills: SkillItemProps[] = [
    { 
      name: "Unity3D", 
      image: "/assets/skills/unity3d.png", 
      color: "hover:bg-duck-yellow" 
    },
    { 
      name: "Solana / Web3", 
      image: "/assets/skills/solana.jpg", 
      color: "hover:bg-black hover:text-white" 
    },
    { 
      name: "Firebase", 
      image: "/assets/skills/firebase.svg", 
      color: "hover:bg-duck-yellow" 
    },
    { 
      name: "Performance Tuning", 
      svgIcon: (
        <svg viewBox="0 0 24 24" className="w-12 h-12 text-strong" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6V12L16 14" />
        </svg>
      ),
      color: "hover:bg-duck-green"
    },
  ];

  const renderSkillCard = (skill: SkillItemProps) => (
    <Card 
      key={skill.name} 
      isInteractive
      className={`p-4 flex flex-col items-center justify-center h-32 cursor-pointer ${skill.color}`}
    >
      <div className="h-12 w-12 flex items-center justify-center mb-3">
        {skill.image ? (
          <img 
            className="max-h-full max-w-full object-contain filter drop-shadow-[1px_1px_0px_rgba(0,0,0,0.1)]" 
            src={skill.image} 
            alt={skill.name} 
          />
        ) : (
          skill.svgIcon
        )}
      </div>
      <h3 className="font-display font-black uppercase tracking-wider text-xs sm:text-sm text-center">
        {skill.name}
      </h3>
    </Card>
  );

  return (
    <div id="skills" className="w-full py-20 bg-bg">
      <div className="portfolio-content max-w-[1240px] mx-auto">
        <Badge color="green" className="mb-4">
          Tech Stack & Expertise
        </Badge>

        <Heading level={2} variant="section" className="mb-4">
          What I Focus On
        </Heading>
        <p className="font-medium text-gray-600 mb-12 max-w-[600px]">
          A combination of high-end enterprise frontend platform engineering, design systems, robust cloud backends, and performance-critical systems.
        </p>

        {/* Section 1: Frontend Platforms */}
        <div className="mb-12">
          <Heading level={3} variant="sub-border">
            🎨 Frontend Platforms & Design Systems
          </Heading>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {frontendSkills.map(renderSkillCard)}
          </div>
        </div>

        {/* Section 2: Full-Stack & Cloud */}
        <div className="mb-12">
          <Heading level={3} variant="sub-border">
            🏗️ Backend & Cloud Infrastructure
          </Heading>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {backendSkills.map(renderSkillCard)}
          </div>
        </div>

        {/* Section 3: Interactive & Game Dev */}
        <div>
          <Heading level={3} variant="sub-border">
            🎮 Experiments & Game Development (Wow-Factor)
          </Heading>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {interactiveSkills.map(renderSkillCard)}
          </div>
        </div>

      </div>
    </div>
  );
}
