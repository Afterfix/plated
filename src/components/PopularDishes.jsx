import { popular, hero } from '../data/content.js'
import SectionHeading from './SectionHeading.jsx'
import Reveal from './Reveal.jsx'
import DishItem from './DishItem.jsx'
import CircleText from './CircleText.jsx'

export default function PopularDishes() {
  return (
    <section
      id="popular-taste"
      className="container-x relative scroll-mt-28 py-12 sm:py-14 lg:pt-32"
    >
      {/* SCROLL DOWN disc — desktop only; overhangs the seam and rides up with
          the section as it covers the hero */}
      <div className="pointer-events-none absolute left-1/2 top-0 z-30 hidden h-[176px] w-[176px] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-sun sm:h-[216px] sm:w-[216px] lg:grid">
        <CircleText text={hero.scrollText} size={196} color="#121111" fontSize={10}>
          <span className="grid h-11 w-11 place-items-center rounded-full bg-ink text-sun">
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 5v14M6 13l6 6 6-6" />
            </svg>
          </span>
        </CircleText>
      </div>

      <SectionHeading
        eyebrow={popular.eyebrow}
        title={popular.title}
        blurb={popular.blurb}
        garnish={popular.garnish}
      />

      {/* dishes drop in one after another from above */}
      <div className="mt-9 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
        {popular.dishes.map((dish, i) => (
          <Reveal key={i} variant="down" delay={i * 160}>
            <DishItem dish={dish} showRating layout="stack" />
          </Reveal>
        ))}
      </div>
    </section>
  )
}
