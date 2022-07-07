import React from 'react'
import { RiRadioButtonFill } from 'react-icons/ri';

export default function Panzerdogs() {
    return (
        <div className='w-full'>
            <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
                <div className='absolute left-0 w-full h-[30vh] lg:h-40vh bg-black/80 z-10' />
                <div className='absolute w-full bg-cover h-[30vh] lg:h-40vh bg-center z-[1]' style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/projects/panzerdogs.png)` }} >
                    <video className='object-cover' loop autoPlay={true} src={`${process.env.PUBLIC_URL}/assets/projects/panzerdogs.mp4`} />
                </div>
                <div className='absolute top-[70%] lg:top-[50%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                    <h2 className='py-2'>Panzerdogs</h2>
                    <h3>Web3/Rust/Typescript</h3>
                </div>
            </div>

            <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8 '>
                <div className='col-span-3'>
                    <p>Project</p>
                    <h2>Overview</h2>
                    <p>
                        Panzerdogs is a self-published NFT Project & Game that delivers an action-packed experience to players. During this project I've written all smart contracts & implemented the blockchain-backed logic in the game and auxiliary applications. I've worked with a wide range of technologies that are mostly backed by Javascript & Typescript.</p>
                    <a href="https://www.panzerdogs.io/" target="_blank" rel="noreferrer"><button className='px-8 py-2 mt-4 mr-8'>Panzerdogs Website</button></a>
                </div>
                <div className='col-span-4 md:col-span-1 bg-bg-300 shadow-square p-4'>
                    <div className='p-2'>
                        <h4>Contributions</h4>
                        <div>
                            <p className='flex items-center my-2'><RiRadioButtonFill className='min-w-[10px] max-w-[10px] mr-1' />Responsible for all web3 integration</p>
                            <p className='flex items-center my-2'><RiRadioButtonFill className='min-w-[10px] max-w-[10px] mr-1' />Built in-house toolsuite for Solana</p>
                            <p className='flex items-center my-2'><RiRadioButtonFill className='min-w-[10px] max-w-[10px] mr-1' />Building dApps</p>
                        </div>
                    </div>
                </div>
                <div className='col-span-4 md:col-span-1 bg-bg-300 shadow-square p-4'>
                    <div className='p-2'>
                        <h4>Achievements</h4>
                        <div>
                            <p className='flex items-center my-2'><RiRadioButtonFill className='min-w-[10px] max-w-[10px] mr-1' />Rendering NFTs from nodeJS servers</p>
                            <p className='flex items-center my-2'><RiRadioButtonFill className='min-w-[10px] max-w-[10px] mr-1' />Creating platform for user-generated NFTs</p>
                            <p className='flex items-center my-2'><RiRadioButtonFill className='min-w-[10px] max-w-[10px] mr-1' />5555 NFTs sold in 15 minutes</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
