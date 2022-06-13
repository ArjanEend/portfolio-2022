import React from 'react'

export default function Skills() {
    return (
        <div id='skills' className='w-full lg:h-screen p-2'>
            <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
                <p>Skills</p>
                <h2 className='py-4'>What I do</h2>
                <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
                    <div className='p-4 bg-bg-300 shadow-square  hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <img src={process.env.PUBLIC_URL + '/assets/skills/unity3d.png'} width='64px' height='64px' alt='/' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>Unity3D</h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-4 bg-bg-300 shadow-square hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <img src={process.env.PUBLIC_URL + '/assets/skills/unity3d.png'} width='64px' height='64px' alt='/' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>Unity3D</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
