"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

interface ProjectItemProps {
  title: string;
  info: string;
  backgroundImg: string;
  url: string;
  badge?: string;
  badgeColor?: string;
}

export default function ProjectItem({ 
  title, 
  backgroundImg, 
  url, 
  info,
  badge,
  badgeColor = "bg-duck-yellow"
}: ProjectItemProps) {
  const router = useRouter();
  const isExternal = url.startsWith("http");

  // Determine transition name for local subpages
  const isLocal = url.startsWith("/projects/");
  const slug = isLocal ? url.replace("/projects/", "") : "";
  const transitionName = slug ? `project-media-${slug}` : "";

  const handleTransitionClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (typeof document !== "undefined" && (document as any).startViewTransition) {
      (document as any).startViewTransition(() => {
        router.push(url);
      });
    } else {
      router.push(url);
    }
  };

  const ContentCard = () => (
    <div className="relative w-full h-[260px] border-[3px] border-black bg-white overflow-hidden group shadow-brutal hover:translate-x-[-3px] hover:translate-y-[-3px] hover:shadow-brutal-lg transition-all duration-200 cursor-pointer">
      {/* Media Container */}
      <div className="w-full h-full relative overflow-hidden bg-black">
        {backgroundImg.endsWith(".mp4") ? (
          <video 
            playsInline 
            muted 
            loop 
            autoPlay 
            src={backgroundImg} 
            className="w-full h-full object-cover opacity-90 transition-opacity duration-300 group-hover:opacity-10" 
            style={transitionName ? { ["viewTransitionName" as any]: transitionName } : undefined}
          />
        ) : (
          <img 
            src={backgroundImg} 
            alt={title} 
            className="w-full h-full object-cover opacity-95 transition-all duration-300 group-hover:scale-105 group-hover:opacity-10" 
            style={transitionName ? { ["viewTransitionName" as any]: transitionName } : undefined}
          />
        )}
      </div>

      {/* Badge sticker */}
      {badge && (
        <div className={`absolute top-3 right-3 border-2 border-black font-display font-black text-[10px] uppercase px-2.5 py-1 tracking-wider shadow-[2px_2px_0px_#000] z-20 ${badgeColor}`}>
          {badge}
        </div>
      )}

      {/* Details Slide Over */}
      <div className="absolute inset-0 flex flex-col justify-between p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-duck-blue/95 z-10 border-t-0">
        <div>
          <span className="font-display font-black text-xs uppercase tracking-widest text-duck-beak bg-white border-2 border-black px-2 py-0.5 shadow-[2px_2px_0px_#000]">
            {info}
          </span>
          <h3 className="font-display font-black text-2xl uppercase text-black leading-tight mt-4 translate-y-[10px] group-hover:translate-y-0 transition-transform duration-300 delay-75">
            {title}
          </h3>
        </div>
        
        <div className="border-[3px] border-black bg-white py-2.5 text-center font-display font-black uppercase text-sm tracking-wider text-black shadow-brutal hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-brutal-lg active:translate-x-0 active:translate-y-0 active:shadow-none transition-all duration-100">
          More Details ➜
        </div>
      </div>
    </div>
  );

  if (isExternal) {
    return (
      <a href={url} target="_blank" rel="noreferrer" className="block w-full">
        <ContentCard />
      </a>
    );
  }

  return (
    <Link href={url} onClick={handleTransitionClick} className="block w-full">
      <ContentCard />
    </Link>
  );
}
