import type { Metadata } from "next";
import { Space_Grotesk, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "EEND Games | Portfolio & Game Studio",
  description: "Hybrid portfolio and indie game studio site of Arjan Cordia, building playful and polished games.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} ${plusJakarta.variable} font-sans bg-bg`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
