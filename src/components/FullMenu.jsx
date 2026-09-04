import { menu } from '../data/content.js'
import SectionHeading from './SectionHeading.jsx'
import Reveal from './Reveal.jsx'
import DishItem from './DishItem.jsx'

export default function FullMenu() {
  // past 6 dishes the list scrolls inside the section instead of growing it
  const scrollable = menu.items.length > 6

  return (
    <section id="menu" className="container-x scroll-mt-28 py-12 sm:py-14">
      <SectionHeading eyebrow={menu.eyebrow} title={menu.title} blurb={menu.blurb} garnish={menu.garnish} />

      <div
        className={`mx-auto mt-9 grid max-w-5xl gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3 ${
          scrollable ? 'menu-scroll max-h-[44vh] overflow-y-auto overscroll-contain pr-3' : ''
        }`}
      >
        {menu.items.map((item, i) => (
          <Reveal key={i} variant={i % 2 ? 'right' : 'left'} delay={(i % 3) * 80}>
            <DishItem dish={item} layout="row" />
          </Reveal>
        ))}
      </div>

      <div className="mt-8 text-center">
        <a href="#contact" className="btn-primary">Reserve your table</a>
        {menu.note ? <p className="mt-4 text-sm text-ink">{menu.note}</p> : null}
      </div>
    </section>
  )
}
