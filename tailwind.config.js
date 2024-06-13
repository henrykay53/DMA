const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */
module.exports = withMT ({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {

      colors: {

        'leftGradient': "rgba(0, 0, 255, 0.80) 41.27%",
        'heavy': '#fe3389', //pink
        'accent': '#147ABA', //blue
        'darkShadow': 'black',
        'skyBlue': '#147ABA',
        'oceanBlue': '#1C7CB8',
        'deepBlue': '#01395C'
      },

      fontFamily: {
        'ship': [ 'Shippori Mincho'],
        'sans': ['Open Sans'],
      },

    },
  },
  plugins: [],
})

