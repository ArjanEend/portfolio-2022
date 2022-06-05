const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      transitionTimingFunction: {}
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      red: colors.red,
      blue: colors.blue,
      bg: '#F2EBE9',
      main:
      {
        DEFAULT: '#7C3E66',
        500: '#7C3E6644',
      },
      soft: '#A5BECC',
      strong: {
        DEFAULT: '#2B3A48',
        emphasis: '#243A73',
      },
    }
  },
  plugins: [],
}
