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

  // In-page anchor scrolling. On desktop the middle sections live inside one
  // pinned, internally-scrolling pane, so jump the page to pin that pane and
  // then scroll inside it to the target section.
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

      const scroller = el.closest('.panel-scroll')
      const internal = scroller && scroller.scrollHeight - scroller.clientHeight > 4

      if (internal) {
        const panel = scroller.closest('.panel')
        const prev = panel.style.position
        panel.style.position = 'static'
        const panelTop = panel.getBoundingClientRect().top + window.scrollY
        panel.style.position = prev
        const secTop =
          el.getBoundingClientRect().top -
          scroller.getBoundingClientRect().top +
          scroller.scrollTop
        requestAnimationFrame(() => {
          window.scrollTo({ top: Math.max(0, panelTop - 2), behavior: 'smooth' })
          scroller.scrollTo({ top: Math.max(0, secTop - 6), behavior: 'smooth' })
        })
      } else {
        let top = 0
        for (let n = el; n; n = n.offsetParent) top += n.offsetTop
        requestAnimationFrame(() =>
          window.scrollTo({ top: Math.max(0, top - 2), behavior: 'smooth' }),
        )
      }
      history.replaceState(null, '', id === 'top' ? location.pathname : `#${id}`)
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])

  return (
    <>
      <div className="relative overflow-x-clip">
        <Navbar />

        {/* Hero — pins; the page block below rises up and layers over it */}
        <div className="panel panel-hero bg-chili" style={{ zIndex: 1 }}>
          <div className="panel-scroll">
            <Hero />
          </div>
        </div>

        {/* One continuous page, layered over the hero */}
        <div className="panel panel-cover bg-cream" style={{ zIndex: 2 }}>
          <div className="panel-scroll">
            {middle.map((C, i) => (
              <C key={i} />
            ))}
          </div>
        </div>

        {/* Footer — layered over the page */}
        <div className="panel-cover relative bg-chili" style={{ zIndex: 3 }}>
          <Footer />
        </div>
      </div>

      <FloatingActions />
    </>
  )
}
