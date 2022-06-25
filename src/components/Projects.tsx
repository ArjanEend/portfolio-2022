import React from 'react'
import ProjectItem from './ProjectItem'


export default function Projects() {
    return (
        <div id='projects' className='portfolio-content'>
            <div className='max-w-[1240px] mx-auto px-2 py-16'>
                <p className='text-xl tracking-widest uppercase text-strong-emphasis'>Projects</p>
                <h2 className='py-4 text-s'>What I made</h2>
                <div className='grid md:grid-cols-2 gap-8'>

                    <ProjectItem title="Panzerdogs" backgroundImg="/assets/skills/unity3d.png" url="/projects/panzerdogs"></ProjectItem>
                    <ProjectItem title="Good Job!" backgroundImg="/assets/projects/goodjob.jpg" url="/projects/goodjob"></ProjectItem>
                </div>

            </div>
        </div>
    )
}
