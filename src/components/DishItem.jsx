import { Stars } from "./Icon.jsx";

function Badge({ label }) {
  if (!label) return null;
  const hot = label.toLowerCase() === "hot";
  return (
    <span
      className={`absolute left-1 top-1 grid h-11 w-11 place-items-center rounded-full font-display text-m uppercase leading-none text-cream ${hot ? "bg-chili" : "bg-leaf"}`}
    >
      {label}
    </span>
  );
}

/**
 * A dish the Plated way: a round bowl photo sitting straight on the
 * background (no card), name in Bebas, price in red, grey description.
 * `layout="stack"` = photo above text (Popular row);
 * `layout="row"` = photo beside text (menu grid).
 */
export default function DishItem({
  dish,
  showRating = false,
  layout = "stack",
  className = "",
}) {
  const Photo = (
    <div className="relative shrink-0">
      <Badge label={dish.badge} />
      <img
        src={dish.image}
        alt={dish.name}
        loading="lazy"
        style={{ transform: "rotate(var(--scroll-deg, 0deg))" }}
        className={
          layout === "row"
            ? "h-28 w-28 rounded-full object-cover will-change-transform sm:h-32 sm:w-32"
            : "aspect-square w-full rounded-full object-cover will-change-transform"
        }
      />
    </div>
  );

  const Text = (
    <div
      className={
        layout === "row"
          ? "min-w-0 flex-1"
          : "mt-4 flex flex-col items-center text-center"
      }
    >
      {showRating ? (
        <span className="mb-2 inline-flex items-center gap-1.5 rounded-lg bg-ink px-2.5 py-1 text-cream">
          <Stars className="h-3 w-3" />
          <span className="font-display text-sm leading-none">
            {dish.rating}
          </span>
        </span>
      ) : null}
      <div
        className={`flex items-baseline gap-2.5 ${layout === "stack" ? "justify-center" : ""}`}
      >
        <h3 className="font-display text-2xl uppercase leading-none sm:text-3xl">
          {dish.name}
        </h3>
      </div>
      {dish.price ? (
        <p className="mt-1 font-display text-2xl leading-none text-chili sm:text-3xl">
          {dish.price}
        </p>
      ) : null}
      <p className="mt-2 max-w-[26ch] text-sm leading-relaxed text-muted">
        {dish.desc}
      </p>
    </div>
  );

  return layout === "row" ? (
    <article className={`flex items-center gap-5 ${className}`}>
      {Photo}
      {Text}
    </article>
  ) : (
    <article className={`flex flex-col items-center ${className}`}>
      {Photo}
      {Text}
    </article>
  );
}
