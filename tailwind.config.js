module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "480px",
      sm: "640px",
      md: "767px",
      lg: "968px",
      xl: "1200px",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#2c2c2c",
      grey: "#444444",
      white: "#ffffff",
      brown: "#996830",
    },
    fontFamily: {
      title: ["Playfair Display", "serif"],
      body: ["Outfit", "sans-serif"],
    },
    fontWeight: {
      light: 300,
      reguler: 400,
      medium: 500,
      semibold: 600,
    },
    lineHeight: {
      title: "120%",
      text: "180%",
    },
    transitionDuration: {
      400: "400ms",
    },
    extend: {},
  },
  plugins: [],
};
