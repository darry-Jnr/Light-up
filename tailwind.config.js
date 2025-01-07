/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",'./public/index.html'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        searchcolor: '#ebf5f5',
        logincolor: '#20d8da'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('tailwind-scrollbar'),],
};
