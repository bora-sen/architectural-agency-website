/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-green": "#77aa5a",
      },
      fontFamily: {
        display: ["Bebas Neue", "cursive"],
      },
    },
  },
  plugins: [],
}
