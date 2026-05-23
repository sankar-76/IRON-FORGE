import * as LucideIcons from "lucide-react";
import { PROGRAMS } from "@/data";
import { useScrollReveal } from "@/hooks/useGSAP";
import SectionLabel from "@/components/ui/SectionLabel";
import { Clock, BarChart2 } from "lucide-react";

function ProgramCard({ program, index }) {
  const Icon = LucideIcons[program.iconName] || LucideIcons.Dumbbell;

  return (
    <article
      className="reveal opacity-0 group bg-zinc-950 border border-zinc-900 rounded-xl p-7 hover-lift cursor-pointer relative overflow-hidden"
      style={{ transitionDelay: `${(index % 3) * 60}ms` }}
    >
      {/* Left accent bar */}
      <div className="absolute top-0 left-0 bottom-0 w-[3px] bg-[#FF5000] scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom rounded-l-xl" />

      {/* Header row */}
      <div className="flex items-start justify-between mb-5">
        <div className="w-12 h-12 rounded-lg bg-[#FF5000]/10 border border-[#FF5000]/20 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
          <Icon size={22} className="text-[#FF5000]" strokeWidth={1.8} />
        </div>
        <span className="tag-badge">{program.tag}</span>
      </div>

      {/* Title & desc */}
      <h3 className="font-cond font-bold text-xl tracking-wide text-white mb-2">
        {program.title}
      </h3>
      <p className="font-body text-gray-500 text-sm leading-relaxed mb-5">
        {program.desc}
      </p>

      {/* Meta */}
      <div className="flex items-center gap-5 border-t border-white/5 pt-4">
        <span className="flex items-center gap-1.5 font-cond text-xs tracking-widest uppercase text-gray-700">
          <Clock size={12} strokeWidth={2} className="text-gray-700" />
          {program.duration}
        </span>
        <span className="flex items-center gap-1.5 font-cond text-xs tracking-widest uppercase text-gray-700">
          <BarChart2 size={12} strokeWidth={2} className="text-gray-700" />
          {program.level}
        </span>
      </div>

      {/* Hover CTA */}
      <div className="mt-3 font-cond text-sm font-semibold tracking-wider text-[#FF5000] flex items-center gap-2 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300">
        Learn More <span>→</span>
      </div>
    </article>
  );
}

export default function Programs() {
  const containerRef = useScrollReveal(
    ".reveal",
    { opacity: 0, y: 50 },
    { opacity: 1, y: 0, duration: 0.6 },
    0.08,
  );

  return (
    <section id="programs" className="py-24 md:py-32 bg-black relative">
      <div ref={containerRef} className="max-w-7xl mx-auto px-6">
        <div className="reveal opacity-0 text-center mb-16">
          <SectionLabel text="What We Offer" align="center" />
          <h2
            className="font-display text-white leading-none"
            style={{ fontSize: "clamp(44px, 6vw, 80px)" }}
          >
            TRAINING <span className="text-[#FF5000]">PROGRAMS</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {PROGRAMS.map((program, i) => (
            <ProgramCard key={program.title} program={program} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
