import { FaGithub, FaLinkedin } from "react-icons/fa";
import "../styling/SocialButtons.css";

export function SocialButtons() {
    return <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
        <div className='roundbutton group'>
            <FaLinkedin className='buttonicon' size={32} color='#272626' />
        </div>
        <div className='roundbutton group'>
            <FaGithub className='buttonicon' size={32} color='#272626' />
        </div>
        <div className='roundbutton group'>
            <FaLinkedin className='buttonicon' size={32} color='#272626' />
        </div>
    </div>
}