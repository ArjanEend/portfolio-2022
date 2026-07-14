const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      transitionTimingFunction: {
        'in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
        'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
        'bounce': 'cubic-bezier(.18,-0.01,.42,1.34)',
        'bouncefast': 'cubic-bezier(0.33, 0.07, 0.15, 1.74)'
      },
      fontFamily: {
        sans: ['var(--font-plus-jakarta)', 'sans-serif'],
        display: ['var(--font-space-grotesk)', 'sans-serif'],
      },
      boxShadow: {
        'brutal': '4px 4px 0px 0px rgba(0, 0, 0, 1)',
        'brutal-lg': '8px 8px 0px 0px rgba(0, 0, 0, 1)',
        'brutal-xl': '12px 12px 0px 0px rgba(0, 0, 0, 1)',
        'square': '6px 6px 0px 2px rgba(0, 0, 0, 1)',
        'square-small': '8px 8px 0px 0px rgba(0, 0, 0, 1)',
        'inside': 'inset 0px 0px 0px 8px rgba(0, 0, 0, 1)',
        'fill': 'inset 0px 0px 0px 300px rgba(0, 0, 0, 1)'
      },
      borderWidth: {
        '3': '3px',
        '6': '6px',
        '8': '8px'
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
      // Neo-brutalist EEND Games theme color palette
      bg: {
        DEFAULT: '#FAF6F0', // warm light cream paper
        card: '#FAF6F0',
        300: '#C59EBF'
      },
      duck: {
        blue: '#00D0FF', // Logo duck body cyan
        beak: '#FF5D46', // Logo beak orange
        yellow: '#FFD000', // Neon highlight yellow
        purple: '#DF9BFF', // Sticker purple
        green: '#38EF7D', // Sticker green
        navy: '#243A73', // Logo text navy
      },
      main: {
        DEFAULT: '#FF5D46', // beak orange as primary accent
        500: '#FF5D4644',
      },
      soft: '#A5BECC',
      strong: {
        DEFAULT: '#1A1A1A', // deep high-contrast text
        emphasis: '#243A73', // logo navy for sub-emphasis
      }
    }
  },
  plugins: [],
}
