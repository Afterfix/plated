import { whyChoose } from '../data/content.js'
import SectionHeading from './SectionHeading.jsx'
import RiseTilt from './RiseTilt.jsx'
import Icon from './Icon.jsx'

const froms = [-8, 7, -6, 8, -7, 6]

export default function WhyChoose() {
  return (
    <section id="why-choose" className="container-x scroll-mt-28 py-12 sm:py-14">
      <SectionHeading eyebrow={whyChoose.eyebrow} title={whyChoose.title} blurb={whyChoose.blurb} garnish={whyChoose.garnish} />

      <div className="mx-auto mt-9 grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {whyChoose.features.map((f, i) => (
          <RiseTilt key={i} from={froms[i]} settle={0} delay={(i % 3) * 90}>
            <div className="card-dashed flex h-full items-center gap-5 p-6">
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl text-chili">
                <Icon name={f.icon} className="h-8 w-8" />
              </span>
              <span className="h-12 w-px shrink-0 bg-chili/25" />
              <div>
                <h3 className="font-display text-2xl uppercase leading-tight">{f.title}</h3>
                <p className="mt-1 text-sm text-muted">{f.desc}</p>
              </div>
            </div>
          </RiseTilt>
        ))}
      </div>
    </section>
  )
}
