import React from "react";

export interface AvatarProps {
  src: string;
  alt: string;
  variant?: "default" | "about";
  badgeText?: string;
  className?: string;
}

export default function Avatar({
  src,
  alt,
  variant = "default",
  badgeText = "🏛️ UWV Design System Eng.",
  className = "",
}: AvatarProps) {
  if (variant === "about") {
    return (
      <div className={`relative group max-w-[280px] w-full ${className}`}>
        {/* Flat shadow */}
        <div className="absolute inset-0 bg-black translate-x-3 translate-y-3 rotate-[1deg] group-hover:translate-x-4 group-hover:translate-y-4 transition-transform duration-200"></div>
        {/* Card contents */}
        <div className="relative border-[4px] border-black bg-bg p-3 rotate-[-2deg] group-hover:rotate-0 transition-transform duration-200">
          <div className="border-[3px] border-black overflow-hidden bg-white mb-3">
            <img 
              src={src} 
              alt={alt} 
              className="object-cover w-full h-auto aspect-square hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="text-center font-display font-black uppercase text-xs tracking-widest text-strong bg-duck-yellow border-2 border-black py-2 shadow-[2px_2px_0px_#000]">
            {badgeText}
          </div>
        </div>
      </div>
    );
  }

  // Default homepage variant
  return (
    <div className={`relative group mb-8 ${className}`}>
      <div className="absolute inset-0 bg-black rounded-3xl translate-x-2 translate-y-2 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform duration-150"></div>
      <div className="relative border-[4px] border-black bg-white rounded-3xl p-2 w-44 h-44 sm:w-52 sm:h-52 flex items-center justify-center transition-all duration-150 group-hover:scale-[1.02] overflow-hidden">
        <img
          src={src}
          alt={alt}
          className="object-cover w-full h-full rounded-2xl"
        />
      </div>
    </div>
  );
}
