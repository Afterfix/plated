import { brand, footer, contact } from "../data/content.js";

const telHref = (p) => `tel:${p.replace(/[^\d+]/g, "")}`;

export default function Footer() {
  return (
    <footer className="stripes-dark relative overflow-hidden text-white">
      {/* ghosted wordmark behind, faint gold, same speckled cut-out font */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-2 select-none text-center font-holey text-[26vw] uppercase leading-none text-gold/10"
      >
        {footer.ghostmark || footer.wordmark}
      </span>

      <div className="container-x relative py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <img
                src={brand.logo}
                alt="Saffron Mandi logo"
                className="h-12 w-12 shrink-0 rounded-full object-cover ring-2 ring-gold/30"
              />
              <span className="brand-wordmark text-3xl text-white sm:text-4xl">
              {footer.wordmark}
              </span>
            </div>
            <p className="max-w-xs text-sm text-white">{footer.blurb}</p>
          </div>

          {footer.columns.map((col) => (
            <div key={col.title}>
              <h3 className="font-display text-xl uppercase tracking-wide">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l, i) => (
                  <li key={i}>
                    <a
                      href={l.href}
                      className="text-sm text-white transition-opacity hover:opacity-70"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {contact.branches?.length ? (
          <div className="mt-12 border-t border-white/15 pt-8">
            <h3 className="font-display text-xl uppercase tracking-wide">
              Our branches
            </h3>
            <div className="menu-scroll mt-4 flex gap-3 overflow-x-auto pb-2">
              {contact.branches.map((b) => (
                <div
                  key={b.name}
                  className="min-w-[216px] shrink-0 rounded-2xl bg-cream/5 p-4 ring-1 ring-cream/10"
                >
                  <div className="flex items-center justify-between gap-2">
                    <p className="font-display text-lg uppercase leading-none">
                      {b.name}
                    </p>
                    {b.rating ? (
                      <span className="flex shrink-0 items-center gap-1 text-xs text-gold">
                        ★ <span className="text-white">{b.rating}</span>
                      </span>
                    ) : null}
                  </div>
                  <p className="mt-1 text-xs text-white">{b.area}</p>
                  {b.hours ? (
                    <p className="mt-1 text-xs text-white">{b.hours}</p>
                  ) : null}
                  {b.phone ? (
                    <a
                      href={telHref(b.phone)}
                      className="mt-2 inline-block text-xs font-semibold text-white transition-opacity hover:opacity-70"
                    >
                      {b.phone}
                    </a>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        ) : null}

        <p className="mt-12 text-center font-script text-6xl leading-none text-white sm:text-8xl">
          {footer.welcome}
        </p>

        <div className="mt-10 flex flex-col items-center justify-between gap-2 border-t border-white/15 pt-6 text-xs text-white sm:flex-row">
          <p>{footer.copyright}</p>
          <p>{footer.credit}</p>
        </div>
      </div>
    </footer>
  );
}
