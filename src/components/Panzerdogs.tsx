import React from 'react'
import { RiRadioButtonFill } from 'react-icons/ri';

export default function Panzerdogs() {
    return (
        <div className='w-full'>
            <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
                <div className='absolute left-0 w-full h-[30vh] lg:h-40vh bg-black/80 z-10' />
                <div className='absolute w-full bg-cover h-[30vh] lg:h-40vh bg-center z-[1]' style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/skills/unity3d.png)` }} />
                <div className='absolute top-[50%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                    <h2 className='py-2'>Panzerdogs</h2>
                    <h3>stuff</h3>
                </div>
            </div>

            <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
                <div className='col-span-4'>
                    <p>Project</p>
                    <h2>Overview</h2>
                    <p>
                        Lorem ipsum dolor sit amet.
                    </p>
                    <button className='px-8 py-2 mt-4 mr-8'>Demo</button>
                    <button className='px-8 py-2 mt-4'>Code</button>
                </div>
                <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
                    <div className='p-2'>
                        <p>Technologies</p>
                        <div>
                            <p><RiRadioButtonFill />React</p>
                            <p><RiRadioButtonFill />React</p>
                            <p><RiRadioButtonFill />React</p>
                            <p><RiRadioButtonFill />React</p>
                            <p><RiRadioButtonFill />React</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
