// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/content',
    '@nuxt/ui',
    '@nuxt/image',
    '@nuxtjs/google-fonts',
    '@nuxtjs/fontaine',
    'nuxt-delay-hydration',
  ],
  delayHydration: {
    mode: 'mount',
  },
  image: {
    formats: ['webp'],
  },
  ui: {
    icons: ['basil'],
  },
  googleFonts: {
    display: 'swap',
    prefetch: true,
    preconnect: true,
    preload: true,
    families: {
      'Rethink Sans': {
        wght: '400..800',
        ital: '400..800',
      },
      'Eczar': {
        wght: '400..800',
      },
    },
  },
  fontMetrics: {
    fonts: [
      {
        family: 'Rethink Sans',
        fallbacks: ['Rethink Sans'],
        fallbackName: 'Rethink Sans',
      },
      {
        family: 'Eczar',
        fallbacks: ['Eczar'],
        fallbackName: 'Eczar',
      },
    ],
  },
})
