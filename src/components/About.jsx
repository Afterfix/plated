import { about } from "../data/content.js";
import Reveal from "./Reveal.jsx";
import Sprout from "./Sprout.jsx";

export default function About() {
  return (
    <section id="about" className="container-x scroll-mt-28 py-12 sm:py-14">
      <div className="grid items-center gap-14 lg:grid-cols-2">
        <Reveal variant="left" className="relative mx-auto max-w-md lg:mx-0">
          <img
            src={about.image}
            alt="A signature Plated dish"
            loading="lazy"
            className="aspect-square w-full rounded-full object-cover"
          />
          {/* solid red disc with dashed yellow ring */}
          <div className="absolute -bottom-2 right-2 grid h-32 w-32 place-items-center rounded-full border-[3px] border-dashed border-sun bg-cream p-1.5 sm:h-36 sm:w-36">
            <div className="grid h-full w-full place-items-center rounded-full bg-chili text-center text-cream">
              <span className="font-display text-xl uppercase leading-none sm:text-2xl">
                {about.ring[0]}
                <br />
                {about.ring[1]}
              </span>
            </div>
          </div>
        </Reveal>

        <Reveal variant="right" delay={120}>
          <span className="flex items-center gap-3">
            <Sprout />
            <span className="eyebrow">{about.eyebrow}</span>
            <Sprout flip />
          </span>
          <h2 className="holey-title mt-3 max-w-[12ch]">{about.title}</h2>
          <p className="mt-6 text-base leading-relaxed text-muted sm:text-lg">
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
