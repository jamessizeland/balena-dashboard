// tailwind.config.js
const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.tsx', './src/**/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
      blue: colors.sky,
      primary: '#3495eb',
      secondary: '#1abc9c',
    },
  },
};
