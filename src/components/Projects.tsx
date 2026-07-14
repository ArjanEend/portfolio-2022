import ProjectItem from "./ProjectItem";

export default function Projects() {
  return (
    <div id="projects" className="w-full py-20 bg-white border-y-4 border-black">
      <div className="portfolio-content max-w-[1240px] mx-auto">

        {/* Header */}
        <div className="mb-12">
          <div className="inline-block border-2 border-black bg-duck-purple text-strong font-display font-black text-xs uppercase px-3 py-1.5 rounded-full shadow-[2px_2px_0px_#000] w-max mb-4">
            My Portfolio
          </div>
          <h2 className="font-display font-black text-4xl sm:text-5xl text-strong mb-4 leading-none">
            What I Have Made
          </h2>
          <p className="font-medium text-gray-600 max-w-[600px]">
            From major console titles published by Nintendo to blockchain-backed indie multiplayer games and fast-paced game jams.
          </p>
        </div>

        {/* Section 0: EEND Games */}
        <div className="mb-16">
          <h3 className="font-display font-black text-xl uppercase tracking-wider text-duck-beak border-b-4 border-black pb-2 mb-6 max-w-max">
            🦆 EEND Games (Solo Studio)
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <ProjectItem
              title="Tower of Power"
              info="TypeScript / Arcade / HTML5"
              backgroundImg="/assets/projects/towerofpower.png"
              url="/projects/tower-of-power"
              badge="⚡ Active Proto"
              badgeColor="bg-duck-yellow"
            />
          </div>
        </div>

        {/* Section 1: Main Commercial Projects */}
        <div className="mb-16">
          <h3 className="font-display font-black text-xl uppercase tracking-wider text-duck-beak border-b-4 border-black pb-2 mb-6 max-w-max">
            🚀 Commercial Games
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <ProjectItem
              title="Panzerdogs"
              info="Web3 / Rust / TypeScript"
              backgroundImg="/assets/projects/panzerdogs.mp4"
              url="/projects/panzerdogs"
              badge="🔥 Web3 / Solana"
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
              info="Unity3D / C#"
              backgroundImg="/assets/projects/voggel.mp4"
              url="/projects/voggel"
              badge="🐣 Local Multiplayer"
              badgeColor="bg-duck-green"
            />
          </div>
        </div>

        {/* Section 2: Gamejams */}
        <div className="mb-16">
          <h3 className="font-display font-black text-xl uppercase tracking-wider text-duck-beak border-b-4 border-black pb-2 mb-6 max-w-max">
            ⏱️ Game Jam Creations
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <ProjectItem
              title="Transmittens"
              info="GGJ 2018"
              backgroundImg="/assets/projects/transmittens.png"
              url="https://globalgamejam.org/2018/games/transmittens-0"
              badge="🐱 Global Game Jam"
              badgeColor="bg-duck-yellow"
            />
            <ProjectItem
              title="Carnyx: The Sound of Slaughter"
              info="GGJ 2017"
              backgroundImg="/assets/projects/carnyx.png"
              url="https://globalgamejam.org/2017/games/carnyx-sound-slaughter"
              badge="⚔️ Best Audio Nominee"
              badgeColor="bg-duck-beak text-white"
            />
            <ProjectItem
              title="Okapi & DikDik"
              info="GGJ 2015"
              backgroundImg="/assets/projects/okapidikdik.png"
              url="https://globalgamejam.org/2015/games/okapi-dikdik"
              badge="🌱 Retro Co-op"
              badgeColor="bg-duck-green"
            />
            <ProjectItem
              title="Twizard"
              info="Indie Game Jam"
              backgroundImg="/assets/projects/twizard.png"
              url="https://gamejolt.com/games/twizard/38728"
              badge="🔮 Wizard Battler"
              badgeColor="bg-duck-purple"
            />
          </div>
        </div>

        {/* Section 3: Older Work */}
        <div>
          <h3 className="font-display font-black text-xl uppercase tracking-wider text-duck-beak border-b-4 border-black pb-2 mb-6 max-w-max">
            🏛️ Classic Projects & Flash Era
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <ProjectItem
              title="Amazing Katamari Damacy"
              info="Unity3D / Mobile"
              backgroundImg="/assets/projects/katamari.webp"
              url="https://play.google.com/store/apps/details?id=eu.bandainamcoent.amazingkatamaridamacy"
              badge="🪐 Bandai Namco"
              badgeColor="bg-duck-blue"
            />
            <ProjectItem
              title="My Tamagotchi Forever"
              info="Unity3D / AR"
              backgroundImg="/assets/projects/tamagotchi.webp"
              url="https://play.google.com/store/apps/details?id=eu.bandainamcoent.mytamagotchiforever"
              badge="🥚 Virtual Pet"
              badgeColor="bg-duck-yellow"
            />
            <ProjectItem
              title="Ducktypen"
              info="Flash / ActionScript 3"
              backgroundImg="/assets/projects/ducktypen.jpg"
              url="https://www.ducktypen.nl/"
              badge="🦆 Educational Game"
              badgeColor="bg-duck-green"
            />
            <ProjectItem
              title="Binnenhof Battle"
              info="Flash / ActionScript 3"
              backgroundImg="/assets/projects/binnenhofbattle.png"
              url="https://www.youtube.com/watch?v=6gXjA_YE6fc"
              badge="🏛️ Political Fight"
              badgeColor="bg-duck-beak text-white"
            />
          </div>
        </div>

      </div>
    </div>
  );
}
