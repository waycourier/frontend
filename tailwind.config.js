/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      fontColor: '#717171',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      red: colors.red,
      green: colors.green,
      blue: colors.blue,
      webGreen: '#40FF72'
    },
    extend: {
      fontFamily: {
        playwrite: ['Playwrite IE', 'cursive'],
        raleway: ['Raleway', 'sans-serif']
      }
    },
  },
  plugins: [],
}