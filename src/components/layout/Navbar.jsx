import { useState } from 'react'
import { NAV_LINKS } from '@/data'
import { useScrolled } from '@/hooks/useScrolled'
import Button from '@/components/ui/Button'

function scrollTo(id) {
  const el = document.getElementById(id.toLowerCase())
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const scrolled = useScrolled(40)

  const handleNav = (link) => {
    scrollTo(link)
    setOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black/95 backdrop-blur-md border-b border-white/5 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => { e.preventDefault(); scrollTo('home') }}
          className="font-display text-3xl tracking-widest select-none"
        >
          IRON<span className="text-[#FF5000]">FORGE</span>
        </a>

        {/* Desktop links */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <button
              key={link}
              onClick={() => handleNav(link)}
              className="nav-link font-cond text-sm font-semibold tracking-widest uppercase text-gray-400 hover:text-white transition-colors duration-200"
            >
              {link}
            </button>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Button onClick={() => scrollTo('contact')}>Join Now</Button>
        </div>

        {/* Mobile hamburger */}
        <button
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col justify-center gap-[5px] w-10 h-10"
        >
          <span
            className={`block w-6 h-[2px] bg-white transition-all duration-300 origin-center ${
              open ? 'rotate-45 translate-y-[7px]' : ''
            }`}
          />
          <span
            className={`block w-6 h-[2px] bg-white transition-all duration-300 ${
              open ? 'opacity-0 scale-x-0' : ''
            }`}
          />
          <span
            className={`block w-6 h-[2px] bg-white transition-all duration-300 origin-center ${
              open ? '-rotate-45 -translate-y-[7px]' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="bg-zinc-950/98 border-t border-white/5 px-6 py-5 flex flex-col gap-1">
          {NAV_LINKS.map((link) => (
            <button
              key={link}
              onClick={() => handleNav(link)}
              className="font-cond text-base font-semibold tracking-widest uppercase text-gray-400 hover:text-[#FF5000] text-left py-2.5 border-b border-white/5 last:border-0 transition-colors"
            >
              {link}
            </button>
          ))}
          <Button className="mt-4 w-full text-center" onClick={() => handleNav('Contact')}>
            Join Now
          </Button>
        </nav>
      </div>
    </header>
  )
}
