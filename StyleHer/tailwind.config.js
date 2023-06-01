/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        salmon: "#f77164",
        magenta: "#d0003a",
        transparent: "rgba(255, 0, 0, 0.3)",
      },
      fontFamily: {
        sans: ["Helvetica", "Arial", "sans-serif"],
        Rajdhani: ["Rajdhani", "sans-serif"],
      },
      backgroundImage: {
        pic: "url('../styler.jpeg')",
      },
    },
  },
  plugins: [],
};
