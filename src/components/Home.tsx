import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Home() {
    return (
        <div className='w-full h-screen text-center'>
            <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
                <div>
                    <p className='uppercase text-sm tracking-widest text-gray-600'>
                        Making code come alive
                    </p>
                    <h1 className='py-4 text-gray-700'>Hi, I'm <span className='text-strong-emphasis'>Arjan</span></h1>
                    <h1 className='py-4 text-gray-700'>A Full-Stack <span className='text-strong-emphasis'>Game</span> & <span className='text-strong-emphasis'>Web3</span> Developer</h1>
                    <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
                        I'm a full stack game engineer that loves to build (and design) anything technical for video games. Currently I'm building decentralized web3 applications that have utility for games.
                    </p>
                    <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                        <div className='rounded-full border-[#ffffff30] border-4 shadow-md shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-150'>
                            <FaLinkedin />
                        </div>
                        <div className='rounded-full border-[#ffffff30] border-4 shadow-md shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-150'>
                            <FaGithub />
                        </div>
                        <div className='rounded-full border-[#ffffff30] border-4 shadow-md shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-150'>
                            <FaLinkedin />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
