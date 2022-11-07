/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {},
    fontFamily: {
      sans: ["Montserrat", "sans-serif"],
    },
    fontWeight: {
      300: 300,
      400: 400,
      500: 500,
      600: 600,
      700: 700,
    },
    colors: {
      light: "#F8F9FA",
      light2: "#E9ECEF",
      light3: "#DEE2E6",
      light4: "#CED4DA",
      med: "#ADB5BD",
      dark4: "#6C757D",
      dark3: "#495057",
      dark2: "#343A40",
      dark: "#212529",
      blue: "#2196f3",
      green: "#4ad66d",
      red: "#d90429",
    },
    fontSize: {
      headline1: "96px",
      headline2: "61px",
      headline3: "49px",
      headline4: "35px",
      headline5: "24px",
      headline6: "20px",
      subtitile1: "16px",
      subtitle2: "14px",
      body1: "16px",
      body2: "14px",
      btn: "14px",
      caption: "12px",
    },
    gridTemplateRows: {
      // Simple 8 row grid
      8: "300px 300px 300px 300px",

      // Complex site-specific row configuration
      layout: "50px 50px 1fr",
    },
    backgroundImage: {
      "hero-pattern": "url('/src/imgs/img.jpg')",
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
};
