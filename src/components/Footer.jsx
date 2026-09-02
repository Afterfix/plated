import { footer, contact } from "../data/content.js";

const telHref = (p) => `tel:${p.replace(/[^\d+]/g, "")}`;

export default function Footer() {
  return (
    <footer className="stripes-red relative overflow-hidden text-cream">
      {/* ghosted wordmark behind, darker red, same speckled cut-out font */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-2 select-none text-center font-holey text-[26vw] uppercase leading-none text-black/15"
      >
        {footer.wordmark}
      </span>

      <div className="container-x relative py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-4">
            <span className="font-wordmark text-2xl font-black uppercase tracking-tight">
              {footer.wordmark}
            </span>
            <p className="max-w-xs text-sm text-cream/75">{footer.blurb}</p>
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
                      className="text-sm text-cream/75 transition-opacity hover:opacity-70"
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
          <div className="mt-12 border-t border-cream/15 pt-8">
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
                    <span className="flex shrink-0 items-center gap-1 text-xs text-sun">
                      ★ <span className="text-cream/80">{b.rating}</span>
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-cream/60">{b.area}</p>
                  {b.phone ? (
                    <a
                      href={telHref(b.phone)}
                      className="mt-2 inline-block text-xs font-semibold text-cream/90 transition-opacity hover:opacity-70"
                    >
                      {b.phone}
                    </a>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        ) : null}

        <p className="mt-12 text-center font-script text-6xl leading-none text-cream sm:text-8xl">
          {footer.welcome}
        </p>

        <div className="mt-10 flex flex-col items-center justify-between gap-2 border-t border-cream/15 pt-6 text-xs text-cream/70 sm:flex-row">
          <p>{footer.copyright}</p>
          <p>{footer.credit}</p>
        </div>
      </div>
    </footer>
  );
}
