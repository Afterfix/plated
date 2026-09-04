import { useEffect, useRef, useState } from 'react'
import { brand, navLinks } from '../data/content.js'

// `brand.logo` is null until the owner supplies a mark — the wordmark stands
// alone until then rather than carrying someone else's logo.
const Wordmark = ({ className = '' }) => (
  <a href="#top" className={`flex items-center gap-2 sm:gap-2.5 ${className}`}>
    {brand.logo ? (
      <img
        src={brand.logo}
        alt=""
        className="h-8 w-8 shrink-0 rounded-full object-cover ring-2 ring-gold/30 sm:h-9 sm:w-9"
      />
    ) : null}
    <span className="brand-wordmark text-xl sm:text-2xl">
      {brand.name}
    </span>
  </a>
)

const Arrow = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14m-6-6 6 6-6 6" />
  </svg>
)

export default function Navbar() {
  const [collapsed, setCollapsed] = useState(false)
  const [overHero, setOverHero] = useState(true)
  const [open, setOpen] = useState(false)
  const stopTimer = useRef(null)

  useEffect(() => {
    let last = window.scrollY
    const onScroll = () => {
      const y = window.scrollY
      setOverHero(y < window.innerHeight * 0.8)
      if (y > 140 && y > last + 2) setCollapsed(true)
      last = y
      clearTimeout(stopTimer.current)
      stopTimer.current = setTimeout(() => setCollapsed(false), 240)
    }
    setOverHero(window.scrollY < window.innerHeight * 0.8)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      clearTimeout(stopTimer.current)
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* On mobile the bar is always visible; only desktop collapses on scroll-down. */}
      <div
        className={`origin-top max-h-20 overflow-hidden opacity-100 transition-[max-height,opacity] duration-300 ease-out ${
          collapsed ? 'lg:max-h-0 lg:opacity-0' : ''
        }`}
      >
        <div className={`bg-transparent ${overHero ? 'text-cream' : 'text-ink'}`}>
          <nav className="container-x flex h-16 items-center justify-between gap-3 sm:h-[74px] sm:gap-4">
            <Wordmark />

            <ul className="hidden items-center gap-8 lg:flex">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className={`font-wordmark text-[15px] font-bold transition-opacity hover:opacity-70 ${overHero ? 'text-cream/90' : 'text-ink'}`}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-2 sm:gap-3">
              <a href="#contact" className="btn-cream hidden !py-2.5 !text-sm sm:inline-flex sm:!py-3 sm:!text-base">
                Book a table
              </a>
              <button
                type="button"
                aria-label="Menu"
                aria-expanded={open}
                onClick={() => setOpen(true)}
                className={`grid h-10 w-10 shrink-0 place-items-center rounded-full border sm:h-11 sm:w-11 lg:hidden ${overHero ? 'border-cream/30' : 'border-ink/30'}`}
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                  <path d="M4 7h16M4 12h16M4 17h16" />
                </svg>
              </button>
            </div>
          </nav>
        </div>
      </div>

      {/* mobile drawer */}
      <div
        className={`fixed inset-0 z-50 flex flex-col bg-ink text-cream transition-opacity duration-300 lg:hidden ${
          open ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <div className="container-x flex h-16 shrink-0 items-center justify-between sm:h-[74px]">
          <Wordmark />
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="grid h-10 w-10 place-items-center rounded-full bg-cream/10 text-cream transition hover:bg-cream/20 sm:h-11 sm:w-11"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              <path d="M6 6l12 12M18 6 6 18" />
            </svg>
          </button>
        </div>

        <div className="container-x flex min-h-0 flex-1 flex-col overflow-y-auto pb-8">
          <nav className="mt-2 rounded-[26px] bg-cream/[0.05] px-4 py-1 ring-1 ring-cream/10">
            {navLinks.map((l, i) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`block px-2 py-4 font-display text-3xl uppercase tracking-wide text-cream/85 transition-colors hover:text-cream ${
                  i < navLinks.length - 1 ? 'border-b border-cream/10' : ''
                }`}
              >
                {l.label}
              </a>
            ))}
          </nav>

          <a href="#contact" onClick={() => setOpen(false)} className="btn-primary mt-5">
            Book a table <Arrow />
          </a>
          <p className="mt-4 text-center text-sm text-cream/60">
            {brand.phone} · {brand.email}
          </p>
        </div>
      </div>
    </header>
  )
}
