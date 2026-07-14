export default function About() {
  return (
    <div id="about" className="w-full py-20 bg-white border-y-4 border-black relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute right-0 top-0 w-32 h-32 bg-duck-yellow/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="portfolio-content max-w-[1240px] mx-auto grid md:grid-cols-3 gap-12 items-center">
        {/* Profile Card / Image */}
        <div className="md:col-span-1 flex justify-center">
          <div className="relative group max-w-[280px] w-full">
            {/* Flat shadow */}
            <div className="absolute inset-0 bg-black translate-x-3 translate-y-3 rotate-[1deg] group-hover:translate-x-4 group-hover:translate-y-4 transition-transform duration-200"></div>
            {/* Card contents */}
            <div className="relative border-[4px] border-black bg-bg p-3 rotate-[-2deg] group-hover:rotate-0 transition-transform duration-200">
              <div className="border-[3px] border-black overflow-hidden bg-white mb-3">
                <img 
                  src="/assets/profile.jpg" 
                  alt="Arjan Cordia Profile" 
                  className="object-cover w-full h-auto aspect-square hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="text-center font-display font-black uppercase text-sm tracking-widest text-strong bg-duck-blue border-2 border-black py-1.5 shadow-[2px_2px_0px_#000]">
                🛹 Skate or Dev!
              </div>
            </div>
          </div>
        </div>

        {/* Story Text */}
        <div className="md:col-span-2 flex flex-col justify-center">
          <div className="inline-block border-2 border-black bg-duck-purple text-strong font-display font-black text-xs uppercase px-3 py-1.5 rounded-full shadow-[2px_2px_0px_#000] w-max mb-4">
            About Me
          </div>
          
          <h2 className="font-display font-black text-4xl sm:text-5xl text-strong mb-6 leading-none">
            Who I Am
          </h2>

          <p className="font-display font-bold text-lg text-duck-beak mb-4 uppercase tracking-wider">
            Coding Lover, Game Designer & Skate Enthusiast
          </p>

          <div className="text-gray-700 font-medium text-base sm:text-lg space-y-4 leading-relaxed">
            <p>
              Hiya! I'm Arjan. I've been building software and video games since I was 8 years old. My curiosity to figure out how games and websites actually work led me down a self-taught path of programming. I've spent years learning the skills to bring ideas to life.
            </p>
            <p>
              This fascination has never left me. Today, I build robust systems as an allround **Dev Powerhouse**, designing full-stack architectures and scalable cloud environments, while keeping my passion for game dev burning bright by creating indie projects under the banner of **EEND Games**.
            </p>
            <p>
              When I'm not writing code or designing systems, you'll find me on a skateboard. It's a true testament to my ability to keep trying at something—even if it hits my shins every single time I fail a trick.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
