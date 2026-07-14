"use client";

import { useEffect, useState } from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  const [wiping, setWiping] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setWiping(false);
    }, 400); // matches the globals.css slide-wipe duration
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {wiping && (
        <div className="fixed inset-0 bg-duck-beak z-[9999] animate-slide-wipe pointer-events-none" />
      )}
      <div className="page-transition">
        {children}
      </div>
    </>
  );
}
