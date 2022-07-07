const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      transitionTimingFunction: {
        'in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
        'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
        'bounce': 'cubic-bezier(.18,-0.01,.42,1.34)',
        'bouncefast': 'cubic-bezier(0.33, 0.07, 0.15, 1.74)'
      },
      boxShadow: {
        'square': '8px 8px 0px 2px rgba(0, 0, 0, 1)',
        'inside': 'inset 0px 0px 0px 8px rgba(0, 0, 0, 1)',
        'fill': 'inset 0px 0px 0px 200px rgba(0, 0, 0, 1)'
      }
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
      bg:
      {
        DEFAULT: '#F2EBE9',
        300: '#c59ebf',
      },
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
