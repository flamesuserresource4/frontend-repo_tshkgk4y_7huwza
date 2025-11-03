import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white selection:bg-orange-500/30">
      {/* Top nav */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/70 border-b border-white/10">
        <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
          <a href="#home" className="font-extrabold tracking-tight text-white">
            <span className="text-orange-400">忍</span> Backend Portfolio
          </a>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-white/70">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
        </div>
      </header>

      {/* Main content */}
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>

      {/* Footer with Naruto flair */}
      <footer className="py-10 border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/60 text-sm">© {new Date().getFullYear()} Your Name. Made with chakra and caffeine.</p>
          <div className="text-white/50 text-sm">🍥 🦊 🌀 Believe it!</div>
        </div>
      </footer>
    </div>
  );
}

export default App;
