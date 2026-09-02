/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#EFEEE9", // light section background
        paper: "#F1F1F1", // alternate light background
        ink: "#121111", // near-black text + dark cards
        chili: {
          DEFAULT: "#D43539", // the Plated red — hero / nav / footer / accents
          deep: "#B2271B",
        },
        leaf: "#00942A", // "New" badge + sprout doodles
        sun: "#FFE102", // "Hello", scroll disc, dashed rings
        muted: "#636363",
      },
      fontFamily: {
        // giant holey section titles + hero wordmark
        holey: ['"Rubik Moonrocks"', '"Bebas Neue"', "Impact", "sans-serif"],
        // dish names, prices, chef names, nav wordmark, footer headings
        display: ['"Bebas Neue"', "Oswald", "Impact", "sans-serif"],
        // red cursive eyebrows + "Hello" + "Welcome You"
        script: ["Parisienne", '"Brush Script MT"', "cursive"],
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
