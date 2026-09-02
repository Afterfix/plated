import { testimonials } from '../data/content.js'
import SectionHeading from './SectionHeading.jsx'
import Marquee from './Marquee.jsx'
import Icon, { Stars } from './Icon.jsx'

function ReviewCard({ r }) {
  return (
    <article className="flex w-[330px] flex-col gap-4 rounded-[24px] bg-ink p-7 text-cream sm:w-[400px]">
      <Icon name="quote" className="h-8 w-8 text-chili" />
      <p className="text-sm leading-relaxed text-cream/85">{r.quote}</p>
      <div className="mt-auto flex items-center gap-3 border-t border-cream/10 pt-4">
        <img src={r.avatar} alt={r.name} loading="lazy" className="h-11 w-11 rounded-full object-cover" />
        <div className="flex-1">
          <p className="font-display text-xl uppercase leading-none">{r.name}</p>
          <p className="text-xs text-cream/60">{r.role}</p>
        </div>
        <Stars className="h-3.5 w-3.5" />
      </div>
    </article>
  )
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="scroll-mt-28 py-12 sm:py-14">
      <div className="container-x">
        <SectionHeading eyebrow={testimonials.eyebrow} title={testimonials.title} blurb={testimonials.blurb} garnish={testimonials.garnish} />
      </div>

      <div className="mask-fade-x mt-9">
        <Marquee duration={52} gap="gap-4">
          {testimonials.reviews.map((r, i) => <ReviewCard key={i} r={r} />)}
        </Marquee>
      </div>

      {/* big outlined display words, same right-to-left drift, edge-faded */}
      <div className="mask-fade-x mt-8 overflow-hidden">
        <Marquee duration={38} gap="gap-12">
          {testimonials.ratings.map((w, i) => (
            <span key={i} className="word-stroke font-holey text-6xl uppercase sm:text-8xl">
              {w}
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  )
}
