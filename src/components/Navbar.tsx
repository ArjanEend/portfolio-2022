"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { SocialButtons } from "./SocialButtons";
import Button from "./ui/Button";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isFreelance, setIsFreelance] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const checkFreelance = () => {
      const isFreelanceRoute = pathname.startsWith("/freelance");
      const isFreelanceHost = typeof window !== "undefined" && window.location.hostname.includes("arjancordia");
      const isFreelanceQuery = typeof window !== "undefined" && window.location.search.includes("mode=freelance");
      setIsFreelance(isFreelanceRoute || isFreelanceHost || isFreelanceQuery);
    };
    checkFreelance();
  }, [pathname]);

  // Prefix handling for multi-persona navigation
  const prefix = isFreelance ? (pathname.startsWith("/freelance") ? "/freelance" : "") : "";

  // Navigation Links
  const navLinks = [
    { label: "Home", href: prefix || "/" },
    { label: "About", href: `${prefix}/#about` },
    { label: "Skills", href: `${prefix}/#skills` },
    { label: "Projects", href: `${prefix}/#projects` },
    { label: "Contact", href: `${prefix}/#contact` },
  ];

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full h-20 bg-bg border-b-4 border-black z-[10000] transition-all duration-200">
      <div className="max-w-[1240px] mx-auto h-full px-6 flex justify-between items-center">
        {/* Logo and Brand */}
        <Link href={isFreelance ? "/freelance" : "/"} className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-black focus-visible:ring-offset-2">
          <div className="border-[3px] border-black rounded-lg bg-white overflow-hidden shadow-brutal p-1 w-12 h-12 flex items-center justify-center transition-all duration-150 group-hover:translate-x-[-2px] group-hover:translate-y-[-2px] group-hover:shadow-brutal-lg">
            <img 
              src={isFreelance ? "/assets/profile.jpg" : "/eendgames.png"} 
              alt={isFreelance ? "Arjan Cordia" : "EEND Games"} 
              className={`object-contain max-w-full max-h-full ${isFreelance ? "rounded-sm object-cover w-full h-full" : ""}`}
            />
          </div>
          <span className="font-display font-black uppercase tracking-tight text-xl sm:text-2xl text-strong group-hover:text-duck-beak transition-all duration-150">
            {isFreelance ? "Arjan Cordia" : "EEND Games"}
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href.includes("#") && typeof window !== "undefined" && pathname + window.location.hash === link.href);
              return (
                <li key={link.label}>
                  <Button
                    variant="unstyled"
                    href={link.href}
                    className={`relative font-display font-bold uppercase tracking-wider text-xs border-2 px-2.5 py-1.5 transition-all duration-150 hover:border-black hover:bg-duck-yellow hover:text-black hover:shadow-brutal ${
                      isActive ? "bg-duck-blue border-black shadow-brutal text-black" : "text-strong border-transparent"
                    }`}
                  >
                    {link.label}
                  </Button>
                </li>
              );
            })}
          </ul>

          {/* Mode Switcher Sticker Button */}
          <div className="border-l-2 border-dashed border-black/30 pl-6">
            {isFreelance ? (
              <Button 
                variant="unstyled"
                href="/?mode=games" 
                className="inline-flex items-center gap-1.5 border-2 border-black bg-duck-purple text-strong font-display font-bold text-xs uppercase px-3 py-1.5 shadow-brutal hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-brutal-lg active:translate-x-0 active:translate-y-0 active:shadow-none transition-all duration-100"
              >
                <span>🎮 EEND Games</span>
              </Button>
            ) : (
              <Button 
                variant="unstyled"
                href="/freelance" 
                className="inline-flex items-center gap-1.5 border-2 border-black bg-duck-yellow text-black font-display font-bold text-xs uppercase px-3 py-1.5 shadow-brutal hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-brutal-lg active:translate-x-0 active:translate-y-0 active:shadow-none transition-all duration-100"
              >
                <span>💼 Hire Me / Consulting</span>
              </Button>
            )}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-4">
          {/* Mobile switcher badge */}
          {isFreelance ? (
            <Button 
              variant="unstyled"
              href="/?mode=games" 
              className="border-2 border-black bg-duck-purple text-strong font-display font-bold text-[10px] uppercase px-2.5 py-1 shadow-brutal"
            >
              <span>🎮 Games</span>
            </Button>
          ) : (
            <Button 
              variant="unstyled"
              href="/freelance" 
              className="border-2 border-black bg-duck-yellow text-black font-display font-bold text-[10px] uppercase px-2.5 py-1 shadow-brutal"
            >
              <span>💼 Hire Me</span>
            </Button>
          )}

          <button 
            onClick={handleMenuToggle} 
            className="border-[3px] border-black p-2 bg-white shadow-brutal active:translate-x-0 active:translate-y-0 active:shadow-none hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-brutal-lg focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-black transition-all duration-100 cursor-pointer"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div 
        className={`fixed left-0 top-0 w-full h-screen bg-black/50 md:hidden transition-opacity duration-300 z-[99] ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={handleMenuToggle}
      >
        <div 
          className={`fixed left-0 top-0 w-[80%] sm:w-[60%] h-screen bg-bg border-r-4 border-black p-10 flex flex-col justify-between transition-transform duration-300 ease-out z-[100] ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div>
            <div className="flex w-full items-center justify-between">
              {/* Mobile Drawer Logo */}
              <div className="flex items-center gap-2">
                <div className="border-[3px] border-black rounded-lg bg-white p-1 w-10 h-10 flex items-center justify-center overflow-hidden">
                  <img 
                    src={isFreelance ? "/assets/profile.jpg" : "/eendgames.png"} 
                    alt="Logo" 
                    className={`object-contain ${isFreelance ? "object-cover w-full h-full rounded-sm" : ""}`}
                  />
                </div>
                <span className="font-display font-black uppercase text-base text-strong">
                  {isFreelance ? "Arjan Cordia" : "EEND Games"}
                </span>
              </div>
              <button 
                onClick={handleMenuToggle} 
                className="border-[3px] border-black p-2 bg-white rounded-full cursor-pointer shadow-brutal hover:scale-105 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-black transition-all duration-100"
                aria-label="Close menu"
              >
                <AiOutlineClose size={18} />
              </button>
            </div>

            <div className="border-b-4 border-black my-6 pb-4">
              <p className="font-bold text-xs tracking-wide uppercase text-duck-beak">
                {isFreelance ? "Developer by craft • Engineer by mindset" : "Bringing code & play to life"}
              </p>
            </div>

            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Button 
                    variant="unstyled"
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block font-display font-black uppercase text-lg border-[3px] border-black p-3 bg-white shadow-brutal hover:bg-duck-yellow hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-brutal-lg transition-all duration-100"
                  >
                    {link.label}
                  </Button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            {/* Persona toggle in mobile footer */}
            <div className="mb-4">
              {isFreelance ? (
                <Button
                  variant="unstyled"
                  href="/?mode=games"
                  onClick={() => setMenuOpen(false)}
                  className="w-full text-center block font-display font-black uppercase text-sm border-[3px] border-black p-2 bg-duck-purple text-strong shadow-brutal active:translate-y-0 active:translate-x-0"
                >
                  <span>🎮 Visit EEND Games</span>
                </Button>
              ) : (
                <Button
                  variant="unstyled"
                  href="/freelance"
                  onClick={() => setMenuOpen(false)}
                  className="w-full text-center block font-display font-black uppercase text-sm border-[3px] border-black p-2 bg-duck-yellow text-black shadow-brutal active:translate-y-0 active:translate-x-0"
                >
                  <span>💼 View Freelance Profile</span>
                </Button>
              )}
            </div>

            <p className="font-display font-bold uppercase tracking-wider text-[10px] text-center border-b-2 border-black pb-2 mb-2">
              Let's connect
            </p>
            <SocialButtons />
          </div>
        </div>
      </div>
    </nav>
  );
}
