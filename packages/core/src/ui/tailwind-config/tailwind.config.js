const plugin = require('tailwindcss/plugin')
import { colors, fontSize, lineHeight, spacing, borderRadius, letterSpacing } from './theme'

// Base cont size setting rem value

const baseFontSize = 10 // base font 10px

// *******************************

const config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.css',
    '../../packages/common/**/*.{js,ts,jsx,tsx}',
    '../../packages/core/**/*.{js,ts,jsx,tsx}',
    '../../packages/core/**/*.css',
    '../../packages/common/**/*.css',
    '../../packages/product/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors,
    lineHeight,
    fontSize,
    spacing,
    borderRadius,
    letterSpacing,
    fontFamily: {
      inter: ['var(--font-inter)'],
    },
    minWidth: (theme) => ({
      ...theme('spacing'),
    }),
    maxWidth: (theme) => ({
      ...theme('spacing'),
      0: '0rem',
      xs: '32.0rem',
      sm: '38.4rem',
      md: '44.8rem',
      lg: '51.2rem',
      xl: '57.6rem',
      '2xl': '67.2rem',
      '3xl': '76.8rem',
      '4xl': '89.6rem',
      '5xl': '102.4rem',
      '6xl': '115.2rem',
      '7xl': '128.0rem',
    }),
    screens: {
      sm: { max: '991px' },
      lg: '992px',
      '3xl': '1600px',
    },
    extend: {},
  },
  plugins: [
    plugin(function ({ addBase }) {
      addBase({
        html: { fontSize: `${baseFontSize}px` },
      })
    }),
  ],
}
export default config
