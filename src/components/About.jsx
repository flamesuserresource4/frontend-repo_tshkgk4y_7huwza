import { Shield, Rocket } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="relative py-20">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-start gap-6">
          <div className="shrink-0 w-14 h-14 rounded-lg bg-orange-500/10 border border-orange-400/20 grid place-items-center">
            <Shield className="w-7 h-7 text-orange-400" />
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-white">About Me</h2>
            <p className="text-white/70 max-w-prose">
              I'm a backend-focused developer who crafts reliable, secure systems. I love clean
              architecture, clear contracts, and well-instrumented services. When I'm not optimizing
              queries or containerizing apps, I'm mastering new jutsu in distributed systems.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {['Python','FastAPI','Node.js','TypeScript','PostgreSQL','MongoDB','Redis','Docker','Kubernetes','AWS'].map((tag) => (
                <span key={tag} className="px-3 py-1 text-sm rounded-full bg-white/5 border border-white/10 text-white/80">
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-3 text-amber-300/90">
              <Rocket className="w-5 h-5" />
              <span className="text-sm">Always shipping, always improving.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
