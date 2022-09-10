module.exports = {
  content: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  media: false,
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#E7EDF4',
          200: '#C4D4E3',
          300: '#AFC2D4',
          400: '#7B96B2',
          500: '#3A536B',
          600: '#1C2F41',
          700: '#112131',
          800: '#0B1B2B',
          900: '#071422',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    // ...
  ],
}
