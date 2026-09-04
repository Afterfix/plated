import { popular } from "../data/content.js";
import SectionHeading from "./SectionHeading.jsx";
import Reveal from "./Reveal.jsx";
import DishItem from "./DishItem.jsx";
import CircularText from "./CircularText.jsx";

export default function PopularDishes() {
  return (
    <section
      id="popular-taste"
      className="container-x relative scroll-mt-28 pb-12 pt-28 sm:pb-14 sm:pt-32"
    >
      <CircularText
        text="SCROLL DOWN · SCROLL DOWN · SCROLL DOWN ·"
        className="absolute left-1/2 top-0 z-30 h-40 w-40 -translate-x-1/2 -translate-y-1/2 sm:h-48 sm:w-48 lg:-translate-y-[77%]"
      />
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
  );
}
