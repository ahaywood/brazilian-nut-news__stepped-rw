/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        icterine: '#fbfd5d',
        cinder: '#25292f',
        telemagenta: '#da3675',
        fountainBlue: '#61c2bc',
        stormDust: '#636363',
      },
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      condensed: ['Bebas Neue', 'sans-serif'],
    },
  },
  plugins: [],
}
