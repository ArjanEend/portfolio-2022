import React from "react";

export interface CardProps {
  children: React.ReactNode;
  isInteractive?: boolean;
  className?: string;
  as?: "div" | "section" | "article" | "aside";
}

export default function Card({
  children,
  isInteractive = false,
  className = "",
  as = "div",
}: CardProps) {
  const Component = as;

  const baseClasses = isInteractive
    ? "card-brutal"
    : "border-[3px] border-black p-6 bg-white shadow-brutal";

  return (
    <Component className={`${baseClasses} ${className}`}>
      {children}
    </Component>
  );
}
