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

            </div>
        </div>
    )
}
