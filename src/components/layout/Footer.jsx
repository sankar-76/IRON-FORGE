import { NAV_LINKS } from '@/data'

function scrollTo(id) {
  const el = document.getElementById(id.toLowerCase())
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

const SOCIALS = [
  { label: 'Instagram', href: '#' },
  { label: 'Twitter',   href: '#' },
  { label: 'YouTube',   href: '#' },
  { label: 'Facebook',  href: '#' },
]

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/5">
      {/* Top strip */}
      <div className="max-w-7xl mx-auto px-6 py-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="lg:col-span-2">
          <div className="font-display text-3xl tracking-widest mb-4">
            IRON<span className="text-[#FF5000]">FORGE</span>
          </div>
          <p className="font-body text-sm text-gray-600 leading-relaxed max-w-xs">
            World-class training, elite coaches, and a community that pushes you
            beyond what you thought possible.
          </p>
          <div className="flex gap-4 mt-6">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="font-cond text-xs tracking-widest uppercase text-gray-600 hover:text-[#FF5000] transition-colors border border-white/10 hover:border-[#FF5000]/40 rounded px-3 py-2"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="font-cond text-xs font-bold tracking-[0.3em] uppercase text-gray-600 mb-5">
            Navigation
          </h4>
          <ul className="space-y-3">
            {NAV_LINKS.map((link) => (
              <li key={link}>
                <button
                  onClick={() => scrollTo(link)}
                  className="font-body text-sm text-gray-500 hover:text-white transition-colors"
                >
                  {link}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-cond text-xs font-bold tracking-[0.3em] uppercase text-gray-600 mb-5">
            Contact
          </h4>
          <ul className="space-y-3 text-sm text-gray-500">
            <li>123 Iron Avenue</li>
            <li>Downtown District</li>
            <li className="text-[#FF5000]">info@ironforge.gym</li>
            <li>+1 (800) IRON-GYM</li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5 py-5 px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-cond tracking-widest uppercase text-gray-700">
          <span>© 2026 IronForge Gym. All rights reserved.</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gray-400 transition-colors">Privacy</a>
            <a href="#" className="hover:text-gray-400 transition-colors">Terms</a>
            <a href="#" className="hover:text-gray-400 transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
