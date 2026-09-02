import { restaurant } from "../data/content.js";
import SectionHeading from "./SectionHeading.jsx";
import Reveal from "./Reveal.jsx";
import FlipCarousel from "./FlipCarousel.jsx";

export default function Restaurant() {
  return (
    <section
      id="restaurant"
      className="container-x scroll-mt-28 py-12 sm:py-14"
    >
      <SectionHeading
        eyebrow={restaurant.eyebrow}
        title={restaurant.title}
        garnish={restaurant.garnish}
      />

      <Reveal delay={100}>
        <FlipCarousel
          images={restaurant.images}
          interval={1500}
          className="mt-8 h-[280px] sm:h-[380px]"
        />
      </Reveal>

      <Reveal
        as="p"
        delay={140}
        className="mx-auto mt-6 max-w-2xl text-center text-base leading-relaxed text-muted sm:text-lg"
      >
        {restaurant.blurb}
      </Reveal>
    </section>
  );
}
