import global from '../utils/global'

export default (meta: any) => {
  return [
    // Global
    {
      name: 'author',
      content: (meta && meta.author) || global.author,
    },
    {
      name: 'publisher',
      content: (meta && meta.author) || global.author,
    },
    {
      name: 'apple-mobile-web-app-title',
      content: (meta && meta.title) || global.title,
    },
    {
      name: 'apple-mobile-web-app-title',
      content: (meta && meta.title) || global.title,
    },

    // Facebook & LinkedIn
    {
      hid: 'og:title',
      name: 'og:title',
      content: (meta && meta.title) || global.title,
    },
    {
      hid: 'og:description',
      name: 'og:description',
      content: (meta && meta.description) || global.description,
    },
    {
      hid: 'og:type',
      name: 'og:type',
      content: 'website',
    },
    {
      hid: 'og:url',
      name: 'og:url',
      content: (meta && meta.url) || global.url,
    },
    {
      hid: 'og:img',
      name: 'og:img',
      content: (meta && meta.img) || global.img,
    },
    {
      hid: 'og:image:width',
      name: 'og:image:width',
      content: (meta && meta.img_size?.width) || global.img_size?.width,
    },
    {
      hid: 'og:image:height',
      name: 'og:image:height',
      content: (meta && meta.img_size?.height) || global.img_size?.height,
    },
    {
      hid: 'og:locale',
      name: 'og:locale',
      content: (meta && meta.locale) || global.locale,
    },
    {
      hid: 'og:site_name',
      name: 'og:site_name',
      content: (meta && meta.title) || global.title,
    },

    // Twitter
    {
      hid: 'twitter:card',
      name: 'twitter:card',
      content: (meta && meta.twitter_card) || global.twitter_card,
    },
    {
      hid: 'twitter:site',
      name: 'twitter:site',
      content: (meta && meta.twitter) || global.twitter,
    },
    {
      hid: 'twitter:creator',
      name: 'twitter:creator',
      content: (meta && meta.twitter) || global.twitter,
    },
    {
      hid: 'twitter:title',
      name: 'twitter:title',
      content: (meta && meta.title) || global.title,
    },
    {
      hid: 'twitter:description',
      name: 'twitter:description',
      content: (meta && meta.description) || global.description,
    },
    {
      hid: 'twitter:image',
      name: 'twitter:image',
      content: (meta && meta.img) || global.img,
    },
    {
      hid: 'twitter:image:width',
      name: 'twitter:image:width',
      content: (meta && meta.img_size?.width) || global.img_size?.width,
    },
    {
      hid: 'twitter:image:height',
      name: 'twitter:image:height',
      content: (meta && meta.img_size?.height) || global.img_size?.height,
    },
  ]
}
