import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";
import Button from "./ui/Button";

export function SocialButtons() {
  return (
    <div className="flex items-center justify-center gap-6 py-6 max-w-[360px] mx-auto">
      <Button
        variant="icon"
        href="https://www.linkedin.com/in/arjan-cordia-35142558/"
        target="_blank"
        className="bg-duck-blue"
        ariaLabel="LinkedIn"
      >
        <FaLinkedin size={24} className="text-black" />
      </Button>

      <Button
        variant="icon"
        href="https://github.com/arjaneend"
        target="_blank"
        className="bg-duck-green"
        ariaLabel="GitHub"
      >
        <FaGithub size={24} className="text-black" />
      </Button>

      <Button
        variant="icon"
        href="https://instagram.com/arjaneend_longboard"
        target="_blank"
        className="bg-duck-purple"
        ariaLabel="Instagram"
      >
        <FaInstagram size={24} className="text-black" />
      </Button>

      <Button
        variant="icon"
        href="mailto:arjaneend@gmail.com"
        className="bg-duck-yellow"
        ariaLabel="Email"
      >
        <FaEnvelope size={24} className="text-black" />
      </Button>
    </div>
  );
}