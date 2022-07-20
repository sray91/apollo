const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
    colors: colors,

    backgroundImage: {
      'hero-pattern':
        "linear-gradient( black, transparent, black), url('/bkSpace.jpg')",
    },
  },
  variants: {},
  plugins: [],
}

/*linear-gradient(rgb(15, 23, 42), rgb(88, 28, 135), rgb(15, 23, 42))
radial-gradient(at center center, black, transparent)*/
