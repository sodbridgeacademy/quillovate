/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: "#0074E4",
        "brand-grey": "#3C3C3C",
      },
    },
  },
  plugins: [],
};
