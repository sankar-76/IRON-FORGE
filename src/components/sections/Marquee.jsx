import { MARQUEE_WORDS } from '@/data'

export default function Marquee() {
  return (
    <div className="bg-[#FF5000] py-4 overflow-hidden relative" aria-hidden="true">
      {/* Double the words so the loop is seamless */}
      <div className="marquee-wrapper">
        {[...MARQUEE_WORDS, ...MARQUEE_WORDS].map((word, i) => (
          <span
            key={i}
            className={`font-display text-black text-2xl tracking-widest mx-5 select-none ${
              word === '•' ? 'opacity-50' : ''
            }`}
          >
            {word}
          </span>
        ))}
      </div>
    </div>
  )
}
