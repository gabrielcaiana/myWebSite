import global from './utils/global'
import getRoutes from './utils/getRoutes'
import getSiteMeta from './utils/getSiteMeta'

const meta = getSiteMeta({})

export default {
  head: {
    htmlAttrs: {
      lang: 'pt-br',
    },
    meta: [
      ...meta,
      { charset: 'utf-8', hid: 'charset' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
    ],
    link: [
      {
        hid: 'canonical',
        rel: 'canonical',
        href: global.url,
      },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
    ],
  },

  css: [
    '@/assets/css/tailwind.css',
    '@/assets/css/slug.css',
    '@/assets/css/base.css',
    '@/assets/css/fonts.css',
  ],

  content: {
    nestedProperties: ['author.name'],
    markdown: {
      prism: {
        theme: 'prism-themes/themes/prism-holi-theme.css',
      },
    },
  },

  router: {
    linkExactActiveClass: 'exact-active-link',
  },

  layoutTransition: 'slide',

  components: [{ path: '@/components', pathPrefix: false }],

  buildModules: [
    '@nuxtjs/eslint-module',
    'nuxt-gsap-module',
    '@nuxtjs/svg',
    '@nuxt/typescript-build',
    '@nuxt/postcss8',
    '@/modules/ngrok',
    '@nuxt/image',
  ],

  modules: [
    '@nuxtjs/axios',
    '@nuxt/content',
    '@nuxtjs/dotenv',
    '@nuxtjs/sitemap',
    '@nuxtjs/google-analytics',
    '@nuxtjs/proxy',
    '@nuxtjs/pwa',
    '@nuxtjs/robots',
  ],

  googleAnalytics: {
    id: process.env.GOOGLE_ANALYTICS_ID,
  },

  axios: {
    baseURL:
      process.env.NODE_ENV === 'production'
        ? process.env.BASE_URL
        : 'http://localhost:3000',
    proxy: true,
  },

  proxy: {
    '/api/': {
      target: process.env.BASE_URL,
      pathRewrite: { '^/api/': '' },
      changeOrigin: true,
    },
  },

  publicRuntimeConfig: {
    axios: {
      browserBaseURL:
        process.env.NODE_ENV === 'production'
          ? process.env.BASE_URL
          : 'http://localhost:3000',
    },
    algolia: {
      appId: process.env.APP_ID,
      apiKey: process.env.API_KEY,
    },
  },

  privateRuntimeConfig: {
    algolia: {
      appId: process.env.APP_ID,
      apiKey: process.env.API_KEY,
    },
  },

  pwa: {
    manifest: {
      name: 'Gabriel Caiana',
      short_name: 'Gabriel',
      lang: 'pt-BR',
    },
  },

  ngrok: {
    token: process.env.NGROK_TOKEN,
  },

  plugins: [
    '@/plugins/hotjar.client',
    '@/plugins/accessor',
    '@/plugins/algolia',
  ],

  sitemap: {
    hostname: global.url,
    routes() {
      return getRoutes()
    },
  },

  robots: {
    UserAgent: '*',
    Disallow: '/',
  },

  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
}
