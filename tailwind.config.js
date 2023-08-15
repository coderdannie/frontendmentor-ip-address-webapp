/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    fontFamily: {
      sans: ['Rubik', 'sans-serif'],
    },
    extend: {
      colors: {
        veryDarkGray: 'hsl(0, 0%, 17%)',
        darkGray: 'hsl(0, 0%, 59%)',
      },
    },
  },
  plugins: [],
};
