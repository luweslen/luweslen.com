// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Luciano Weslen',
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: './favicon.svg' },
      ],
    }
  },
  modules: [
    '@nuxt/ui',
    '@nuxtjs/google-fonts',
    '@nuxtjs/i18n'
  ],
  googleFonts: {
    families: {
      'Plus+Jakarta+Sans': [400, 500, 600, 700, 800, 900]
    }
  },
  css: ['~/assets/css/main.css'],
  ui: {
    icons: ['mdi', 'twemoji'],
  },
  i18n: {
    vueI18n: './i18n.config.ts' // if you are using custom path, default 
  }
});
