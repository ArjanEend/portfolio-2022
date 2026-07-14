import Home from "@/components/Home";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function IndexPage() {
  return (
    <div id="top" className="min-h-screen flex flex-col justify-between overflow-x-hidden">
      {/* Main Content Sections */}
      <main className="flex-grow">
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="w-full bg-black py-8 border-t-4 border-black text-center">
        <p className="font-display font-bold text-xs uppercase tracking-widest text-duck-yellow">
          © {new Date().getFullYear()} EEND GAMES. All Rights Reserved. Built with Neo-Brutalist Pride.
        </p>
      </footer>
    </div>
  );
}
