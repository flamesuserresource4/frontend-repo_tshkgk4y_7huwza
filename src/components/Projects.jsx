import { Code2, Lock, Cloud } from 'lucide-react';

const projects = [
  {
    title: 'Rasengan API',
    icon: <Code2 className="w-5 h-5" />,
    desc: 'High-speed REST API with FastAPI, async I/O, and caching that hits like a Rasengan.',
    stack: ['FastAPI', 'MongoDB', 'Redis', 'Docker'],
    link: '#',
  },
  {
    title: 'Hidden Leaf Auth',
    icon: <Lock className="w-5 h-5" />,
    desc: 'JWT-based authentication and RBAC service hardened with OWASP best practices.',
    stack: ['Node', 'PostgreSQL', 'Prisma', 'JWT'],
    link: '#',
  },
  {
    title: 'Kage Pipeline',
    icon: <Cloud className="w-5 h-5" />,
    desc: 'Event-driven data pipeline with retries, DLQs, and observability built-in.',
    stack: ['Python', 'Kafka', 'Spark', 'Prometheus'],
    link: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Featured Projects</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group relative rounded-2xl border border-white/10 bg-gradient-to-br from-neutral-900 to-neutral-800 p-6 hover:border-orange-400/30 transition"
            >
              <div className="flex items-center gap-3 text-orange-300">
                <div className="w-10 h-10 grid place-items-center rounded-lg bg-orange-500/10 border border-orange-400/20">
                  {p.icon}
                </div>
                <h3 className="text-lg font-semibold text-white">{p.title}</h3>
              </div>
              <p className="mt-3 text-sm text-white/70">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span key={s} className="px-2.5 py-1 rounded-md text-xs bg-white/5 border border-white/10 text-white/70">
                    {s}
                  </span>
                ))}
              </div>
              <a
                href={p.link}
                className="mt-5 inline-flex text-sm text-orange-300 hover:text-orange-200"
              >
                View details →
              </a>
              {/* Decorative kunai */}
              <Kunai className="absolute -right-3 -bottom-3 w-16 h-16 text-orange-400/20 rotate-12" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Kunai({ className = '' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M52 4a8 8 0 100 16 8 8 0 000-16zm-6.343 13.657l-9.9 9.9-19.8 29.7 29.7-19.8 9.9-9.9-9.9-9.9z" />
    </svg>
  );
}
