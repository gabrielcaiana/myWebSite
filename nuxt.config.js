import getRoutes from './utils/getRoutes.js'

import getSiteMeta from './utils/getSiteMeta'

const meta = getSiteMeta()

export default {
  head: {
    titleTemplate: 'Gabriel Caiana',
    auhtor: 'Gabriel Caiana Guedes',
    htmlAttrs: {
      lang: 'en',
    },
    link: [
      {
        hid: 'canonical',
        rel: 'canonical',
        href: process.env.BASE_URL,
      },
      { rel: 'icon', type: 'image/x-icon', href: '' },
    ],
    meta: [
      ...meta,
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },

      { property: 'og:site_name', content: 'I Love code' },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          "I'm a 24-year-old software developer working primarily with JavaScript | TypeScript | Vue and Nuxt. Passionate about technology, innovation and UX | User interface design.",
      },
      { property: 'og:image:width', content: '740' },
      { property: 'og:image:height', content: '300' },

      { name: 'twitter:site', content: '@gabrielgueedes' },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
  },

  css: [
    '@/assets/css/tailwind.css',
    '@/assets/css/slug.css',
    '@/assets/css/base.css',
    '@/assets/css/theme.css',
  ],

  content: {
    nestedProperties: ['author.name'],
    markdown: {
      prism: {
        theme: 'prism-themes/themes/prism-holi-theme.css',
      },
    },
  },

  layoutTransition: 'slide',

  components: [{ path: '@/components', pathPrefix: false }],

  buildModules: [
    '@nuxtjs/eslint-module',
    'nuxt-gsap-module',
    '@nuxtjs/color-mode',
    '@nuxtjs/svg',
  ],

  modules: [
    '@nuxtjs/axios',
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/dotenv',
    '@nuxtjs/sitemap',
    '@nuxtjs/google-analytics',
    '@nuxtjs/pwa',
  ],

  googleAnalytics: {
    id: process.env.GOOGLE_ANALYTICS_ID,
  },

  axios: {
    baseURL:
      process.env.NODE_ENV === 'production'
        ? process.env.BASE_URL
        : 'http://localhost:3000',
  },

  publicRuntimeConfig: {
    axios: {
      browserBaseURL:
        process.env.NODE_ENV === 'production'
          ? process.env.BASE_URL
          : 'http://localhost:3000',
    },
  },

  pwa: {
    pwa: {
      icon: false,
    },
    manifest: {
      name: 'Gabriel Caiana - Website',
      lang: 'en',
      useWebmanifestExtension: false,
    },
  },

  build: {},

  plugins: ['@/plugins/projects', '@/plugins/jobs'],

  sitemap: {
    hostname:
      process.env.NODE_ENV === 'production'
        ? process.env.BASE_URL
        : 'http://localhost:3000',
  },
  routes() {
    return getRoutes()
  },
}
