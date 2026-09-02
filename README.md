# Plated — Restaurant Template

A single-page food & restaurant site rebuilt as **Vite + React + Tailwind CSS**,
matched to the "Plated" Framer template — its design tokens, type scale, section
structure and imagery were reverse-engineered from the live site
(`Plated.framer.website`).

## Run

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # static output in dist/
npm run preview
```

Node 18+.

## Design tokens (from the original)

| Token        | Value     | Use                                         |
| ------------ | --------- | ------------------------------------------- |
| `cream`      | `#EFEEE9` | page background                             |
| `ink`        | `#121111` | text + dark surfaces (testimonial cards)    |
| `chili`      | `#D43539` | **primary accent** — buttons, eyebrows, Hot |
| `chili.dark` | `#B2271B` | chef bio overlay                            |
| `leaf`       | `#00942A` | "New" badge                                 |
| `sun`        | `#FFE102` | star ratings                                |
| `muted`      | `#636363` | secondary text                              |

Fonts: **Bebas Neue** (display headings), **Inter** (body, 18px base),
**Roboto 900** (the `Plated` wordmark). All from Google Fonts in `index.html`.

## Structure

`src/data/content.js` holds every string + all image URLs. Sections, in order:
Navbar · Hero (animated headline + rotating "scroll down" disc) · Popular dishes
(auto-scroll ticker) · Restaurant · Full menu (Flavour Picks) · About (rotating
badge) · Testimonials (two tickers) · Why choose us · Chefs (hover bio) · Contact ·
Footer. Nav links are in-page anchors (`#popular-taste`, `#why-choose`, `#best-chef`…).

Components: `Reveal` (scroll-in), `SectionHeading`, `Marquee`, `CircleText`,
`DishCard`, `Icon` in `src/components/`.

## Images

The template ships pointing at Plated's own CDN (`framerusercontent.com`) via the
`fimg()` helper in `content.js`, so it looks like the original out of the box.
Replace those with your own photos before launch — plated dishes read best as
**transparent PNGs** (they sit on the card's cream tile).

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
