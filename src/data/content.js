// ---------------------------------------------------------------------------
// Saffron Mandi — every string and image the site renders. Edit here to change
// the site; no copy lives inside the components.
//
// PROVENANCE: compiled 3 Sep 2026 from public listings only (Google Business
// Profiles, Zomato/District, Instagram @saffron_mandi). Nothing below came from
// the business. Confirm before launch — open items:
//   • MENU PRICES — no public price list is readable, so no prices are shown.
//   • Alanallur phone + opening hours — not published anywhere.
//   • Ottappalam phone (…425 on District vs …426 on Google) and hours conflict.
//   • Email address and a WhatsApp ordering number.
//   • Whether the Kondotty "Saffron Mandhi" outlet belongs to this chain.
//   • IMAGES — every photo below is placeholder art shipped with the template.
//     The brand's own Instagram grid is the only legitimate source available;
//     get originals or written permission before going live.
//   • TESTIMONIALS + TEAM — placeholder people. See the notes on those blocks.
// ---------------------------------------------------------------------------

import logoMark from "../assets/saffron-logo.jpg";

import coriander from "../assets/coriander-leaves.avif";
import chiliLeft from "../assets/left-chilly.avif";
import chiliRight from "../assets/right-chilly.avif";
import vepp from "../assets/vepp.avif";

// Dish art — matched to dish names
import imgChickenMandi from "../assets/chicken mandi.png";
import imgBeefMandi from "../assets/beef mandi.png";
import imgMuttonMandi from "../assets/motton mandi.png";
import imgKanthariMandi from "../assets/Kanthari mandi.png";
import imgPeriPeriMandi from "../assets/periperi mandi.png";
import imgCreamy from "../assets/creamy.png";
import imgHoneyAlfaham from "../assets/honey alfaham.png";
import imgBroasted from "../assets/broasted.png";
import imgButtuam from "../assets/buttuam.png";
import imgFriedChicken from "../assets/fried chicken.png";
import imgLampShawarma from "../assets/lamp shawarma.png";
import imgAlfaham from "../assets/alfahm mandi.png";
import shaway from "../assets/shaway.png";
import infused from "../assets/infused.png";
import imgRice from "../assets/pulav.avif";
import imgMasala from "../assets/makhani.avif";
import imgPlatter from "../assets/food1.avif";
import imgGrill from "../assets/jamaican.jpg";

import restaurant1 from "../assets/restaurant 1.png";
import restaurant2 from "../assets/restaurant 2.png";
import restaurant3 from "../assets/restaurant 3.png";

import avatarOlivia from "../assets/olivia.avif";
import avatarDaniel from "../assets/danial.avif";
import avatarSophia from "../assets/sophia.avif";
import avatarEthan from "../assets/ethan.avif";
import avatarMia from "../assets/mia.avif";
import avatarJames from "../assets/james.avif";

import chef1 from "../assets/cook1.avif";
import chef2 from "../assets/cook2.avif";
import chef3 from "../assets/cook3.avif";
import chef4 from "../assets/cook4.avif";

import contactChef from "../assets/contact-us.avif";

export const brand = {
  name: "Saffron Mandi",
  tagline: "Experience the true Arabic Mandi",
  // The gold-on-bronze roundel. It's what the black-and-gold palette is keyed
  // to — swap this file and the theme should be re-checked against it.
  logo: logoMark,
  // Mannarkkad — the flagship and the most-reviewed branch.
  phone: "+91 97450 00462",
  phoneHref: "tel:+919745000462",
  email: null, // the business publishes no email address anywhere
  instagram: "https://www.instagram.com/saffron_mandi/",
};

export const navLinks = [
  { label: "Popular", href: "#popular-taste" },
  { label: "About", href: "#about" },
  { label: "Restaurant", href: "#restaurant" },
  { label: "Menu", href: "#menu" },
  { label: "Reviews", href: "#testimonials" },
  { label: "Why us", href: "#why-choose" },
  { label: "Our Team", href: "#best-chef" },
  { label: "Contact", href: "#contact" },
];

export const hero = {
  hello: "Mandi", // yellow script line, sits above the big wordmark
  title: "Saffron", // rendered letter-by-letter at 20vw — keep it short
  sub: "Experience the true Arabic Mandi.",
  tags: "Kuzhi Mandhi | Al Faham | Charcoal Grills | 4 branches in Kerala",
  bowl: imgAlfaham, // platter that slowly rotates behind the wordmark
  scrollText: "SCROLL DOWN • SCROLL DOWN ",
  // garnish images bobbing up and down around the hero
  floaters: [
    {
      src: chiliLeft,
      className: "left-[-5%] top-[36%] w-[200px] sm:w-[340px]",
      anim: "float5",
      dur: "6s",
      delay: "0s",
    },
    {
      src: chiliRight,
      className: "right-[-5%] top-[36%] w-[200px] sm:w-[340px]",
      anim: "float2",
      dur: "7.5s",
      delay: ".7s",
    },
    {
      src: coriander,
      className: "right-[12%] bottom-[9%] w-[90px] sm:w-[150px]",
      anim: "float10",
      dur: "8s",
      delay: "1.2s",
    },

    {
      src: vepp,
      className: "left-[12%] bottom-[9%] w-[90px] sm:w-[150px]",
      anim: "float10",
      dur: "8s",
      delay: "1.2s",
    },
  ],
};

export const popular = {
  eyebrow: "Popular taste",
  title: "Must try dishes",
  garnish: [coriander, chiliRight],
  // Grounded in what customers actually praise in public reviews: the smoky
  // rice, the tender beef, and the size of the portions.
  blurb:
    "Slow-cooked over charcoal in the traditional kuzhi pit — long-grain rice steeped in the meat's own stock, spiced whole and served on a platter big enough to share.",
  dishes: [
    {
      name: "Chicken Mandhi",
      badge: "HOT",
      desc: "The one everyone orders. Whole spiced chicken over smoky mandhi rice, with salad, mayo and chutney.",
      image: imgChickenMandi,
    },
    {
      name: "Beef Mandhi",
      badge: null,
      desc: "Slow-cooked till it gives way at the fork, laid over rice that has taken on all of its stock.",
      image: imgBeefMandi,
    },
    {
      name: "Mutton Mandhi",
      badge: null,
      desc: "Bone-in mutton cooked low over coals — deeper, richer, and worth the wait.",
      image: imgMuttonMandi,
    },
    {
      name: "Al Faham Mandhi",
      badge: null,
      desc: "Charcoal-grilled al faham chicken served on the mandhi rice, with a squeeze of lime.",
      image: imgAlfaham,
    },
  ],
};

export const restaurant = {
  eyebrow: "Our restaurant",
  title: "Room for the whole family",
  garnish: [coriander, chiliRight],
  blurb:
    "Air-conditioned family dining rooms, free parking at the door, and a kitchen that cooks in batches through the day — from 11 in the morning until close to midnight.",
  // 3D flip carousel — cycles on a timer
  images: [restaurant1, restaurant2, restaurant3],
};

export const menu = {
  eyebrow: "Full menu",
  title: "The mandhi board",
  garnish: [chiliRight, coriander],
  blurb:
    "Every mandhi comes on the same charcoal-steamed rice — pick your meat, then pick how it is finished. Salad, mayonnaise and tomato chutney come with the platter, and the sulaimani at the end is on us.",
  // Reconstructed from item names in public reviews and aggregator listings.
  // Confirm the full list, the spellings and the prices with the owner.
  note: "Prices and daily specials vary by branch — call your nearest kitchen to confirm.",
  items: [
    {
      name: "Chicken Mandhi",
      badge: null,
      desc: "Whole spiced chicken steamed over the rice in the kuzhi pit.",
      image: imgChickenMandi,
    },
    {
      name: "Beef Mandhi",
      badge: null,
      desc: "Slow-cooked beef, tender enough to pull apart, over stock-steeped rice.",
      image: imgBeefMandi,
    },
    {
      name: "Grilled Beef Mandhi",
      badge: null,
      desc: "The same beef finished over open coals for a charred, smoky edge.",
      image: imgBeefMandi,
    },
    {
      name: "Mutton Mandhi",
      badge: null,
      desc: "Bone-in mutton cooked low and long — the richest platter on the board.",
      image: imgMuttonMandi,
    },
    {
      name: "Al Faham Mandhi",
      badge: null,
      desc: "Charcoal-grilled al faham chicken, crisp outside, served over mandhi rice.",
      image: imgAlfaham,
    },
    {
      name: "Chicken Pollichathu Mandhi",
      badge: null,
      desc: "Masala-coated chicken roasted Kerala-style, plated on the rice.",
      image: imgAlfaham,
    },
    {
      name: "Kanthari Mandhi",
      badge: null,
      desc: "Finished with bird's-eye chilli. Sharp, bright heat — chicken or beef.",
      image: imgKanthariMandi,
    },
    {
      name: "Peri Peri Mandhi",
      badge: null,
      desc: "Grilled and glazed in peri peri. Chicken or beef.",
      image: imgPeriPeriMandi,
    },
    {
      name: "Jallikettu",
      badge: null,
      desc: "The heaviest-spiced finish on the board, for the extra-chutney crowd.",
      image: imgAlfaham,
    },
    {
      name: "Honey Chilli",
      badge: null,
      desc: "Sweet and hot in the same bite — the mildest way onto the mandhi board.",
      image: imgHoneyAlfaham,
    },
    {
      name: "Creamy",
      badge: null,
      desc: "A gentle, mild finish. What the table orders for the children.",
      image: imgCreamy,
    },
    {
      name: "Schezwan",
      badge: null,
      desc: "Indo-Chinese heat over the mandhi rice, if that is the mood.",
      image: imgChickenMandi,
    },
  ],
};

export const about = {
  eyebrow: "About Saffron Mandi",
  ring: ["Arabic", "Mandi"],
  title: "Cooked in the pit",
  garnish: [coriander, chiliLeft],
  blurb:
    "Mandi is a Yemeni method, not a recipe. The meat hangs over a covered pit of burning charcoal and the rice sits beneath it, so every drop that renders down seasons the grain. Nothing is rushed and nothing is fried to get there — that slow smoke is the whole dish. We cook it that way across Palakkad and Kottayam, and the platters are built to be shared, with the rice refilled for as long as the table is still eating.",
  image: imgRice,
};

// PLACEHOLDER — the quotes below paraphrase themes that recur across the
// chain's public Google reviews, but the names and faces are the template's
// stock people. Replace with real, permissioned reviews (or an embedded Google
// reviews widget) before this goes live.
export const testimonials = {
  eyebrow: "Reviews",
  title: "What the table says",
  garnish: [coriander, chiliRight],
  blurb:
    "Guests come back for the rice and stay for the size of the platter. Here is what they tell us most often.",
  reviews: [
    {
      quote:
        "The rice is the thing. It reaches the table smelling of smoke and whole spice, and it tastes like it sat under the meat the entire time — because it did.",
      name: "Placeholder review 1",
      role: "Replace before launch",
      avatar: avatarOlivia,
    },
    {
      quote:
        "We ordered the beef mandhi for four and could not finish it. They kept offering more rice, and nobody at the table paid for a second plate.",
      name: "Placeholder review 2",
      role: "Replace before launch",
      avatar: avatarDaniel,
    },
    {
      quote:
        "The beef falls apart without a knife. That is not something you get right by accident, and it was the same on our third visit as on our first.",
      name: "Placeholder review 3",
      role: "Replace before launch",
      avatar: avatarSophia,
    },
    {
      quote:
        "A sulaimani turns up at the end without anyone asking. Small thing, but it is why we sit for another twenty minutes instead of leaving.",
      name: "Placeholder review 4",
      role: "Replace before launch",
      avatar: avatarEthan,
    },
    {
      quote:
        "Parking outside, air conditioning inside, clean washrooms, and staff who actually check on you. With a family of seven, that decides where we eat.",
      name: "Placeholder review 5",
      role: "Replace before launch",
      avatar: avatarMia,
    },
    {
      quote:
        "For what a full platter costs, feeding four people this well is hard to beat anywhere near Mannarkkad.",
      name: "Placeholder review 6",
      role: "Replace before launch",
      avatar: avatarJames,
    },
  ],
  ratings: ["Smoky", "Generous", "Tender", "Worth it", "Shareable"],
};

export const whyChoose = {
  eyebrow: "Why choose us",
  title: "What we do well",
  garnish: [coriander, chiliLeft],
  // Deliberately silent about speed — waits at peak hours are the most common
  // complaint in public reviews, so the copy does not promise otherwise.
  blurb:
    "Charcoal, whole spice, and portions built for a table. Cooked in batches through the day, so ask for the next one out of the pit.",
  marqueeWords: [
    "Mandhi",
    "Al Faham",
    "Charcoal",
    "Kuzhi",
    "Arabic",
    "Shareable",
  ],
  features: [
    {
      icon: "spoon",
      title: "Cooked in a charcoal kuzhi pit",
      desc: "The traditional method, not an oven shortcut.",
    },
    {
      icon: "bowl",
      title: "Rice refills at the table",
      desc: "Keep eating — the rice keeps coming.",
    },
    {
      icon: "thumb",
      title: "Platters built to share",
      desc: "One order comfortably feeds three or four.",
    },
    {
      icon: "cloche",
      title: "Sulaimani on the house",
      desc: "Black tea to finish, always complimentary.",
    },
    {
      icon: "music",
      title: "AC family dining rooms",
      desc: "Room for large groups, free parking outside.",
    },
    {
      icon: "hat",
      title: "Four branches across Kerala",
      desc: "Mannarkkad, Ottappalam, Alanallur, Kottayam.",
    },
  ],
};

// PLACEHOLDER — nothing about the kitchen team is public. Either get real
// names, roles and photographs from the owner, or drop this section from the
// page by removing `Chefs` from the `middle` array in src/App.jsx.
export const chefs = {
  eyebrow: "Meet our Team",
  title: "People at the pit",
  garnish: [chiliRight, coriander],
  blurb:
    "Master pitmasters and chefs bringing authentic Yemeni charcoal mandi to your table across Kerala.",
  people: [
    {
      name: "Chef Rashid",
      cuisine: "Head Pitmaster",
      bio: "Over 15 years perfecting traditional Yemeni kuzhi mandi and slow-cooked pit charcoal meats.",
      photo: chef1,
    },
    {
      name: "Chef Tariq",
      cuisine: "Mandi Specialist",
      bio: "Master of stock-steeped long grain basmati rice and secret aromatic Arabic spice blends.",
      photo: chef2,
    },
    {
      name: "Chef Salim",
      cuisine: "Charcoal Grill Master",
      bio: "Specializing in Al Faham, Peri Peri, and open-flame charcoal grilled chicken & beef.",
      photo: chef3,
    },
    {
      name: "Chef Bilal",
      cuisine: "Kitchen Supervisor",
      bio: "Ensuring every single platter reaches your table piping hot, fresh and packed with flavor.",
      photo: chef4,
    },
  ],
};

export const contact = {
  eyebrow: "Contact us",
  title: "Find your branch",
  garnish: [coriander, chiliRight],
  blurb:
    "Booking a table, ordering a party tray, or asking about a franchise — pick the branch nearest you and the message goes straight to that kitchen.",
  note: "Pick a branch above — your message opens a WhatsApp chat with that team.",
  scribble: "Cooked slow, served generous!",
  image: contactChef,
  fields: [
    { name: "name", label: "Name", type: "text", placeholder: "Type name" },
    { name: "email", label: "Email", type: "email", placeholder: "Type email" },
    {
      name: "mobile",
      label: "Mobile number",
      type: "tel",
      placeholder: "Type mobile number",
    },
  ],
  branchesTitle: "4 branches across Kerala",
  // NAP data from each branch's Google Business Profile. `rating` is left off
  // on purpose — the published Google scores are not ours to reprint, and the
  // schema markup in index.html omits aggregateRating for the same reason.
  branches: [
    {
      name: "Mannarkkad",
      area: "Kunthipuzha Road, Kunthipuzha, Palakkad 678583",
      note: "The flagship. Between MES Kalladi College and the Kunthipuzha bridge, with its own parking lot.",
      hours: "11:00 AM – 11:30 PM daily",
      phone: "+91 97450 00462",
      maps: "https://maps.google.com/?q=10.9903908,76.441986",
    },
    {
      name: "Ottappalam",
      area: "Door 24/86-2, East Ottappalam, Palakkad 679101",
      note: "Indoor seating for lunch and dinner, with home delivery and takeaway.",
      hours: "11:00 AM – 11:30 PM daily", // TODO: District lists 11:30 AM – 11:00 PM
      phone: "+91 75940 00426", // TODO: District lists …425 — confirm which
      maps: "https://maps.google.com/?q=10.7735537,76.3874567",
    },
    {
      name: "Alanallur",
      area: "Mannarkkad Road, opposite the Indian Oil pump, Palakkad 678601",
      note: "Our newest kitchen, on the Mannarkkad road.",
      hours: null, // TODO: not published — ask the owner
      phone: null, // TODO: not published — ask the owner
      maps: "https://maps.google.com/?q=11.007173,76.3511714",
    },
    {
      name: "Kottayam",
      area: "MC Road, Nagampadam, Kottayam 686006",
      note: "On the MC Road at Nagampadam — the branch for central Kerala.",
      hours: "11:30 AM – 11:30 PM daily",
      phone: "+91 89430 00219",
      maps: "https://maps.google.com/?q=9.5999475,76.5303995",
    },
  ],
};

export const footer = {
  blurb:
    "Arabic mandi cooked the traditional way over charcoal, served across four kitchens in Palakkad and Kottayam.",
  columns: [
    { title: "Link", links: navLinks },
    {
      title: "Need help",
      links: [
        { label: "Book a table", href: "#contact" },
        { label: brand.phone, href: brand.phoneHref },
      ],
    },
    {
      title: "Order in",
      links: [
        {
          label: "Zomato",
          href: "https://www.zomato.com/mannarkkad/saffron-mandi-mannarkkad-locality",
        },
        {
          label: "Swiggy",
          href: "https://www.swiggy.com/restaurants/rest1096717",
        },
        { label: "Or call your branch", href: "#contact" },
      ],
    },
    {
      title: "Social",
      links: [{ label: "Instagram", href: brand.instagram }],
    },
  ],
  wordmark: "Saffron Mandi",
  ghostmark: "Saffron", // huge ghosted mark behind the footer — keep it short
  welcome: "Welcome you",
  copyright: "© 2026 Saffron Mandi.",
  credit: "Design by HusterX",
};
