// ---------------------------------------------------------------------------
// All copy + data for the Plated template. Edit here to rebrand.
// Images are bundled from src/assets — swap the files (or these imports)
// for your own photos. Plated dishes read best as round, transparent PNGs.
// ---------------------------------------------------------------------------

import coriander from "../assets/coriander-leaves.avif";
import chiliLeft from "../assets/left-chilly.avif";
import chiliRight from "../assets/right-chilly.avif";

import heroBowl from "../assets/food1.avif";
import shaway from "../assets/shaway.png";
import infused from "../assets/infused.png";
import shawarma from "../assets/lamp shawarma.png";
import fried from "../assets/fried chicken.png";
import broasted from "../assets/broasted.png";
import buttuam from "../assets/buttuam.png";
import imgDal from "../assets/dal.avif";
import imgMakhani from "../assets/makhani.avif";
import imgGobi from "../assets/gobi1.avif";
import imgPulao from "../assets/pulav.avif";
import imgTandooriPaneer from "../assets/tandoori-paneer.avif";
import imgTandooriRoti from "../assets/tandoori-roti.avif";
import vepp from "../assets/vepp.avif";

import restaurant1 from "../assets/plated-makhmal.jpg";
import restaurant2 from "../assets/plated-crunch.jpg";
import restaurant3 from "../assets/plated-spicy.jpg";

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
  name: "Plated",
  phone: "+00 00000000",
  phoneHref: "tel:+000000000000",
  email: "book@plated.com",
};

export const navLinks = [
  { label: "Popular", href: "#popular-taste" },
  { label: "About", href: "#about" },
  { label: "Restaurant", href: "#restaurant" },
  { label: "Menu", href: "#menu" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Why us", href: "#why-choose" },
  { label: "Our Team", href: "#best-chef" },
  { label: "Contact", href: "#contact" },
];

export const hero = {
  hello: "Welcome to",
  title: "Plated",
  sub: "Kerala’s First Infused Chicken Brand.",
  tags: "Infused Specials | Combos | Fried chicken",
  bowl: infused, // curry bowl that slowly rotates behind the wordmark
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
  blurb:
    "Our most-loved dishes, freshly prepared with vibrant vegetables, aromatic spices, and rich flavours. Discover the Plated favourites our guests keep coming back for.",
  dishes: [
    {
      name: "Infused Chicken",
      rating: "5.0",
      badge: "HOT",
      desc: "Our signature — chicken deep-infused with a house spice blend, then flame-grilled.",
      image: infused,
    },
    {
      name: "Shaway Chicken",
      rating: "5.0",
      badge: null,
      desc: "Whole chicken slow-roasted over open coals until smoky and tender.",
      image: shaway,
    },
    {
      name: "Fried Chicken",
      rating: "5.0",
      badge: null,
      desc: "Buttermilk-brined, hand-breaded and fried golden with a proper crunch.",
      image: fried,
    },
    {
      name: "Lamp Shawarma",
      rating: "5.0",
      badge: "NEW",
      desc: "Spiced meat stacked and spit-roasted, carved thin with garlic toum and pickles.",
      image: shawarma,
    },
  ],
};

export const restaurant = {
  eyebrow: "Our restaurant",
  title: "A place for good food",
  garnish: [coriander, chiliRight],
  blurb:
    "From the first bite to the last conversation, Plated is made for good food, warm moments, and memorable experiences.",
  // 3D flip carousel — cycles on a timer
  images: [restaurant1, restaurant2, restaurant3],
};

export const menu = {
  eyebrow: "Full menu",
  title: "Flavour Picks",
  garnish: [chiliRight, coriander],
  blurb:
    "A delicious selection of Arabic favourites, crafted with fresh ingredients and our signature flavours.",
  items: [
    {
      name: "Infused Chicken",
      badge: null,
      desc: "Our signature infused chicken, marinated deep and flame-grilled till juicy.",
      image: infused,
    },
    {
      name: "Fried Chicken",
      badge: null,
      desc: "Crisp golden crust, juicy inside — brined and double-fried for extra crunch.",
      image: fried,
    },
    {
      name: "Shaway Chicken",
      badge: null,
      desc: "Charcoal-roasted whole chicken — smoky, spiced and fall-off-the-bone tender.",
      image: shaway,
    },
    {
      name: "Buttuam Chicken",
      badge: null,
      desc: "Char-grilled chicken glazed in a buttery, mildly spiced house sauce.",
      image: buttuam,
    },
    {
      name: "Lamp Shawarma",
      badge: null,
      desc: "Slow-roasted spiced meat shaved thin, wrapped with toum, fries and pickles.",
      image: shawarma,
    },
    {
      name: "Chicken Shawarma",
      badge: null,
      desc: "Marinated chicken off the spit, rolled with garlic sauce, fries and pickles.",
      image: shawarma,
    },
  ],
};

export const about = {
  eyebrow: "About Plated",
  ring: ["Authentic", "Food"],
  title: "Best Arabian food",
  garnish: [coriander, chiliLeft],
  blurb:
    "All about fresh flavours you can trust. Plated brings together quality ingredients, vibrant recipes, and a passion for great Arabic food. Our mission is simple — serve fresh, delicious meals that make every visit worth remembering.",
  image: imgPulao,
};

export const testimonials = {
  eyebrow: "Testiminials",
  title: "Our client love it",
  garnish: [coriander, chiliRight],
  blurb:
    "Great food speaks for itself. From unforgettable flavours to warm moments around the table, discover why our guests love Plated and keep coming back for more.",
  reviews: [
    {
      quote:
        "Plated brings fresh ingredients, bold flavours, and beautifully prepared dishes to every meal. It has quickly become our favourite place to eat.",
      name: "Olivia Carter",
      role: "Food Blogger",
      avatar: avatarOlivia,
    },
    {
      quote:
        "The flavours at Plated are simply wonderful. Every dish feels fresh, comforting, and thoughtfully prepared, making every visit a delicious experience.",
      name: "Daniel Brooks",
      role: "Regular Guest",
      avatar: avatarDaniel,
    },
    {
      quote:
        "From the first bite to the last, Plated never disappoints. The food is flavourful, fresh, and full of character. We always leave happy and satisfied.",
      name: "Sophia Bennett",
      role: "Food Enthusiast",
      avatar: avatarSophia,
    },
    {
      quote:
        "Plated is the perfect place for delicious Arabic food. The menu offers wonderful variety, generous portions, and flavours that keep us coming back.",
      name: "Ethan Mitchell",
      role: "Restaurant Reviewer",
      avatar: avatarEthan,
    },
    {
      quote:
        "I love the warmth and freshness at Plated. Every meal is prepared with care, and the rich flavours make even a simple lunch feel truly special.",
      name: "Mia Anderson",
      role: "Lifestyle Blogger",
      avatar: avatarMia,
    },
    {
      quote:
        "Great food, friendly service, and a welcoming atmosphere make Plated stand out. It is our go-to place whenever we want something fresh and delicious.",
      name: "James Wilson",
      role: "Local Food Lover",
      avatar: avatarJames,
    },
  ],
  ratings: ["Excellent", "Good", "Amazing", "Very good", "Decent"],
};

export const whyChoose = {
  eyebrow: "Why choose us",
  title: "We are known",
  garnish: [coriander, chiliLeft],
  blurb:
    "Simple ingredients. Honest cooking. Big flavour. That’s what makes Plated special.",
  marqueeWords: ["Excellent", "Good", "Amazing", "Fresh", "Honest", "Tasty"],
  features: [
    {
      icon: "spoon",
      title: "Always serve fresh food",
      desc: "Perfectly portioned ingredients.",
    },
    {
      icon: "thumb",
      title: "Maintaining the quality of food",
      desc: "Standardized food recipes for menu.",
    },
    {
      icon: "hat",
      title: "We have popular masterchef",
      desc: "The patient staff reflects the style.",
    },
    {
      icon: "music",
      title: "Best live music restaurants",
      desc: "Beautiful natural & serene ambience.",
    },
    {
      icon: "bowl",
      title: "Delicious food recipes",
      desc: "Best crust with this good recipe.",
    },
    {
      icon: "cloche",
      title: "Wonderful dining experience",
      desc: "A memorable dining atmosphere.",
    },
  ],
};

export const chefs = {
  eyebrow: "Meet our Team",
  title: "People behind flavour",
  garnish: [chiliRight, coriander],
  blurb:
    "Meet the passionate chefs who bring creativity, experience and a love for food to every Plated plate.",
  people: [
    {
      name: "John Richards",
      cuisine: "Indian Cuisine",
      bio: "A passionate Indian chef known for bold spices, traditional recipes, and modern twists on classic Arabic dishes. He brings authentic Indian flavors to every plate with a fresh, contemporary approach.",
      photo: chef1,
    },
    {
      name: "Marta Warner",
      cuisine: "Italian Cuisine",
      bio: "A creative Italian chef who brings authentic flavors, fresh ingredients, and a contemporary touch to every dish. Her cooking celebrates the simplicity, warmth, and richness of classic Italian cuisine.",
      photo: chef2,
    },
    {
      name: "Lane Ferrari",
      cuisine: "France Cuisine",
      bio: "A refined French chef specializing in elegant presentation, delicate flavors, and beautifully crafted culinary experiences. He combines traditional French techniques with a modern sense of creativity and precision.",
      photo: chef3,
    },
    {
      name: "Antony Tylor",
      cuisine: "Thailand Cuisine",
      bio: "A vibrant Thai cuisine specialist who blends aromatic herbs, fresh ingredients, and the perfect balance of sweet, sour, spicy, and savory flavors. His dishes capture the bold, fresh character of Thailand in every bite.",
      photo: chef4,
    },
  ],
};

export const contact = {
  eyebrow: "Contact us",
  title: "Ready to help you!",
  garnish: [coriander, chiliRight],
  blurb:
    "Have a question, want to make a reservation, or simply craving something delicious? We’re here to help.",
  note: "Pick a branch above — your message opens a WhatsApp chat with that team.",
  scribble: "We cook with love and reply with care!",
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
  branchesTitle: "5 branches across Kerala",
  branches: [
    {
      name: "Plated Kaloor",
      area: "JLN Stadium Outlets, Kochi",
      rating: "4.4",
      note: "Fusion food, outdoor stadium vibes, Tuscan Blaze rice plates.",
      phone: "+91 81294 30421",
    },
    {
      name: "Plated Trivandrum",
      area: "Panavila Junction, Thycaud",
      rating: "4.3",
      note: "Beautiful wall drawings, classic creamy chicken, crunchy wraps.",
      phone: "+91 87144 78718",
    },
    {
      name: "Plated Vennala",
      area: "Oasis Building, Chakkaraparambu",
      rating: "4.2",
      note: "Large two-story family layout, Makhmal Mashwi grilled dishes.",
      phone: "+91 77363 34443",
    },
    {
      name: "Plated Kottayam",
      area: "Kottayam–Kumily Road (NH 183)",
      rating: "4.1",
      note: "Intimate boutique seating, infused chicken, premium broasted chicken.",
      phone: "+91 90743 15031",
    },
    {
      name: "Plated Pathanamthitta",
      area: "Pathanamthitta Ring Road",
      rating: "3.9",
      note: "Casual fast-food hub, distinct Al Faham, dynamite chicken.",
      phone: "+91 87147 79369",
    },
  ],
};

export const footer = {
  blurb:
    "Plated brings together quality ingredients, vibrant recipes, and a passion for great Arabic food.",
  columns: [
    { title: "Link", links: navLinks },
    {
      title: "Need help",
      links: [
        { label: "Book table", href: "#contact" },
        { label: brand.phone, href: brand.phoneHref },
      ],
    },
    {
      title: "Need support?",
      links: [
        { label: "Email us at", href: `mailto:${brand.email}` },
        { label: brand.email, href: `mailto:${brand.email}` },
      ],
    },
    {
      title: "Social",
      links: [
        { label: "Facebook", href: "https://facebook.com/" },
        { label: "Instagram", href: "https://instagram.com/" },
        { label: "YouTube", href: "https://youtube.com/" },
        { label: "Twitter", href: "https://x.com/" },
        { label: "LinkedIn", href: "https://linkedin.com/" },
      ],
    },
  ],
  wordmark: "Plated",
  welcome: "Welcome you",
  copyright: "© 2026 Plated.",
  credit: "Design by Anvics",
};
