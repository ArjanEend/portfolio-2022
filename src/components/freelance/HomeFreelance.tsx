import { SocialButtons } from "../SocialButtons";
import Button from "../ui/Button";
import Badge from "../ui/Badge";
import Heading from "../ui/Heading";
import Avatar from "../ui/Avatar";

export default function HomeFreelance() {
  return (
    <div id="home" className="w-full min-h-screen pt-28 pb-16 flex items-center justify-center relative overflow-hidden bg-bg">
      {/* Decorative Neo-brutalist Stickers */}
      <Badge isSticker color="yellow" className="hidden lg:block absolute top-32 left-10 rotate-[-6deg]">
        🏛️ Design Systems Specialist
      </Badge>
      <Badge isSticker color="green" className="hidden lg:block absolute bottom-24 left-16 rotate-[8deg]">
        ⚡ StencilJS & Web Components
      </Badge>
      <Badge isSticker color="purple" className="hidden lg:block absolute top-36 right-12 rotate-[12deg]">
        🏗️ React & .NET Architecture
      </Badge>
      <Badge isSticker color="blue" className="hidden lg:block absolute bottom-32 right-16 rotate-[-4deg]">
        🕹️ Game Creator By Night
      </Badge>

      <div className="portfolio-content flex flex-col justify-center items-center text-center">
        {/* Profile Avatar Frame */}
        <Avatar src="/assets/profile.jpg" alt="Arjan Cordia" variant="default" />

        <div className="max-w-[850px] px-4">
          <p className="font-display font-bold uppercase tracking-widest text-duck-beak text-sm sm:text-base mb-3">
            Developer by craft • Engineer by mindset
          </p>

          <Heading level={1} className="mb-6">
            Hi, I'm <span className="underline decoration-duck-blue decoration-wavy decoration-3 underline-offset-8">Arjan Cordia</span>
          </Heading>

          <Heading level={2} className="mb-6">
            Senior Software Engineer & <br />
            <span className="bg-duck-yellow border-2 border-black px-3 py-1.5 leading-loose shadow-[3px_3px_0_#000]">
              Frontend Platform Specialist
            </span>
          </Heading>

          <p className="font-medium text-gray-700 text-base sm:text-lg max-w-[700px] mx-auto mb-8 leading-relaxed">
            I help teams build scalable web applications, enterprise design systems, and robust component platforms. Currently engineering design systems at <strong className="font-black text-strong">UWV (Dutch Government)</strong> with <strong className="font-black text-strong">StencilJS</strong>, <strong className="font-black text-strong">React</strong>, and <strong className="font-black text-strong">.NET</strong>.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
            <Button href="#projects" className="w-full sm:w-auto">
              View Architecture & Work
            </Button>
            <Button variant="secondary" href="#contact" className="w-full sm:w-auto">
              Hire Me / Get In Touch
            </Button>
            <Button variant="accent" href="/storybook/index.html" target="_blank" className="w-full sm:w-auto">
              🎨 Explore Storybook Catalog
            </Button>
          </div>

          {/* Cross Link Badge */}
          <div className="mb-6">
            <Button
              variant="unstyled"
              href="/"
              className="inline-flex items-center gap-2 border-[3px] border-black bg-duck-purple text-strong font-display font-black text-xs sm:text-sm uppercase px-4 py-2 rounded-xl shadow-brutal hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-brutal-lg transition-all"
            >
              <span>🦆 Also Founder of EEND Games (Indie Studio)</span>
              <span className="text-base">→</span>
            </Button>
          </div>

          <div className="border-t-2 border-dashed border-black/30 pt-4">
            <SocialButtons />
          </div>
        </div>
      </div>
    </div>
  );
}
