import { about } from "../data/content.js";
import Reveal from "./Reveal.jsx";

export default function About() {
  return (
    <section id="about" className="container-x scroll-mt-28 py-12 sm:py-14">
      <div className="grid items-center gap-14 lg:grid-cols-2">
        <Reveal variant="left" className="relative mx-auto max-w-md lg:mx-0">
          <img
            src={about.image}
            alt="Mandhi rice, steamed under the meat in the charcoal pit"
            loading="lazy"
            className="aspect-square w-full rounded-full object-cover"
          />
          {/* solid red disc with dashed yellow ring */}
          <div className="absolute -bottom-2 right-2 grid h-32 w-32 place-items-center rounded-full border-[3px] border-dashed border-gold bg-cream p-1.5 sm:h-36 sm:w-36">
            <div className="grid h-full w-full place-items-center rounded-full bg-onyx text-center text-gold">
              <span className="font-display text-xl uppercase leading-none sm:text-2xl">
                {about.ring[0]}
                <br />
                {about.ring[1]}
              </span>
            </div>
          </div>
        </Reveal>

        <Reveal variant="right" delay={120}>
          {about.eyebrow ? (
            <span className="flex items-center gap-2 sm:gap-3">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-4 w-4 sm:h-5 sm:w-5 text-[#28a745]"
                aria-hidden="true"
              >
                <path d="M12 21c-1-3-3-5.5-5-7-2.5-1.8-5-2-5-2s1.5 3.5 4 4.5c2 1 4 2.5 5 4.5zm1-1.5c.8-1.8 2.5-3.2 4.2-4 2.2-1 4.8-1.5 4.8-1.5s-1.5 2.8-3.5 3.8c-1.8.8-3.8 1.4-4.5 3.2z" />
              </svg>
              <span className="eyebrow">{about.eyebrow}</span>
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-4 w-4 sm:h-5 sm:w-5 text-[#28a745] -scale-x-100"
                aria-hidden="true"
              >
                <path d="M12 21c-1-3-3-5.5-5-7-2.5-1.8-5-2-5-2s1.5 3.5 4 4.5c2 1 4 2.5 5 4.5zm1-1.5c.8-1.8 2.5-3.2 4.2-4 2.2-1 4.8-1.5 4.8-1.5s-1.5 2.8-3.5 3.8c-1.8.8-3.8 1.4-4.5 3.2z" />
              </svg>
            </span>
          ) : null}
          <h2 className="holey-title mt-3 max-w-[12ch]">{about.title}</h2>
          <p className="mt-6 text-base leading-relaxed text-ink sm:text-lg">
            {about.blurb}
          </p>
          <a href="#best-chef" className="btn-ink mt-8 w-fit">
            Meet the team
          </a>
        </Reveal>
      </div>
    </section>
  );
}
