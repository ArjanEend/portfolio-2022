import { Link } from "react-router-dom";

export default function ProjectItem({ title, backgroundImg, url, info }: { title: string, info: string, backgroundImg: string, url: string }) {
    return (
        <div className='relative flex max-h-[250px] min-h-[250px] items-center justify-center h-auto w-full p-2 group shadow-inside hover:shadow-fill shadow-strong-emphasis hover:shadow-strong-emphasis transition-all duration-300 ease-out'>
            <div className='w-full h-full overflow-hidden'>
                {backgroundImg.includes(".mp4") && <video muted loop autoPlay src={process.env.PUBLIC_URL + backgroundImg} className='object-cover group-hover:opacity-20' />}
                {!backgroundImg.includes(".mp4") && <img src={process.env.PUBLIC_URL + backgroundImg} className='object-cover group-hover:opacity-20' alt='/' />}
            </div>
            <div className='block opacity-0 group-hover:opacity-100 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] '>
                <h3 className='text-2xl text-bg tracking-wider text-center translate-y-[-150%] group-hover:translate-y-[0%] transition-all ease-bounce duration-300 delay-[60ms]'>{title}</h3>
                <p className='pb-4 pt-2 text-bg text-center translate-y-[-150%] group-hover:translate-y-[0%] transition-all ease-bounce duration-300 delay-[30ms]'>{info}</p>
                <Link to={url}>
                    <p className='text-center py-3 bg-soft text-gray-700font-bold text-lg cursor-pointer translate-y-[-150%] group-hover:translate-y-[0%] transition-all ease-bounce duration-300 delay-[10ms]'>More info</p>
                </Link>
            </div>
        </div>
    )
}
