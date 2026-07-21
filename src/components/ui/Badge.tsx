import React from "react";

export interface BadgeProps {
  children: React.ReactNode;
  color?: "yellow" | "blue" | "coral" | "purple" | "green" | "white";
  isSticker?: boolean;
  className?: string;
}

export default function Badge({
  children,
  color = "white",
  isSticker = false,
  className = "",
}: BadgeProps) {
  let badgeColorClass = "";
  switch (color) {
    case "yellow":
      badgeColorClass = "badge-brutal-yellow";
      break;
    case "blue":
      badgeColorClass = "badge-brutal-blue";
      break;
    case "coral":
      badgeColorClass = "badge-brutal-coral";
      break;
    case "purple":
      badgeColorClass = "badge-brutal-purple";
      break;
    case "green":
      badgeColorClass = "badge-brutal-green";
      break;
    case "white":
    default:
      badgeColorClass = "badge-brutal";
      break;
  }

  // If it's a sticker (absolute decoration on homepage), it uses sticker classes instead of small round badges.
  const baseClass = isSticker
    ? "border-[3px] border-black font-display font-black text-sm uppercase px-4 py-2 shadow-brutal hover:scale-105 transition-all duration-150"
    : `${badgeColorClass}`;

  // Map sticker background color overrides since badge classes are optimized for badges
  let stickerBgColor = "";
  if (isSticker) {
    switch (color) {
      case "yellow":
        stickerBgColor = "bg-duck-yellow text-black";
        break;
      case "blue":
        stickerBgColor = "bg-duck-blue text-strong";
        break;
      case "coral":
        stickerBgColor = "bg-duck-beak text-strong";
        break;
      case "purple":
        stickerBgColor = "bg-duck-purple text-strong";
        break;
      case "green":
        stickerBgColor = "bg-duck-green text-strong";
        break;
      case "white":
      default:
        stickerBgColor = "bg-white text-strong";
        break;
    }
  }

  return (
    <div className={`${baseClass} ${stickerBgColor} ${className}`}>
      {children}
    </div>
  );
}
