import { motion } from 'framer-motion';
import { Server, Database } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden min-h-[90vh] flex items-center">
      {/* Background aura */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full blur-3xl bg-orange-500/30" />
        <div className="absolute top-32 -left-24 w-[28rem] h-[28rem] rounded-full blur-3xl bg-amber-300/20" />
      </div>

      {/* Hidden Leaf swirl watermark */}
      <svg
        aria-hidden
        className="absolute right-6 bottom-6 w-28 h-28 opacity-20 text-orange-400 rotate-12"
        viewBox="0 0 64 64"
        fill="currentColor"
      >
        <path d="M32 8c-9.941 0-18 8.059-18 18s8.059 18 18 18c4.418 0 8-3.582 8-8s-3.582-8-8-8c-2.209 0-4 1.791-4 4a4 4 0 1 0 4-4c-6.627 0-12 5.373-12 12s5.373 12 12 12c13.255 0 24-10.745 24-24S45.255 8 32 8z" />
      </svg>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-orange-500/10 text-orange-400 px-4 py-1 text-sm border border-orange-400/20">
            <Server className="w-4 h-4" /> Backend Ninja
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white">
            Believe it! I'm your next backend developer.
          </h1>
          <p className="text-base md:text-lg text-white/70 max-w-prose">
            I build resilient APIs, scalable services, and battle-tested data pipelines. My code is
            as reliable as a shinobi's oath — fast, secure, and maintainable.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="#projects" className="px-5 py-2.5 rounded-md bg-orange-500 text-white font-medium shadow hover:bg-orange-600 transition">
              View Projects
            </a>
            <a href="#contact" className="px-5 py-2.5 rounded-md border border-white/15 text-white/90 hover:bg-white/5 transition">
              Contact Me
            </a>
          </div>
          <div className="flex gap-6 pt-4 text-white/70">
            <div className="flex items-center gap-2">
              <Database className="w-5 h-5 text-amber-300" />
              <span>Databases</span>
            </div>
            <div className="flex items-center gap-2">
              <Server className="w-5 h-5 text-orange-300" />
              <span>APIs</span>
            </div>
          </div>
        </motion.div>

        {/* Shuriken tile */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative mx-auto md:mx-0"
        >
          <div className="relative w-full max-w-md aspect-square rounded-2xl bg-gradient-to-br from-neutral-900 to-neutral-800 border border-white/10 shadow-lg">
            <Shuriken className="absolute -top-6 -left-6 w-16 h-16 text-orange-400 rotate-12" />
            <Shuriken className="absolute -bottom-6 -right-6 w-16 h-16 text-amber-300 -rotate-12" />
            <div className="absolute inset-0 grid place-items-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, ease: 'linear', duration: 18 }}
                className="w-40 h-40"
              >
                <Shuriken className="w-full h-full text-orange-500/80" />
              </motion.div>
            </div>
            <div className="absolute inset-x-0 bottom-0 p-6">
              <h3 className="text-white font-semibold text-lg">Backend Specializations</h3>
              <p className="text-white/70 text-sm mt-1">
                FastAPI • Node • PostgreSQL • MongoDB • Redis • Docker • CI/CD
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Shuriken({ className = '' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M32 6l6.5 15.5L54 28l-15.5 6.5L32 50l-6.5-15.5L10 28l15.5-6.5L32 6zm0 12a6 6 0 100 12 6 6 0 000-12z" />
    </svg>
  );
}
