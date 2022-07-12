import React from 'react'
import ProjectItem from './ProjectItem'


export default function Projects() {
    return (
        <div id='projects' className='portfolio-content'>
            <div className='max-w-[1240px] mx-auto px-2 py-16'>
                <p className='text-xl tracking-widest uppercase text-strong-emphasis'>Projects</p>
                <h2 className='py-4 text-s'>What I made</h2>
                <div className='grid md:grid-cols-2 gap-8'>
                    <ProjectItem title="Panzerdogs" info="Web3/Rust/Typescript" backgroundImg="/assets/projects/panzerdogs.mp4" url="/projects/panzerdogs"></ProjectItem>
                    <ProjectItem title="Good Job!" info="Unity3D/C#/Nintendo Switch" backgroundImg="/assets/projects/goodjob.mp4" url="/projects/goodjob"></ProjectItem>
                    <ProjectItem title="Stormbound" info="Unity3D/Mobile/NodeJS" backgroundImg="/assets/projects/stormbound.mp4" url="/projects/stormbound"></ProjectItem>
                    <ProjectItem title="Voggel" info="Unity3D/C#" backgroundImg="/assets/projects/voggel.mp4" url="/projects/voggel"></ProjectItem>
                </div>
                <h2 className='py-4 text-s'>Gamejams</h2>
                <div className='grid md:grid-cols-2 gap-8'>
                    <ProjectItem title="Transmittens" info="Global Game Jam 2018" backgroundImg="/assets/projects/transmittens.png" url="https://globalgamejam.org/2018/games/transmittens-0"></ProjectItem>
                    <ProjectItem title="Carnyx: The sound of slaughter" info="Global Game Jam 2017" backgroundImg="/assets/projects/carnyx.png" url="https://globalgamejam.org/2017/games/carnyx-sound-slaughter"></ProjectItem>
                    <ProjectItem title="Okapi & DikDik" info="Global Game Jam 2015" backgroundImg="/assets/projects/okapidikdik.png" url="https://globalgamejam.org/2015/games/okapi-dikdik"></ProjectItem>
                    <ProjectItem title="Twizard" info="Pewdiepie game jam" backgroundImg="/assets/projects/twizard.png" url="https://gamejolt.com/games/twizard/38728"></ProjectItem>
                </div>
                <h2 className='py-4 text-s'>Older work</h2>
                <div className='grid md:grid-cols-2 gap-8'>
                    <ProjectItem title="Amazing Katamari Damacy" info="Unity3D/C#" backgroundImg="/assets/projects/katamari.webp" url="https://play.google.com/store/apps/details?id=eu.bandainamcoent.amazingkatamaridamacy"></ProjectItem>
                    <ProjectItem title="My Tamagotchi Forever" info="Unity3D/C#" backgroundImg="/assets/projects/tamagotchi.webp" url="https://play.google.com/store/apps/details?id=eu.bandainamcoent.mytamagotchiforever"></ProjectItem>
                    <ProjectItem title="Ducktypen" info="Flash/ActionScript 3" backgroundImg="/assets/projects/ducktypen.jpg" url="https://www.ducktypen.nl/"></ProjectItem>
                    <ProjectItem title="Binnenhof Battle" info="Flash/ActionScript 3" backgroundImg="/assets/projects/binnenhofbattle.png" url="https://www.youtube.com/watch?v=6gXjA_YE6fc"></ProjectItem>
                </div>
            </div>
        </div>
    )
}
