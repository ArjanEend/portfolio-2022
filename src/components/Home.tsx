import React from 'react'
import { SocialButtons } from './SocialButtons'

export default function Home() {
    return (
        <div className='portfolio-content text-center'>
            <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
                <div>
                    <p className='mt-20 uppercase text-sm tracking-widest text-gray-600'>
                        Bringing code to life
                    </p>
                    <h1 className='py-4 text-gray-700'>Hi, I'm <span className='text-strong-emphasis'>Arjan</span></h1>
                    <h1 className='py-4 text-gray-700'>A Full-Stack <span className='text-strong-emphasis'>Game</span> & <span className='text-strong-emphasis'>Web3</span> Developer</h1>
                    <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
                        I'm a full stack game engineer that loves to build (and design) anything technical for video games. Currently I'm building decentralized web3 applications that have utility for games.
                    </p>
                    <SocialButtons />
                </div>
            </div>
        </div>
    )
}
