import React from 'react'

export default function ProjectItem({ title, backgroundImg, url }: { title: string, backgroundImg: string, url: string }) {
    return (
        <div className='relative flex max-h-[250px] items-center justify-center h-auto w-full p-2 group shadow-inside hover:shadow-fill shadow-strong-emphasis hover:shadow-strong-emphasis transition-all duration-300 ease-out'>
            <div className='w-full h-full overflow-hidden'>
                <img src={process.env.PUBLIC_URL + backgroundImg} className='object-fill group-hover:opacity-20' alt='/' />
            </div>
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
