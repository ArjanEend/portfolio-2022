import React from 'react'

export default function About() {
    return (
        <div className="w-full md:h-screen p-2 flex items-center py-16">
            <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
                <div className='col-span-2'>
                    <p className='uppercase text-xl tracking-widest text-main'>About</p>
                    <h2 className='py-4'>Who I am</h2>
                    <p className='py-2 text-main-500'>something nice</p>
                    <p className='py-2 text-main-500'>
                        Hello I do skateboarding & programming
                    </p>

                </div>
                <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                    <img className='rounded-xl' src=""></img>
                </div>
            </div>
        </div>
    )
}
