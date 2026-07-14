"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { SocialButtons } from "./SocialButtons";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  // Navigation Links
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/#about" },
    { label: "Skills", href: "/#skills" },
    { label: "Projects", href: "/#projects" },
    { label: "Contact", href: "/#contact" },
  ];

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full h-20 bg-bg border-b-4 border-black z-[10000] transition-all duration-200">
      <div className="max-w-[1240px] mx-auto h-full px-6 flex justify-between items-center">
        {/* Logo and Brand */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="border-[3px] border-black rounded-lg bg-white overflow-hidden shadow-brutal p-1 w-12 h-12 flex items-center justify-center transition-all duration-150 group-hover:translate-x-[-2px] group-hover:translate-y-[-2px] group-hover:shadow-brutal-lg">
            <img 
              src="/eendgames.png" 
              alt="EEND Games" 
              className="object-contain max-w-full max-h-full"
            />
          </div>
          <span className="font-display font-black uppercase tracking-tight text-xl sm:text-2xl text-strong group-hover:text-duck-beak transition-all duration-150">
            EEND Games
          </span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.label}>
                <Link 
                  href={link.href}
                  className={`relative font-display font-bold uppercase tracking-wider text-sm border-2 border-transparent px-3 py-1.5 transition-all duration-150 hover:border-black hover:bg-duck-yellow hover:text-black hover:shadow-brutal ${
                    isActive ? "bg-duck-blue border-black shadow-brutal text-black" : "text-strong"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Mobile Menu Button */}
        <div 
          onClick={handleMenuToggle} 
          className="md:hidden border-[3px] border-black p-2.5 bg-white shadow-brutal active:translate-x-0 active:translate-y-0 active:shadow-none hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-brutal-lg transition-all duration-100 cursor-pointer"
        >
          {menuOpen ? <AiOutlineClose size={22} /> : <AiOutlineMenu size={22} />}
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
                <div className="border-[3px] border-black rounded-lg bg-white p-1 w-10 h-10 flex items-center justify-center">
                  <img src="/eendgames.png" alt="EEND Games" className="object-contain" />
                </div>
                <span className="font-display font-black uppercase text-lg text-strong">EEND Games</span>
              </div>
              <div 
                onClick={handleMenuToggle} 
                className="border-[3px] border-black p-2 bg-white rounded-full cursor-pointer shadow-brutal hover:scale-105 transition-all duration-100"
              >
                <AiOutlineClose size={18} />
              </div>
            </div>

            <div className="border-b-4 border-black my-6 pb-4">
              <p className="font-bold text-sm tracking-wide uppercase text-duck-beak">
                Bringing code & play to life
              </p>
            </div>

            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block font-display font-black uppercase text-xl border-[3px] border-black p-3 bg-white shadow-brutal hover:bg-duck-yellow hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-brutal-lg transition-all duration-100"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-display font-bold uppercase tracking-wider text-xs text-center border-b-2 border-black pb-2 mb-2">
              Let's connect
            </p>
            <SocialButtons />
          </div>
        </div>
      </div>
    </nav>
  );
}
