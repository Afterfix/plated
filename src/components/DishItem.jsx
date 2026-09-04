
function Badge({ label }) {
  if (!label) return null;
  const hot = label.toLowerCase() === "hot";
  return (
    <span
      className={`absolute left-1 top-1 grid h-11 w-11 place-items-center rounded-full font-display text-m uppercase leading-none ${hot ? "bg-onyx text-gold" : "bg-gold text-onyx"}`}
    >
      {label}
    </span>
  );
}

/**
 * A dish: a round bowl photo sitting straight on the background (no card),
 * name in Bebas, price in red, grey description.
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
      {/* only shows once a dish carries a real rating — no invented scores */}
      {showRating && dish.rating ? (
        <span className="mb-2 inline-flex items-center gap-1.5 rounded-lg bg-onyx px-2.5 py-1 text-cream">
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
        <p className="mt-1 font-display text-2xl leading-none text-gold-deep sm:text-3xl">
          {dish.price}
        </p>
      ) : null}
      <p className="mt-2 max-w-[26ch] text-sm leading-relaxed text-ink">
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
