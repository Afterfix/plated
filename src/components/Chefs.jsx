import { chefs } from '../data/content.js'
import SectionHeading from './SectionHeading.jsx'
import RiseTilt from './RiseTilt.jsx'
import Icon from './Icon.jsx'

// settle angles — cards fan out at slightly different tilts
const tilts = [-2.5, 2, -1.5, 2.5]

function ChefCard({ c }) {
  return (
    <article className="card-dashed group relative bg-white/60">
      <div className="relative overflow-hidden rounded-t-[24px]">
        <img src={c.photo} alt={c.name} loading="lazy" className="aspect-[3/4] w-full object-cover object-top" />

        {/* hover: red bio panel drops over the photo, tilted a few degrees off
            the card, description reversed out in white — fades on leave */}
        <div className="pointer-events-none absolute inset-0 flex flex-col justify-end rounded-[18px] bg-chili p-6 text-cream opacity-0 [transform:rotate(3deg)_translateY(10px)] transition-all duration-500 group-hover:opacity-100 group-hover:[transform:rotate(3deg)_translateY(0)]">
          <p className="text-sm leading-relaxed">{c.bio}</p>
        </div>
      </div>

      <div className="flex items-center justify-between gap-3 p-5">
        <div>
          <h3 className="font-display text-2xl uppercase leading-none text-chili">{c.name}</h3>
          <p className="mt-1 text-sm font-medium text-muted">{c.cuisine}</p>
        </div>
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-chili text-cream">
          <Icon name="arrowUpRight" className="h-4 w-4" strokeWidth={2.4} />
        </span>
      </div>
    </article>
  )
}

export default function Chefs() {
  return (
    <section id="best-chef" className="container-x scroll-mt-28 py-12 sm:py-14">
      <SectionHeading eyebrow={chefs.eyebrow} title={chefs.title} blurb={chefs.blurb} garnish={chefs.garnish} />

      <div className="mt-9 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {chefs.people.map((c, i) => (
          <RiseTilt key={i} from={i % 2 ? 10 : -10} settle={tilts[i]} delay={i * 120}>
            <ChefCard c={c} />
          </RiseTilt>
        ))}
      </div>
    </section>
  )
}
