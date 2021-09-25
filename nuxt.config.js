import getRoutes from "./utils/getRoutes.js";

export default {
  target: 'static',
  head: {
    title: 'myBlog',
    auhtor: 'Gabriel Caiana Guedes',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  css: ['@/assets/css/tailwind.css', '@/assets/css/slug.css', '@/assets/css/base.css'],

  content: {
    nestedProperties: ['author.name'],
    markdown: {
      prism: {
        theme: 'prism-themes/themes/prism-holi-theme.css'
      }
    }
  },

  components: [{ path: '@/components', pathPrefix: false }],

  buildModules: [
    '@nuxtjs/eslint-module',
  ],

  modules: [
    '@nuxtjs/axios',
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/dotenv',
    "@nuxtjs/sitemap"
  ],

  axios: {},

  build: {
  },

  sitemap: {
    hostname: process.env.NODE_ENV === "production" ? process.env.BASE_URL : 'http://localhost:3000'
  },
  routes() {
    return getRoutes();
  },
}
