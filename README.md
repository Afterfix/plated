# Plated — Restaurant Template

A single-page food & restaurant site rebuilt as **Vite + React + Tailwind CSS**,
matched to the "Plated" Framer template — its design tokens, type scale, section
structure and imagery were reverse-engineered from the live site
(`Plated.framer.website`).

## This build: Saffron Mandi

The template is currently dressed as **Saffron Mandi**, an Arabic mandi chain
with four branches in Kerala (Mannarkkad, Ottappalam, Alanallur, Kottayam).

Every fact on the page was compiled on 3 Sep 2026 from **public listings only** —
Google Business Profiles, Zomato/District and Instagram. Nothing came from the
business, so confirm it before launch. Blocking gaps, in order of how much they
hurt:

1. **Menu prices** — no public price list is readable, so the menu shows none.
2. **Photography** — every image is template placeholder art. The brand's own
   Instagram grid is the only legitimate source; get originals or written
   permission. Google/Zomato photos are contributor-owned, don't reuse them.
3. **Testimonials and team** — placeholder people, clearly labelled in
   `content.js`. Replace with real, permissioned reviews and staff.
4. ~~Logo files~~ — `saffron-logo.jpg` is in, wired to `brand.logo`, and the
   palette is keyed to it. A vector/transparent version would still be better
   than a JPEG with a baked-in bronze disc.
5. Alanallur's phone and hours (unpublished); the Ottappalam phone
   (…425 vs …426) and hours conflict between listings.
6. Email address and a WhatsApp ordering number.

Copy choices worth keeping: it leans on the rice, the charcoal method and the
portion sizes — all well supported by public reviews — and promises nothing
about speed, which is the most common complaint. Per-dish star ratings and
branch rating badges render only when the data carries them, and no Google
scores are reprinted on the page or in the schema markup.

Branch NAP data lives in `contact.branches` in `src/data/content.js`; the
matching `Restaurant` schema graph is inline in `index.html` and has to be
edited alongside it.

## Run

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # static output in dist/
npm run preview
```

Node 18+.

## Design tokens — black and gold

Keyed to the Saffron Mandi mark (`src/assets/saffron-logo.jpg`), which is gold
lettering on a bronze roundel.

| Token       | Value     | Use                                              |
| ----------- | --------- | ------------------------------------------------ |
| `cream`     | `#F1EDE3` | page background (warm, so gold doesn't read grey) |
| `onyx`      | `#0A0908` | black surfaces — hero, navbar, footer, badges     |
| `ink`       | `#121111` | body text + dark cards                            |
| `gold`      | `#D4A343` | **primary accent on black** — buttons, stars, rings |
| `gold.light`| `#EBD08A` | highlight + hover on dark                         |
| `gold.deep` | `#8C6A1E` | accents on cream — **large text only**            |
| `muted`     | `#636363` | secondary text                                    |

**The one rule that matters:** `gold` is a mid-tone. It's brilliant on black
(8.3:1 against `onyx`) but only reaches ~2:1 on cream, so it must never be used
for type on a light background. That's what `gold.deep` is for, and even that
lands at 4.2:1 — fine for the large stuff it's used on (script eyebrows, prices,
chef and branch names) but not for body copy. Body copy stays `ink`/`muted`.

Fonts: **Bebas Neue** (display headings), **Inter** (body, 18px base),
**Roboto 900** (the wordmark). All from Google Fonts in `index.html`.

## Structure

`src/data/content.js` holds every string + all image URLs. Sections, in order:
Navbar · Hero (animated headline + rotating "scroll down" disc) · Popular dishes
(auto-scroll ticker) · Restaurant · Full menu (Flavour Picks) · About (rotating
badge) · Testimonials (two tickers) · Why choose us · Chefs (hover bio) · Contact ·
Footer. Nav links are in-page anchors (`#popular-taste`, `#why-choose`, `#best-chef`…).

Components: `Reveal` (scroll-in), `SectionHeading`, `Marquee`, `CircleText`,
`DishCard`, `Icon` in `src/components/`.

## Images

All images are bundled from `src/assets` and imported at the top of
`content.js` — swap the files or the imports for your own photos. `DishItem`
crops dish art to a circle, so any aspect ratio works there; only `hero.bowl`
needs a **transparent PNG**, since it spins uncropped behind the wordmark.

## Customising

- Copy / menu / chefs / reviews → `src/data/content.js`
- Colours / fonts → `tailwind.config.js`
- Type scale, button + card shapes → the `@layer components` block in `src/index.css`
- Contact form → `Contact.jsx` `handleSubmit` (currently a demo thank-you); point it
  at Formspree / Resend / an API route.

`prefers-reduced-motion` disables the tickers, spins and reveals.

## Not matched

The Framer editor link is private and the live site renders via JS, so this is
built from the extracted CSS tokens, font presets, DOM and class names — not a
pixel diff. Spacing and some proportions are a close interpretation, not exact.
