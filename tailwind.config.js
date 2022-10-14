// /** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url(/src/assets/images/hero.jpg)",
      },
      fontFamily: {
        sans: ["MartelSans", ...defaultTheme.fontFamily.sans],
      },
      height: {
        128: "62rem",
        cardH: "621px",
      },
      colors: {
        testimonial: "#0A0F15",
        btnBg: "#EE5925",
      },
      width: {
        cardW: "332.08px",
      },
    },
  },
  plugins: [],
};
