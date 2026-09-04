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

// Everything between the hero and the footer is one continuous page.
const middle = [
  PopularDishes,
  About,
  Restaurant,
  FullMenu,
  Testimonials,
  WhyChoose,
  Chefs,
  Contact,
]

export default function App() {
  // scroll-linked CSS vars (dish-plate + hero-bowl rotation, hero parallax)
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

  // In-page anchor scrolling. `offsetTop` gives an element's natural layout
  // position (it ignores sticky offsets), so summing the offsetParent chain
  // lands on the right spot whatever is currently pinned.
  useEffect(() => {
    const onClick = (e) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey) return
      const a = e.target.closest?.('a[href^="#"]')
      if (!a) return
      const id = a.getAttribute('href').slice(1)
      const el = id && document.getElementById(id)
      if (!el) return
      e.preventDefault()
      document.body.style.overflow = '' // release any mobile-drawer scroll lock

      let top = 0
      for (let n = el; n; n = n.offsetParent) top += n.offsetTop
      requestAnimationFrame(() =>
        window.scrollTo({ top: Math.max(0, top - 2), behavior: 'smooth' }),
      )
      history.replaceState(null, '', id === 'top' ? location.pathname : `#${id}`)
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])

  return (
    <>
      <div className="relative">
        <Navbar />

        {/* Hero — pins; the page block below rises up and layers over it */}
        <div className="panel panel-hero bg-onyx" style={{ zIndex: 1 }}>
          <div className="panel-scroll">
            <Hero />
          </div>
        </div>

        {/* One continuous page — layers over the hero, and (once you've scrolled
            all the way through it) sticks so the footer can rise over it */}
        <div className="page-block panel-cover bg-cream text-ink" style={{ zIndex: 2 }}>
          {middle.map((C, i) => (
            <C key={i} />
          ))}
        </div>

        {/* Footer — layers over the end of the page block */}
        <div className="panel-cover page-footer relative bg-onyx text-white" style={{ zIndex: 3 }}>
          <Footer />
        </div>
      </div>

      <FloatingActions />
    </>
  )
}
