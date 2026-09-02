import { popular } from '../data/content.js'
import SectionHeading from './SectionHeading.jsx'
import Reveal from './Reveal.jsx'
import DishItem from './DishItem.jsx'

export default function PopularDishes() {
  return (
    <section id="popular-taste" className="container-x relative scroll-mt-28 py-12 sm:py-14">
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
