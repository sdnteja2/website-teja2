// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: false,
  },
  modules: [
    '@nuxt/content',
    '@nuxtseo/module',
    'nuxt-simple-sitemap',
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
        src: 'fonts/Rethink_Sans-400_800-6.woff2',
        root: 'assets',
      },
      {
        family: 'Eczar',
        fallbacks: ['Eczar'],
        fallbackName: 'Eczar',
        src: 'fonts/Eczar-400_800-1.woff2',
        root: 'assets',
      },
    ],
  },
  site: {
    url: 'https://sdnteja2.sch.id/',
    name: 'SDN Teja 2',
    description: 'Sekolah Dasar Negeri Teja 2 - Kecamatan Rajagaluh - Kabupaten Majalengka Jawa Barat',
    defaultLocale: 'id', // not needed if you have @nuxtjs/i18n installed
  },
  content: {
    experimental: {
      search: {
        indexed: true,
        ignoredTags: ['style', 'code'],
        options:{
            fields: ['title', 'content', 'titles'],
            storeFields: ['title', 'content', 'titles'],
            searchOptions: {
              prefix: true,
              fuzzy: 0.2,
              boost: {
                title: 4,
                content: 2,
                titles: 1
              
            }
          }
          
        }
      }
  
    },
    documentDriven: true,
    highlight: {
      // Theme used in all color schemes.
      theme: 'dracula'
      // OR
    
  
    },
  },
})
