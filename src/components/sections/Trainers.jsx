import { TRAINERS } from '@/data'
import { useScrollReveal } from '@/hooks/useGSAP'
import SectionLabel from '@/components/ui/SectionLabel'

function TrainerCard({ trainer }) {
  return (
    <article className="reveal opacity-0 group rounded-xl overflow-hidden hover-lift cursor-pointer">
      {/* Avatar area */}
      <div className={`bg-gradient-to-br ${trainer.gradient} h-64 flex flex-col items-center justify-center relative overflow-hidden`}>
        {/* Initials circle */}
        <div className="w-20 h-20 rounded-full bg-white/10 border border-white/20 flex items-center justify-center font-display text-3xl text-white/80 mb-3 group-hover:scale-110 transition-transform duration-300">
          {trainer.initials}
        </div>
        {/* Client count badge */}
        <div className="font-cond text-xs tracking-widest uppercase text-white/40 bg-black/20 px-3 py-1 rounded-full">
          {trainer.clients}+ clients
        </div>
        {/* Overlay tint on hover */}
        <div className="absolute inset-0 bg-[#FF5000]/0 group-hover:bg-[#FF5000]/10 transition-colors duration-400" />
      </div>

      {/* Info area */}
      <div className="bg-zinc-900 border border-zinc-800 border-t-0 p-5 rounded-b-xl">
        <div className="font-cond font-bold text-lg text-white tracking-wide leading-tight">
          {trainer.name}
        </div>
        <div className="font-cond text-sm text-[#FF5000] tracking-widest uppercase mt-0.5 mb-4">
          {trainer.role}
        </div>

        {/* Certifications */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {trainer.certifications.map((cert) => (
            <span
              key={cert}
              className="font-cond text-[10px] tracking-wider uppercase text-gray-600 bg-zinc-800 border border-zinc-700 px-2 py-1 rounded"
            >
              {cert}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between pt-3 border-t border-zinc-800">
          <span className="font-body text-xs text-gray-700">{trainer.experience} experience</span>
          <span className="font-cond text-xs tracking-widest uppercase text-gray-600 bg-zinc-800 px-3 py-1 rounded-full">
            {trainer.speciality}
          </span>
        </div>
      </div>
    </article>
  )
}

export default function Trainers() {
  const containerRef = useScrollReveal(
    '.reveal',
    { opacity: 0, scale: 0.92, y: 30 },
    { opacity: 1, scale: 1, y: 0, duration: 0.55 },
    0.1
  )

  return (
    <section id="trainers" className="py-24 md:py-32 bg-zinc-950 relative">
      <div ref={containerRef} className="max-w-7xl mx-auto px-6">
        {/* Heading row */}
        <div className="reveal opacity-0 flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <SectionLabel text="Expert Team" />
            <h2
              className="font-display text-white leading-none"
              style={{ fontSize: 'clamp(44px, 6vw, 80px)' }}
            >
              MEET THE <span className="text-[#FF5000]">COACHES</span>
            </h2>
          </div>
          <p className="font-body text-gray-600 max-w-xs leading-relaxed text-sm">
            World-class coaches who have competed, won, and now dedicate themselves
            entirely to your transformation.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {TRAINERS.map((trainer) => (
            <TrainerCard key={trainer.name} trainer={trainer} />
          ))}
        </div>
      </div>
    </section>
  )
}
