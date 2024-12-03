import React from 'react'

export default function About() {
    return (
        <div id='about' className="w-full lg:h-screen p-8 lg:p-16 flex items-center py-16">
            <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
                <div className='col-span-2'>
                    <p className='uppercase text-xl tracking-widest text-main'>About</p>
                    <h2 className='py-4'>Who I am</h2>
                    <p className='py-2 text-gray-700'>Coding lover & Skater</p>
                    <p className='py-2 text-gray-700'>
                        Hiya! I'm Arjan and have been building software & video games since I was 8 years old. My curiosity for wanting to know how games & websites work led me down the path of teaching myself to program and learn the
                        necessary skills to build these things myself. This fascination has never left me and I'm always looking at how software can improve our lives and make us happier. The programs we build are in a way a conversation with the user and I strive to make it a pleasant one.
                    </p>
                    <p>
                        Oh yes, and in my free time I love to skate, definitely a testament to my ability to keep doing something even if it hits my shins every time I try to do it.
                    </p>
                    <br />

                </div>
                <div className='w-full h-auto m-auto flex items-center justify-center border-black border-8 hover:scale-105 ease-bounce duration-300'>
                    <img className='' src={process.env.PUBLIC_URL + '/assets/profile.jpg'} alt="profile"></img>
                </div>
            </div>
        </div >
    )
}
