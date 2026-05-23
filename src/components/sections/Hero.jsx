import { useRef } from 'react'
import { STATS } from '@/data'
import { useHeroAnimation } from '@/hooks/useGSAP'
import Button from '@/components/ui/Button'

function scrollTo(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

export default function Hero() {
  const eyebrowRef  = useRef(null)
  const titleRef    = useRef(null)
  const subtitleRef = useRef(null)
  const ctaRef      = useRef(null)
  const statsRef    = useRef(null)

  useHeroAnimation({
    eyebrow:  eyebrowRef.current  ? eyebrowRef.current  : '.hero-eyebrow',
    title:    titleRef.current    ? titleRef.current    : '.hero-title',
    subtitle: subtitleRef.current ? subtitleRef.current : '.hero-subtitle',
    cta:      ctaRef.current      ? ctaRef.current      : '.hero-cta',
    stats:    statsRef.current    ? statsRef.current    : '.hero-stat',
  })

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-grid hero-bg overflow-hidden"
    >
      {/* Decorative ring — top right */}
      <div
        aria-hidden
        className="absolute top-10 right-[-120px] w-[600px] h-[600px] rounded-full border-[80px] border-[#FF5000]/5 pointer-events-none"
      />
      {/* Decorative ring — bottom left */}
      <div
        aria-hidden
        className="absolute bottom-[-100px] left-[-120px] w-[400px] h-[400px] rounded-full border-[60px] border-[#FF5000]/5 pointer-events-none"
      />
      {/* Vertical accent line */}
      <div
        aria-hidden
        className="absolute top-1/2 right-8 md:right-20 -translate-y-1/2 w-px h-52 bg-gradient-to-b from-transparent via-[#FF5000]/30 to-transparent pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-6 pt-32 pb-20 w-full relative z-10">
        {/* Eyebrow */}
        <div ref={eyebrowRef} className="hero-eyebrow opacity-0 flex items-center gap-3 mb-6">
          <span className="w-8 h-px bg-[#FF5000]" />
          <span className="font-cond text-[#FF5000] text-sm font-semibold tracking-[0.3em] uppercase">
            No Excuses. Just Results.
          </span>
        </div>

        {/* Title */}
        <h1
          ref={titleRef}
          className="hero-title opacity-0 font-display text-white leading-none mb-6"
          style={{ fontSize: 'clamp(68px, 12vw, 160px)' }}
        >
          FORGE YOUR
          <br />
          <span className="text-[#FF5000]">LIMIT</span>LESS
        </h1>

        {/* Subtitle */}
        <p
          ref={subtitleRef}
          className="hero-subtitle opacity-0 font-body text-gray-400 text-lg md:text-xl max-w-xl leading-relaxed mb-10"
        >
          World-class training, elite coaches, and a community that pushes you
          beyond what you thought possible.
        </p>

        {/* CTAs */}
        <div ref={ctaRef} className="hero-cta opacity-0 flex flex-wrap gap-4 mb-20">
          <Button onClick={() => scrollTo('pricing')}>
            Start Free Trial
          </Button>
          <Button variant="outline" onClick={() => scrollTo('programs')}>
            Explore Programs →
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-white/10 pt-10">
          {STATS.map((stat) => (
            <div key={stat.label} className="hero-stat opacity-0">
              <div className="font-display text-[#FF5000]" style={{ fontSize: 'clamp(36px, 4vw, 52px)' }}>
                {stat.value}
              </div>
              <div className="font-cond text-xs text-gray-600 tracking-widest uppercase mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
