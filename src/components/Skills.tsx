export default function Skills() {
  const skillsList = [
    { name: "Unity3D", image: "/assets/skills/unity3d.png", color: "hover:bg-duck-yellow" },
    { name: "C#", image: "/assets/skills/csharp.svg", color: "hover:bg-duck-purple" },
    { name: "React", image: "/assets/skills/react.svg", color: "hover:bg-duck-blue" },
    { name: "TypeScript", image: "/assets/skills/typescript.svg", color: "hover:bg-duck-green" },
    { name: "NodeJS", image: "/assets/skills/nodejs.png", color: "hover:bg-duck-beak hover:text-white" },
    { name: "Azure", image: "/assets/skills/azure.png", color: "hover:bg-duck-navy hover:text-white" },
    { name: "Solana", image: "/assets/skills/solana.jpg", color: "hover:bg-black hover:text-white" },
    { name: "Firebase", image: "/assets/skills/firebase.svg", color: "hover:bg-duck-yellow" },
  ];

  return (
    <div id="skills" className="w-full py-20 bg-bg">
      <div className="portfolio-content max-w-[1240px] mx-auto">
        <div className="inline-block border-2 border-black bg-duck-green text-strong font-display font-black text-xs uppercase px-3 py-1.5 rounded-full shadow-[2px_2px_0px_#000] w-max mb-4">
          Tech Stack
        </div>

        <h2 className="font-display font-black text-4xl sm:text-5xl text-strong mb-4 leading-none">
          What I Focus On
        </h2>
        <p className="font-medium text-gray-600 mb-10 max-w-[600px]">
          A combination of robust enterprise backend technologies, modern frontend frameworks, and battle-tested game engines.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skillsList.map((skill) => (
            <div 
              key={skill.name} 
              className={`border-[3px] border-black p-4 bg-white shadow-brutal flex flex-col items-center justify-center h-32 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-brutal-lg transition-all duration-200 cursor-pointer ${skill.color}`}
            >
              <div className="h-12 w-12 flex items-center justify-center mb-3">
                <img 
                  className="max-h-full max-w-full object-contain filter drop-shadow-[1px_1px_0px_rgba(0,0,0,0.1)]" 
                  src={skill.image} 
                  alt={skill.name} 
                />
              </div>
              <h3 className="font-display font-black uppercase tracking-wider text-xs sm:text-sm text-center">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
