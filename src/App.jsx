import { useEffect } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import PopularDishes from './components/PopularDishes.jsx'
import Restaurant from './components/Restaurant.jsx'
import FullMenu from './components/FullMenu.jsx'
import About from './components/About.jsx'
import Testimonials from './components/Testimonials.jsx'
import WhyChoose from './components/WhyChoose.jsx'
import Chefs from './components/Chefs.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import FloatingActions from './components/FloatingActions.jsx'

// Each section is a "panel": on desktop it pins to the top of the viewport
// while the next panel rises up and layers over it (rounded top + shadow).
// Sections are sized to fit one screen so all their content shows first.
const panels = [
  { Component: Hero, bg: 'bg-chili', cover: false, hero: true },
  { Component: PopularDishes, bg: 'bg-cream', cover: true, overhang: true },
  { Component: About, bg: 'bg-white', cover: true },
  { Component: Restaurant, bg: 'bg-white', cover: true },
  { Component: FullMenu, bg: 'bg-cream', cover: true },
  { Component: Testimonials, bg: 'bg-cream', cover: true },
  { Component: WhyChoose, bg: 'bg-white', cover: true },
  { Component: Chefs, bg: 'bg-cream', cover: true },
  { Component: Contact, bg: 'bg-white', cover: true },
]

export default function App() {
  // scroll-linked helpers exposed as CSS vars:
  //   --scroll-deg : rotation for the round dish plates + hero bowl
  //   --scroll-y   : raw scroll px, used for hero garnish parallax
  useEffect(() => {
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    if (reduce) return
    const root = document.documentElement
    let raf = 0
    const apply = () => {
      const y = window.scrollY
      root.style.setProperty('--scroll-deg', `${y * 0.12}deg`)
      root.style.setProperty('--scroll-y', `${y}`)
      raf = 0
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(apply)
    }
    apply()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  // In-page anchor scrolling. The sticky "panel" stack means a target section
  // is often still pinned at the top of the viewport (just covered), so the
  // native hash jump barely moves. Compute the panel's *natural* position by
  // briefly neutralising its sticky, then scroll there manually.
  useEffect(() => {
    const onClick = (e) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey) return
      const a = e.target.closest?.('a[href^="#"]')
      if (!a) return
      const id = a.getAttribute('href').slice(1)
      const el = id && document.getElementById(id)
      if (!el) return
      e.preventDefault()

      const panel = el.closest('.panel') || el
      const prev = panel.style.position
      panel.style.position = 'static' // same layout as sticky, minus the pin
      const top = panel.getBoundingClientRect().top + window.scrollY
      panel.style.position = prev

      // show the target section from its top (reset any inner scroll)
      el.closest('.panel-scroll')?.scrollTo({ top: 0 })

      // a menu link may have just closed the mobile drawer (which locks body
      // scroll) — clear the lock, then scroll on the next frame
      document.body.style.overflow = ''
      const target = Math.max(0, top - 2)
      requestAnimationFrame(() => window.scrollTo({ top: target, behavior: 'smooth' }))
      history.replaceState(null, '', id === 'top' ? location.pathname : `#${id}`)
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])

  return (
    <>
      <div className="relative overflow-x-clip">
        <Navbar />

        {panels.map(({ Component, bg, cover, hero, overhang }, i) => (
          <div
            key={i}
            className={`panel ${bg} ${cover ? 'panel-cover' : ''} ${hero ? 'panel-hero' : ''} ${overhang ? 'panel-overhang' : ''}`}
            style={{ zIndex: i + 1 }}
          >
            <div className="panel-scroll">
              <Component />
            </div>
          </div>
        ))}

        <div className="panel-cover relative bg-chili" style={{ zIndex: panels.length + 1 }}>
          <Footer />
        </div>
      </div>

      {/* outside the layout wrapper so nothing can turn its `fixed` into `absolute` */}
      <FloatingActions />
    </>
  )
}
