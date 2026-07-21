import Avatar from "../ui/Avatar";
import Badge from "../ui/Badge";
import Heading from "../ui/Heading";

export default function AboutFreelance() {
  return (
    <div id="about" className="w-full py-20 bg-white border-y-4 border-black relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute right-0 top-0 w-32 h-32 bg-duck-yellow/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="portfolio-content max-w-[1240px] mx-auto grid md:grid-cols-3 gap-12 items-center">
        {/* Profile Card / Badge */}
        <div className="md:col-span-1 flex justify-center">
          <Avatar 
            src="/assets/profile.jpg" 
            alt="Arjan Cordia Profile" 
            variant="about" 
            badgeText="🏛️ UWV Design System Eng." 
          />
        </div>

        {/* Story Text */}
        <div className="md:col-span-2 flex flex-col justify-center">
          <Badge color="purple" className="mb-4">
            About Me & Craft
          </Badge>
          
          <Heading level={2} variant="section" className="mb-6">
            Developer by Craft, Engineer by Mindset
          </Heading>

          <Heading level={3} className="text-duck-beak mb-4 uppercase tracking-wider text-base sm:text-lg">
            Frontend Architecture • Enterprise Design Systems • Full-Stack Engineering
          </Heading>

          <div className="text-gray-700 font-medium text-base sm:text-lg space-y-4 leading-relaxed">
            <p>
              Hi! I'm Arjan. For over a decade, I've been architecting software, web applications, and interactive systems. My passion lies in taking complex, messy problems and turning them into clean, scalable systems.
            </p>
            <p>
              Currently, I work as a **Design System Engineer at UWV (Dutch Government)**, crafting framework-agnostic component libraries using **StencilJS**, **Web Components**, and **React**. I specialize in creating accessible, enterprise-grade design systems and frontend platforms that empower multi-disciplinary engineering teams to ship faster with confidence. (Explore the interactive <a href="/storybook/index.html" target="_blank" className="underline decoration-duck-blue decoration-2 font-bold hover:text-duck-beak transition-colors">Storybook Component Catalog</a> built for this site).
            </p>
            <p>
              Beyond design systems, my background spans **full-stack architecture (.NET, C#, Azure, Node.js)** and **commercial game development** (including Nintendo Switch releases). My game dev background gives me a distinct edge: I treat UI performance, state synchronization, and component lifecycles with the rigor of real-time game engines.
            </p>
            <p>
              When I'm not building systems or writing code, you'll find me on a skateboard. It's a true test of persistence—learning how to solve hard problems through endless iteration, trial, and error.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
