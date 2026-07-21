import ProjectItem from "../ProjectItem";
import Badge from "../ui/Badge";
import Heading from "../ui/Heading";

export default function ProjectsFreelance() {
  return (
    <div id="projects" className="w-full py-20 bg-white border-y-4 border-black">
      <div className="portfolio-content max-w-[1240px] mx-auto">

        {/* Header */}
        <div className="mb-12">
          <Badge color="purple" className="mb-4">
            Engineering Portfolio
          </Badge>
          <Heading level={2} variant="section" className="mb-4">
            Systems & Applications Built
          </Heading>
          <p className="font-medium text-gray-600 max-w-[600px]">
            A showcase of enterprise-scale design systems, React architectures, and high-performance real-time interactive game platforms.
          </p>
        </div>

        {/* Section 1: Enterprise Engineering & Systems Architecture */}
        <div className="mb-16">
          <Heading level={3} variant="sub-border">
            🏗️ Enterprise Engineering & Systems Architecture
          </Heading>
          <div className="grid md:grid-cols-2 gap-8">
            <ProjectItem
              title="UWV Design System"
              info="StencilJS / Web Components / Accessibility"
              backgroundImg="/assets/projects/uwv-design-system.png"
              url="/projects/uwv-design-system"
              badge="🏛️ Dutch Government (UWV)"
              badgeColor="bg-duck-yellow"
            />
            <ProjectItem
              title="React Architecture"
              info="Next.js / Monorepos / DX Platform"
              backgroundImg="/assets/projects/react-architecture.png"
              url="/projects/react-architecture"
              badge="⚡ Architecture"
              badgeColor="bg-duck-blue"
            />
          </div>
        </div>

        {/* Section 2: Interactive Systems & Game Development (Wow-Factor) */}
        <div>
          <Heading level={3} variant="sub-border">
            🎮 Interactive Systems & Game Development (Wow-Factor)
          </Heading>
          <div className="grid md:grid-cols-2 gap-8">
            <ProjectItem
              title="Panzerdogs"
              info="Web3 / Rust / TypeScript / Solana"
              backgroundImg="/assets/projects/panzerdogs.mp4"
              url="/projects/panzerdogs"
              badge="🔥 Web3 Multiplayer"
              badgeColor="bg-duck-yellow"
            />
            <ProjectItem
              title="Good Job!"
              info="Unity3D / C# / Nintendo Switch"
              backgroundImg="/assets/projects/goodjob.mp4"
              url="/projects/goodjob"
              badge="🎮 Nintendo Switch"
              badgeColor="bg-duck-blue"
            />
            <ProjectItem
              title="Stormbound"
              info="Unity3D / Mobile / NodeJS"
              backgroundImg="/assets/projects/stormbound.mp4"
              url="/projects/stormbound"
              badge="🃏 Mobile / Steam"
              badgeColor="bg-duck-purple"
            />
            <ProjectItem
              title="Voggel"
              info="Unity3D / C# / Local Multiplayer"
              backgroundImg="/assets/projects/voggel.mp4"
              url="/projects/voggel"
              badge="🐣 Local Multiplayer"
              badgeColor="bg-duck-green"
            />
          </div>
        </div>

      </div>
    </div>
  );
}
