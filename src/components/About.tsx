import React from 'react'

export default function About() {
    return (
        <div id='about' className="w-full lg:h-screen p-8 lg:p-16 flex items-center py-16">
            <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
                <div className='col-span-2'>
                    <p className='uppercase text-xl tracking-widest text-main'>About</p>
                    <h2 className='py-4'>Who I am</h2>
                    <p className='py-2 text-gray-700'>Full-stack Software Engineer & Skater</p>
                    <p className='py-2 text-gray-700'>
                        Hiya! I'm Arjan and a passionate Game Developer since I was 8 years old. My passion for games led me down the path of teaching myself to program and learn the
                        necessary skills to build video games of all kinds.
                    </p>

                </div>
                <div className='w-full h-auto m-auto flex items-center justify-center border-black border-8 hover:scale-105 ease-bounce duration-300'>
                    <img className='' src={process.env.PUBLIC_URL + '/assets/profile.jpg'} alt="profile"></img>
                </div>
            </div>
        </div>
    )
}
