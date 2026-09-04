import Reveal from './Reveal.jsx'

/**
 * Centered header used across the site:
 *   green sprout · red cursive eyebrow · green sprout
 *   GIANT HOLEY TITLE   (with two small food-garnish photos tucked over it)
 *   muted blurb
 */
export default function SectionHeading({
  eyebrow,
  title,
  blurb,
  garnish = [],
  tone = 'ink',
  titleClassName = '',
  className = '',
}) {
  const titleColor = tone === 'cream' ? 'text-cream' : 'text-ink'
  const blurbColor = tone === 'cream' ? 'text-cream/75' : 'text-ink'

  return (
    <div className={`flex flex-col items-center text-center ${className}`}>
      <Reveal className="flex items-center gap-3">
        
      </Reveal>

      <Reveal as="h2" delay={80} className={`holey-title relative mt-3 max-w-[18ch] ${titleColor} ${titleClassName}`}>
        {title}
        {garnish[0] ? (
          <img
            src={garnish[0]}
            alt=""
            aria-hidden="true"
            style={{ '--garnish-settle': '-12deg', '--garnish-delay': '150ms' }}
            className="garnish pointer-events-none absolute left-0 -top-5 w-9 object-contain sm:-left-9 sm:-top-9 sm:w-16"
          />
        ) : null}
        {garnish[1] ? (
          <img
            src={garnish[1]}
            alt=""
            aria-hidden="true"
            style={{ '--garnish-settle': '12deg', '--garnish-delay': '280ms' }}
            className="garnish pointer-events-none absolute -bottom-4 right-0 w-9 object-contain sm:-bottom-8 sm:-right-9 sm:w-16"
          />
        ) : null}
      </Reveal>

      {blurb ? (
        <Reveal as="p" delay={140} className={`mt-4 max-w-2xl text-base leading-relaxed sm:text-lg ${blurbColor}`}>
          {blurb}
        </Reveal>
      ) : null}
    </div>
  )
}
