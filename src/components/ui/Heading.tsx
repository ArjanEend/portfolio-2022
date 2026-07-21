import React from "react";

export interface HeadingProps {
  children: React.ReactNode;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  variant?: "default" | "section" | "sub-border";
  className?: string;
}

export default function Heading({
  children,
  level = 2,
  variant = "default",
  className = "",
}: HeadingProps) {
  // Determine component tag
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  let variantClasses = "";
  if (variant === "section") {
    // Styling for major sections like "What I Focus On", "Systems & Applications Built"
    variantClasses = "font-display font-black text-4xl sm:text-5xl text-strong mb-4 leading-none";
  } else if (variant === "sub-border") {
    // Sub-header with border bottom like "🎨 Frontend Platforms & Design Systems"
    variantClasses = "font-display font-black text-lg uppercase tracking-wider text-duck-beak border-b-4 border-black pb-2 mb-6 max-w-max";
  } else {
    // Default heading sizes matching the globals.css tags but customizable
    switch (level) {
      case 1:
        variantClasses = "font-display font-black text-strong leading-none";
        break;
      case 2:
        variantClasses = "font-display font-extrabold text-2xl sm:text-4xl md:text-5xl text-strong leading-tight";
        break;
      case 3:
        variantClasses = "font-display font-black text-2xl uppercase text-strong";
        break;
      case 4:
      default:
        variantClasses = "font-display font-bold text-xl sm:text-2xl text-strong";
        break;
    }
  }

  return (
    <Tag className={`${variantClasses} ${className}`}>
      {children}
    </Tag>
  );
}
