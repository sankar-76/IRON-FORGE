import { ABOUT_FEATURES, ABOUT_STATS } from '@/data'
import { useScrollReveal } from '@/hooks/useGSAP'
import SectionLabel from '@/components/ui/SectionLabel'

export default function About() {
  const containerRef = useScrollReveal(
    '.reveal',
    { opacity: 0, y: 40 },
    { opacity: 1, y: 0, duration: 0.7 },
    0.1
  )

  return (
    <section id="about" className="py-24 md:py-32 bg-zinc-950 relative overflow-hidden">
      {/* Ghost watermark */}
      <div
        aria-hidden
        className="absolute right-0 top-0 bottom-0 flex items-center pointer-events-none select-none overflow-hidden"
      >
        <span
          className="font-display text-white/[0.025] leading-none"
          style={{ fontSize: 'clamp(180px, 30vw, 400px)' }}
        >
          FIT
        </span>
      </div>

      <div ref={containerRef} className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">
          {/* Left — copy */}
          <div>
            <div className="reveal opacity-0">
              <SectionLabel text="About IronForge" />
              <h2
                className="font-display text-white leading-none mb-6"
                style={{ fontSize: 'clamp(44px, 6vw, 82px)' }}
              >
                WHERE IRON
                <br />
                MEETS <span className="text-[#FF5000]">WILL</span>
              </h2>
              <p className="font-body text-gray-400 text-lg leading-relaxed mb-5">
                Founded in 2012, IronForge has transformed over 12,000 lives across three
                flagship locations. We're not just a gym — we're a movement built on
                science, discipline, and relentless progress.
              </p>
              <p className="font-body text-gray-600 leading-relaxed mb-8">
                Our state-of-the-art facility houses cutting-edge equipment, a full
                recovery suite, and dedicated spaces for every type of athlete — from
                first-timer to elite competitor.
              </p>
            </div>

            {/* Feature tags */}
            <div className="reveal opacity-0 flex flex-wrap gap-3">
              {ABOUT_FEATURES.map((f) => (
                <span
                  key={f}
                  className="font-cond text-xs font-semibold tracking-widest uppercase border border-[#FF5000]/20 text-[#FF5000]/70 px-4 py-2 rounded-sm bg-[#FF5000]/5 hover:bg-[#FF5000]/10 hover:border-[#FF5000]/40 transition-colors cursor-default"
                >
                  {f}
                </span>
              ))}
            </div>
          </div>

          {/* Right — stat grid */}
          <div className="grid grid-cols-2 gap-4">
            {ABOUT_STATS.map((item) => (
              <div
                key={item.label}
                className={`reveal opacity-0 rounded-xl p-6 border ${
                  item.accent
                    ? 'bg-[#FF5000]/5 border-[#FF5000]/20'
                    : 'bg-zinc-900 border-zinc-800'
                }`}
              >
                <div
                  className={`font-display leading-none mb-2 ${
                    item.accent ? 'text-[#FF5000]' : 'text-white'
                  }`}
                  style={{ fontSize: 'clamp(40px, 5vw, 60px)' }}
                >
                  {item.value}
                </div>
                <div className="font-cond text-xs text-gray-600 tracking-widest uppercase">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
