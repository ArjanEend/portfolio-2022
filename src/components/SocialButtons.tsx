import { FaGithub, FaLinkedin } from "react-icons/fa";

export function SocialButtons() {
    return <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
        <div className='rounded-full bg-main border-[#272626] border-[6px]  p-4 cursor-pointer hover:scale-105 ease-in duration-150'>
            <FaLinkedin size={32} color='#272626' />
        </div>
        <div className='rounded-full bg-main border-[#272626] border-[6px]  p-4 cursor-pointer hover:scale-105 ease-in duration-150'>
            <FaGithub size={32} color='#272626' />
        </div>
        <div className='rounded-full bg-main border-[#272626] border-[6px]  p-4 cursor-pointer hover:scale-105 ease-in duration-150'>
            <FaLinkedin size={32} color='#272626' />
        </div>
    </div>
}