import { SocialButtons } from "./SocialButtons";

export default function Home() {
  return (
    <div id="home" className="w-full min-h-screen pt-28 pb-16 flex items-center justify-center relative overflow-hidden bg-bg">
      {/* Decorative Neo-brutalist Stickers */}
      <div className="hidden lg:block absolute top-36 left-12 rotate-[-6deg] border-[3px] border-black bg-duck-yellow text-black font-display font-black text-sm uppercase px-4 py-2 shadow-brutal hover:scale-105 transition-transform">
        👾 Indie Game Studio
      </div>
      <div className="hidden lg:block absolute bottom-24 left-24 rotate-[8deg] border-[3px] border-black bg-duck-green text-strong font-display font-black text-sm uppercase px-4 py-2 shadow-brutal hover:scale-105 transition-transform">
        🦆 Est. 2012
      </div>
      <div className="hidden lg:block absolute top-40 right-16 rotate-[12deg] border-[3px] border-black bg-duck-purple text-strong font-display font-black text-sm uppercase px-4 py-2 shadow-brutal hover:scale-105 transition-transform">
        💻 Dev Powerhouse
      </div>
      <div className="hidden lg:block absolute bottom-32 right-20 rotate-[-4deg] border-[3px] border-black bg-duck-blue text-strong font-display font-black text-sm uppercase px-4 py-2 shadow-brutal hover:scale-105 transition-transform">
        ⚡ 100% Playable
      </div>

      <div className="portfolio-content flex flex-col justify-center items-center text-center">
        {/* Large Logo Frame */}
        <div className="relative group mb-8">
          <div className="absolute inset-0 bg-black rounded-3xl translate-x-2 translate-y-2 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform duration-150"></div>
          <div className="relative border-[4px] border-black bg-white rounded-3xl p-6 w-44 h-44 sm:w-52 sm:h-52 flex items-center justify-center transition-all duration-150 group-hover:scale-[1.02]">
            <img
              src="/eendgames.png"
              alt="EEND Games Logo"
              className="object-contain max-w-full max-h-full drop-shadow-[4px_4px_0_rgba(0,0,0,0.1)]"
            />
          </div>
        </div>

        <div className="max-w-[800px] px-4">
          <p className="font-display font-bold uppercase tracking-widest text-duck-beak text-sm sm:text-base mb-3">
            Bringing code & play to life
          </p>

          <h1 className="font-display font-black text-strong leading-none mb-6">
            Hi, I'm <span className="underline decoration-duck-blue decoration-wavy decoration-3 underline-offset-8">Arjan</span>
          </h1>

          <h2 className="font-display font-extrabold text-2xl sm:text-4xl md:text-5xl text-strong mb-6 leading-tight">
            Allround Dev Powerhouse & <br /><span className="bg-duck-yellow border-2 border-black px-2 py-2 leading-loose shadow-[3px_3px_0_#000]">Game Developer</span>
          </h2>

          <p className="font-medium text-gray-700 text-base sm:text-lg max-w-[650px] mx-auto mb-8 leading-relaxed">
            Welcome to <strong className="font-extrabold text-strong">EEND Games</strong>, my sandbox where robust full-stack engineering meets raw game dev creativity. Generalist developer by day, indie creator by night.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
            <a href="#projects" className="btn-brutal w-full sm:w-auto">
              Explore Games
            </a>
            <a href="#contact" className="btn-brutal-secondary w-full sm:w-auto">
              Get In Touch
            </a>
          </div>

          <div className="border-t-2 border-dashed border-black/30 pt-4">
            <SocialButtons />
          </div>
        </div>
      </div>
    </div>
  );
}
