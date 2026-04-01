// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2026-04-01',
  builder: 'vite',
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Luciano Weslen',
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: './logo.svg' },
      ],
      bodyAttrs: {
        class: 'w-full flex flex-col items-center'
      }
    }
  },
  modules: [
    '@nuxt/ui',
    '@nuxtjs/google-fonts',
    '@nuxtjs/i18n',
    '@nuxt/test-utils/module',
    'motion-v/nuxt'
  ],
  googleFonts: {
    families: {
      'Sora': [400, 500, 600, 700, 800, 900],
      'DM+Sans': [400, 500, 600, 700, 800, 900]
    }
  },
  css: ['~/assets/css/main.css'],
  icon: {
    collections: ['mdi', 'twemoji']
  },
  i18n: {
    defaultLocale: 'pt-BR',
    locales: [
      { code: 'pt-BR', file: 'pt-BR.json' },
      { code: 'en-US', file: 'en-US.json' }
    ],
  },
  components: [
    { path: '~/components/atoms', pathPrefix: false },
    { path: '~/components/molecules', pathPrefix: false },
    { path: '~/components/organisms', pathPrefix: false },
    { path: '~/components/templates', pathPrefix: false },
  ]
});
