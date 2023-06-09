/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Raleway", ...defaultTheme.fontFamily.sans],
        mono: ["IBMPlexMono", ...defaultTheme.fontFamily.mono],
        numeric: ["Ubuntu"],
      },
      colors: {
        primary: "var(--primary-colour)",
        secondary: "var(--secondary-colour)",
      },
    },
  },
  plugins: [],
};
