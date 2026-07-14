import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

export function SocialButtons() {
  return (
    <div className="flex items-center justify-center gap-6 py-6 max-w-[360px] mx-auto">
      <a 
        href="https://www.linkedin.com/in/arjan-cordia-35142558/" 
        target="_blank" 
        rel="noreferrer"
        aria-label="LinkedIn"
      >
        <div className="border-[3px] border-black p-4 bg-duck-blue rounded-full shadow-brutal hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-brutal-lg active:translate-x-0 active:translate-y-0 active:shadow-none transition-all duration-100 cursor-pointer">
          <FaLinkedin size={24} className="text-black" />
        </div>
      </a>

      <a 
        href="https://github.com/arjaneend" 
        target="_blank" 
        rel="noreferrer"
        aria-label="GitHub"
      >
        <div className="border-[3px] border-black p-4 bg-duck-green rounded-full shadow-brutal hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-brutal-lg active:translate-x-0 active:translate-y-0 active:shadow-none transition-all duration-100 cursor-pointer">
          <FaGithub size={24} className="text-black" />
        </div>
      </a>

      <a 
        href="https://instagram.com/arjaneend_longboard" 
        target="_blank" 
        rel="noreferrer"
        aria-label="Instagram"
      >
        <div className="border-[3px] border-black p-4 bg-duck-purple rounded-full shadow-brutal hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-brutal-lg active:translate-x-0 active:translate-y-0 active:shadow-none transition-all duration-100 cursor-pointer">
          <FaInstagram size={24} className="text-black" />
        </div>
      </a>

      <a 
        href="mailto:arjaneend@gmail.com"
        aria-label="Email"
      >
        <div className="border-[3px] border-black p-4 bg-duck-yellow rounded-full shadow-brutal hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-brutal-lg active:translate-x-0 active:translate-y-0 active:shadow-none transition-all duration-100 cursor-pointer">
          <FaEnvelope size={24} className="text-black" />
        </div>
      </a>
    </div>
  );
}