import { Check, IndianRupee } from 'lucide-react'
import { PLANS } from '@/data'
import { useScrollReveal } from '@/hooks/useGSAP'
import SectionLabel from '@/components/ui/SectionLabel'

function PlanCard({ plan, index }) {
  return (
    <div
      className={`reveal opacity-0 rounded-xl p-8 relative hover-lift transition-all duration-300 ${
        plan.highlight
          ? 'bg-[#FF5000] border-2 border-[#FF6B1A] glow-brand md:scale-105'
          : 'bg-zinc-950 border border-zinc-800 hover:border-[#FF5000]/30'
      }`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      {/* Popular badge */}
      {plan.badge && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-black font-cond font-bold text-xs tracking-widest uppercase px-5 py-1.5 rounded-full whitespace-nowrap shadow-lg">
          {plan.badge}
        </div>
      )}

      {/* Plan name */}
      <div className={`font-cond font-bold text-sm tracking-[0.3em] uppercase mb-4 ${plan.highlight ? 'text-orange-100' : 'text-gray-600'}`}>
        {plan.name}
      </div>

      {/* Price — INR with rupee icon */}
      <div className="flex items-end gap-1 mb-7">
        <IndianRupee
          size={28}
          strokeWidth={2}
          className={`mb-2 flex-shrink-0 ${plan.highlight ? 'text-white/80' : 'text-gray-500'}`}
        />
        <span
          className="font-display leading-none text-white"
          style={{ fontSize: 'clamp(48px, 7vw, 68px)' }}
        >
          {plan.price.toLocaleString('en-IN')}
        </span>
        <span className={`font-cond text-sm pb-2 ml-1 ${plan.highlight ? 'text-orange-100' : 'text-gray-600'}`}>
          /{plan.period}
        </span>
      </div>

      {/* Divider */}
      <div className={`h-px mb-7 ${plan.highlight ? 'bg-white/20' : 'bg-zinc-800'}`} />

      {/* Features */}
      <ul className="space-y-3 mb-8">
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-3">
            <Check
              size={14}
              strokeWidth={2.5}
              className={`mt-0.5 flex-shrink-0 ${plan.highlight ? 'text-white' : 'text-[#FF5000]'}`}
            />
            <span className={`font-body text-sm leading-snug ${plan.highlight ? 'text-orange-50' : 'text-gray-400'}`}>
              {f}
            </span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <button
        className={`w-full font-cond font-bold tracking-widest text-sm uppercase py-4 rounded transition-all duration-200 ${
          plan.highlight
            ? 'bg-white text-[#FF5000] hover:bg-orange-50'
            : 'border border-[#FF5000]/40 text-[#FF5000] hover:bg-[#FF5000] hover:text-white hover:border-[#FF5000]'
        }`}
      >
        Get Started
      </button>
    </div>
  )
}

export default function Pricing() {
  const containerRef = useScrollReveal(
    '.reveal',
    { opacity: 0, y: 40 },
    { opacity: 1, y: 0, duration: 0.6 },
    0.12
  )

  return (
    <section id="pricing" className="py-24 md:py-32 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-60 pointer-events-none" />

      <div ref={containerRef} className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <div className="reveal opacity-0 text-center mb-16">
          <SectionLabel text="Simple Pricing" align="center" />
          <h2
            className="font-display text-white leading-none mb-4"
            style={{ fontSize: 'clamp(44px, 6vw, 80px)' }}
          >
            CHOOSE YOUR <span className="text-[#FF5000]">PLAN</span>
          </h2>
          <p className="font-body text-gray-600 text-sm max-w-md mx-auto">
            No lock-in contracts. Cancel anytime. All plans include a 7-day free trial.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto items-center">
          {PLANS.map((plan, i) => (
            <PlanCard key={plan.name} plan={plan} index={i} />
          ))}
        </div>

        {/* Guarantee note */}
        <div className="reveal opacity-0 flex items-center justify-center gap-6 mt-10">
          {['30-day money-back guarantee', 'No hidden fees', 'Cancel anytime'].map((note) => (
            <span key={note} className="flex items-center gap-1.5 font-cond text-xs tracking-widest uppercase text-gray-700">
              <Check size={11} strokeWidth={2.5} className="text-[#FF5000]" />
              {note}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}