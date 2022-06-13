import React from 'react'

export default function About() {
    return (
        <div id='about' className="w-full md:h-screen p-2 flex items-center py-16">
            <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
                <div className='col-span-2'>
                    <p className='uppercase text-xl tracking-widest text-main'>About</p>
                    <h2 className='py-4'>Who I am</h2>
                    <p className='py-2 text-gray-700'>Creative Software Enginer & Skater Boi</p>
                    <p className='py-2 text-gray-700'>
                        Hiya! I'm Arjan and a passionate Game Developer since I was 8 years old. My passion for games led me down the path of teaching myself to program and learn the
                        necessary skills to build video games of all kinds.
                    </p>

                </div>
                <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                    <img className='rounded-xl' src=""></img>
                </div>
            </div>
        </div>
    )
}
