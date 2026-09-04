/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#F1EDE3", // light section background (warmed slightly for gold)
        paper: "#F1F1F1", // alternate light background
        onyx: "#0A0908", // black surfaces — hero, navbar, footer, badges
        ink: "#121111", // near-black text + dark cards
        // Gold, sampled off the Saffron Mandi mark. Two stops, and they are not
        // interchangeable: `gold` is a mid-tone that sings on black but only
        // reaches ~2:1 on cream, so on light backgrounds use `gold.deep`, and
        // only for large type (eyebrows, prices, names) — never body copy.
        gold: {
          DEFAULT: "#D4A343", // on black: buttons, badges, stars, rings
          light: "#EBD08A", // highlight + hover on dark
          deep: "#8C6A1E", // accents on cream — large text only (4.2:1)
        },
        muted: "#636363",
      },
      fontFamily: {
        // giant holey section titles + hero wordmark
        holey: ['"Rubik Moonrocks"', '"Bebas Neue"', "Impact", "sans-serif"],
        // dish names, prices, chef names, nav wordmark, footer headings
        display: ['"Bebas Neue"', "Oswald", "Impact", "sans-serif"],
        // red cursive eyebrows + "Hello" + "Welcome You"
        script: ["Parisienne", '"Brush Script MT"', "cursive"],
        // main hero title in a more calligraphic, luxury Arabic-inspired style
        heroScript: ['"Aref Ruqaa"', '"Noto Nastaliq Urdu"', '"Segoe Script"', "serif"],
        sans: ["Inter", "ui-sans-serif", "system-ui", "Segoe UI", "sans-serif"],
        wordmark: ["Roboto", "Inter", "system-ui", "sans-serif"],
      },
      maxWidth: { container: "1280px" },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        "marquee-rev": {
          from: { transform: "translateX(-50%)" },
          to: { transform: "translateX(0)" },
        },
        spin: {
          from: { transform: "rotate(0)" },
          to: { transform: "rotate(360deg)" },
        },
        "spin-rev": {
          from: { transform: "rotate(0)" },
          to: { transform: "rotate(-360deg)" },
        },
        float1: {
          "0%,100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-26px) rotate(3deg)" },
        },
        float2: {
          "0%,100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(24px) rotate(-4deg)" },
        },
        float5: {
          "0%,100%": { transform: "translateY(0) rotate(-2deg)" },
          "50%": { transform: "translateY(-30px) rotate(4deg)" },
        },
        float10: {
          "0%,100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(18px) rotate(-6deg)" },
        },
      },
      animation: {
        marquee: "marquee var(--marquee-duration, 34s) linear infinite",
        "marquee-rev":
          "marquee-rev var(--marquee-duration, 34s) linear infinite",
        "spin-slow": "spin 26s linear infinite",
        "spin-slowest": "spin 80s linear infinite",
        "spin-disc": "spin 16s linear infinite",
        float1: "float1 var(--float-dur, 6s) ease-in-out infinite",
        float2: "float2 var(--float-dur, 7s) ease-in-out infinite",
        float5: "float5 var(--float-dur, 6.5s) ease-in-out infinite",
        float10: "float10 var(--float-dur, 8s) ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
