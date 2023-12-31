/* eslint-disable ts/no-require-imports */
import type { Config } from 'tailwindcss'
import { fontFamily } from 'tailwindcss/defaultTheme'

export default <Partial<Config>>{
  theme: {
    fontSize: {
      'xs': '0.611rem',
      'sm': '0.778rem',
      'base': '1rem',
      'lg': '1.333rem',
      'xl': '1.722rem',
      '2xl': '2.222rem',
      '3xl': '2.944rem',
      '4xl': '3.833rem',
      '5xl': '5.056rem',
    },
    extend: {
      colors: {
        merah: {
          DEFAULT: '#F22727',
          50: '#FCD4D4',
          100: '#FBC1C1',
          200: '#F99A9A',
          300: '#F77474',
          400: '#F44D4D',
          500: '#F22727',
          600: '#D40D0D',
          700: '#9F0A0A',
          800: '#6A0606',
          900: '#350303',
          950: '#1B0202',
        },

      },
      fontFamily: {
        body: ['Rethink Sans', 'Rethink Sans fallback', ...fontFamily.sans],
        title: ['Eczar', 'Eczar fallback', ...fontFamily.sans],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
    './content/**/*.md',
  ],
}
