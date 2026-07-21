import React from "react";
import Link from "next/link";

export interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "accent" | "icon" | "unstyled";
  href?: string;
  onClick?: (e: any) => void;
  className?: string;
  disabled?: boolean;
  ariaLabel?: string;
  type?: "button" | "submit" | "reset";
  target?: string;
  rel?: string;
}

export default function Button({
  children,
  variant = "primary",
  href,
  onClick,
  className = "",
  disabled = false,
  ariaLabel,
  type = "button",
  target,
  rel,
}: ButtonProps) {
  // Focus ring class for WCAG compliance
  const focusClasses = "focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-black focus-visible:ring-offset-2";

  // Base styles mapping
  let baseClasses = "";
  if (variant === "primary") {
    baseClasses = "btn-brutal text-strong font-display font-black";
  } else if (variant === "secondary") {
    baseClasses = "btn-brutal-secondary text-strong font-display font-black";
  } else if (variant === "accent") {
    baseClasses = "btn-brutal-accent text-black font-display font-black";
  } else if (variant === "icon") {
    baseClasses = "border-[3px] border-black p-4 rounded-full shadow-brutal hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-brutal-lg active:translate-x-0 active:translate-y-0 active:shadow-none transition-all duration-100 cursor-pointer flex items-center justify-center";
  } else if (variant === "unstyled") {
    baseClasses = "";
  }

  const combinedClasses = `${baseClasses} ${focusClasses} ${className} ${disabled ? "opacity-50 cursor-not-allowed pointer-events-none" : ""}`;

  // Helper to determine if external link or hash link
  const isExternalOrHash = href && (href.startsWith("http") || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:"));

  if (href) {
    if (isExternalOrHash) {
      return (
        <a
          href={href}
          onClick={onClick}
          className={combinedClasses}
          aria-label={ariaLabel}
          target={target}
          rel={rel || (target === "_blank" ? "noreferrer" : undefined)}
        >
          {children}
        </a>
      );
    }

    return (
      <Link
        href={href}
        onClick={onClick}
        className={combinedClasses}
        aria-label={ariaLabel}
        target={target}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClasses}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
