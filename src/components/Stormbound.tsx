import React from 'react'
import { RiRadioButtonFill } from 'react-icons/ri';

export default function Stormbound() {
    return (
        <div className='w-full'>
            <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
                <div className='absolute left-0 w-full h-[30vh] lg:h-40vh bg-black/80 z-10' />
                <div className='absolute w-full bg-cover h-[30vh] lg:h-40vh bg-center z-[1]' style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/projects/stormbound.jpg)` }} >
                    <video className='object-cover' playsInline muted loop autoPlay={true} src={`${process.env.PUBLIC_URL}/assets/projects/stormbound.mp4`} />
                </div>
                <div className='absolute top-[70%] lg:top-[50%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                    <h2 className='py-2'>Stormbound</h2>
                    <h3>Web3/Rust/Typescript</h3>
                </div>
            </div>

            <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8 '>
                <div className='col-span-3'>
                    <p>Project</p>
                    <h2>Overview</h2>
                    <p>
                        Stormbound is my first experience to work on a successful global launch. I started working on the project just before soft launch and back then I was mostly responsible for implementing UI in the game.
                        <br />
                        Later during live ops I've guided an intern and took responsibility for building front-end features and even implementing gameplay code on the backend in NodeJS.   </p>
                    <a href="https://play.google.com/store/apps/details?id=com.kongregate.mobile.stormbound.google" target="_blank" rel="noreferrer"><button className='px-8 py-2 mt-4 mr-8'>Google Play</button></a>
                    <a href="https://itune.sapple.com/us/app/stormbound/id1234446615?mt=8" target="_blank" rel="noreferrer"><button className='px-8 py-2 mt-4 mr-8'>iOS App Store</button></a>
                    <a href="https://store.steampowered.com/app/790600/Stormbound/" target="_blank" rel="noreferrer"><button className='px-8 py-2 mt-4 mr-8'>Steam</button></a>

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
