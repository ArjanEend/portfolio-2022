import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";
import "../styling/SocialButtons.css";

export function SocialButtons() {
    return <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>

        <a href="https://www.linkedin.com/in/arjan-cordia-35142558/">
            <div className='roundbutton group'>
                <FaLinkedin className='buttonicon' size={32} color='#272626' />
            </div>
        </a>

        <a href="https://github.com/arjaneend">
            <div className='roundbutton group'>
                <FaGithub className='buttonicon' size={32} color='#272626' />
            </div>
        </a>

        <a href="https://instagram.com/arjaneend_longboard">
            <div className='roundbutton group'>
                <FaInstagram className='buttonicon' size={32} color='#272626' />
            </div>
        </a>

        <a href="mailto:arjaneend@gmail.com">
            <div className='roundbutton group'>
                <FaEnvelope className='buttonicon' size={32} color='#272626' />
            </div>
        </a>
    </div>
}