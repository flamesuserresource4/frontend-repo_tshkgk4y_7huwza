import { Github, Linkedin, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-neutral-900 to-neutral-800">
          <div className="p-8 md:p-10 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">Let's team up</h2>
              <p className="mt-3 text-white/70">
                Ready to ship something legendary? Whether it's scaling APIs or hardening systems,
                I'm all in. Summon me through any of the channels below.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row gap-3">
              <ContactLink Icon={Mail} label="Email" href="mailto:your.email@example.com" accent="bg-orange-500/10 text-orange-300 border-orange-400/20" />
              <ContactLink Icon={Github} label="GitHub" href="https://github.com/yourhandle" />
              <ContactLink Icon={Linkedin} label="LinkedIn" href="https://www.linkedin.com/in/yourhandle" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactLink({ Icon, label, href, accent }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`flex-1 inline-flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white/80 hover:bg-white/[0.08] hover:text-white transition ${accent || ''}`}
    >
      <span className="inline-flex items-center gap-3">
        <Icon className="w-5 h-5" /> {label}
      </span>
      <span className="text-xs text-white/60">Open →</span>
    </a>
  );
}
