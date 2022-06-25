import React from 'react'
import ProjectItem from './ProjectItem'


export default function Projects() {
    return (
        <div id='projects' className='w-full'>
            <div className='max-w-[1240px] mx-auto px-2 py-16'>
                <p className='text-xl tracking-widest uppercase text-strong-emphasis'>Projects</p>
                <h2></h2>
                <div className='grid md:grid-cols-2 gap-8'>

                    <ProjectItem title="Panzerdogs" backgroundImg="/assets/skills/unity3d.png" url="/projects/panzerdogs"></ProjectItem>
                    <ProjectItem title="Panzerdogs" backgroundImg="/assets/skills/unity3d.png" url="/"></ProjectItem>
                </div>

            </div>
        </div>
    )
}
