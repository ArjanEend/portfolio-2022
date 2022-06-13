import React from 'react'

export default function ProjectItem({ title, backgroundImg, url }: { title: string, backgroundImg: string, url: string }) {
    return (
        <div className='relative flex items-center justify-center h-auto w-full p-4 group shadow-inside hover:shadow-fill shadow-strong-emphasis hover:shadow-strong-emphasis transition-all duration-300 ease-out'>
            <img src={process.env.PUBLIC_URL + backgroundImg} className='group-hover:opacity-10' alt='/' />
            <div className='block opacity-0 group-hover:opacity-100 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] '>
                <h3 className='text-2xl text-bg tracking-wider text-center translate-y-[-150%] group-hover:translate-y-[0%] transition-all ease-bounce duration-300 delay-[60ms]'>{title}</h3>
                <p className='pb-4 pt-2 text-bg text-center translate-y-[-150%] group-hover:translate-y-[0%] transition-all ease-bounce duration-300 delay-[30ms]'>Web3/Rust/Typescript</p>
                <a href={url}>
                    <p className='text-center py-3 bg-soft text-gray-700font-bold text-lg cursor-pointer translate-y-[-150%] group-hover:translate-y-[0%] transition-all ease-bounce duration-300 delay-[10ms]'>More info</p>
                </a>
            </div>
        </div>
    )
}
