import React from 'react'
import { SocialButtons } from './SocialButtons'

export default function Home() {
    return (
        <div className='portfolio-content text-center flex justify-center items-center'>
            <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
                <div>
                    <p className='mt-20 uppercase text-md tracking-widest text-gray-600'>
                        Bringing code to life
                    </p>
                    <h1 className='py-4 text-gray-700'>Hi, I'm <span className='text-strong-emphasis'>Arjan</span></h1>
                    <h1 className='py-4 text-gray-700'>A <span className='text-strong-emphasis'>Software Architect</span> & Game Developer</h1>
                    <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
                        I'm a Software Architect with a history in game development. Currently I'm building games in my free time while working on enterprise software professionally.
                    </p>
                    <SocialButtons />
                </div>
            </div>
        </div>
    )
}
