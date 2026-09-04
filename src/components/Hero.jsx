import { useEffect, useState } from 'react'
import { hero } from '../data/content.js'

function HoleyWord({ text }) {
  const [play, setPlay] = useState(false)
  useEffect(() => {
    const t = setTimeout(() => setPlay(true), 140)
    return () => clearTimeout(t)
  }, [])
  return (
    <h1 className="hero-script-title text-cream">
      {text.split('').map((ch, i) => (
        <span key={i} className={`word ${play ? 'play' : ''}`} style={{ '--word-delay': `${i * 70}ms` }}>
          {ch}
        </span>
      ))}
    </h1>
  )
}

export default function Hero() {
  return (
    <section id="top" className="hero-bg relative text-cream">
      {/* clip layer for the bowl + floaters + type */}
      <div className="relative overflow-hidden">
        <div className="container-x relative flex min-h-[100svh] flex-col items-center justify-center pb-28 pt-28 text-center">
          {/* curry bowl — stays centred; slow constant spin (inner img) plus
              extra rotation driven by scroll (outer div) */}
          <div className="pointer-events-none absolute left-1/2 top-[92%] -translate-x-1/2 -translate-y-1/2">
            <div style={{ transform: 'rotate(var(--scroll-deg, 0deg))' }} className="will-change-transform">
              <img
                src={hero.bowl}
                alt=""
                aria-hidden="true"
                className="animate-spin-slowest w-[min(100vw,640px)] max-w-none drop-shadow-10xl"
                loading="eager"
              />
            </div>
          </div>

          {/* garnish images — desktop only; mobile hero is just type + image.
              idle up-down bob (inner img) + scroll parallax (outer span) */}
          {hero.floaters.map((f, i) => (
            <span
              key={i}
              aria-hidden="true"
              className={`pointer-events-none absolute hidden will-change-transform lg:block ${f.className}`}
              style={{
                transform: `${f.flip ? 'scaleX(-1) ' : ''}translateY(calc(var(--scroll-y, 0) * -0.28px))`,
              }}
            >
              <img
                src={f.src}
                alt=""
                loading="lazy"
                className={`animate-${f.anim} w-full drop-shadow-xl`}
                style={{ '--float-dur': f.dur, animationDelay: f.delay }}
              />
            </span>
          ))}

          <div className="relative z-10 -mt-2">
            <HoleyWord text={hero.title} />
          </div>

          <p className="hero-hello relative z-20 mt-[-0.12em] text-gold drop-shadow-[0_5px_0_rgba(0,0,0,0.4)]">
            {hero.hello}
          </p>

          <p className="relative z-10 mt-10 max-w-[22ch] font-display text-xl uppercase tracking-wide text-cream sm:mt-12 sm:text-4xl">
            {hero.sub}
          </p>
          <p className="relative z-10 mt-2 text-sm font-medium tracking-wide text-cream/70 sm:text-base">
            {hero.tags}
          </p>
        </div>
      </div>
    </section>
  )
}
