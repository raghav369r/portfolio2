/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#f97316",
        bgcol: "#242424",
      },
      fontFamily: {
        custome: ['"Montserrat"'],
        mixed: ['"Dancing Script"'],
      },
    },
  },
  plugins: [],
};
