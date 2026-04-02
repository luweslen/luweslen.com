// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2026-04-01',
  builder: 'vite',
  site: {
    url: 'https://luweslen.com',
    name: 'Luciano Weslen',
    description: 'Software Developer especializado em Node.js, TypeScript e AWS. Quase 3 anos de experiência construindo soluções escaláveis para o mercado financeiro.',
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Luciano Weslen | Software Developer',
      htmlAttrs: {
        lang: 'pt-BR',
      },
      meta: [
        { name: 'description', content: 'Software Developer especializado em Node.js, TypeScript e AWS. Quase 3 anos de experiência construindo soluções escaláveis para o mercado financeiro.' },
        { name: 'author', content: 'Luciano Weslen' },
        { name: 'robots', content: 'index, follow' },
        { name: 'theme-color', content: '#6558fe' },
        // Open Graph
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Luciano Weslen' },
        { property: 'og:title', content: 'Luciano Weslen | Software Developer' },
        { property: 'og:description', content: 'Software Developer especializado em Node.js, TypeScript e AWS. Quase 3 anos de experiência construindo soluções escaláveis para o mercado financeiro.' },
        { property: 'og:image', content: 'https://luweslen.com/og-image.png' },
        { property: 'og:url', content: 'https://luweslen.com' },
        { property: 'og:locale', content: 'pt_BR' },
        { property: 'og:locale:alternate', content: 'en_US' },
        // Twitter Card
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Luciano Weslen | Software Developer' },
        { name: 'twitter:description', content: 'Software Developer especializado em Node.js, TypeScript e AWS. Quase 3 anos de experiência construindo soluções escaláveis para o mercado financeiro.' },
        { name: 'twitter:image', content: 'https://luweslen.com/og-image.png' },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' },
        { rel: 'canonical', href: 'https://luweslen.com' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' },
        { rel: 'dns-prefetch', href: 'https://fonts.googleapis.com' },
      ],
      bodyAttrs: {
        class: 'w-full flex flex-col items-center'
      }
    }
  },
  modules: ['@nuxt/ui', '@nuxt/image', '@nuxtjs/google-fonts', '@nuxtjs/i18n', '@nuxt/test-utils/module', 'motion-v/nuxt', '@nuxtjs/sitemap', 'nuxt-schema-org', 'nuxt-skill-hub'],
  sitemap: {
    xsl: false,
    exclude: [
      '/curriculum',
      '/pt-BR/curriculum',
      '/en-US/curriculum',
    ],
    defaults: {
      changefreq: 'monthly',
      priority: 0.8,
    },
  },
  googleFonts: {
    families: {
      'Sora': [600, 700, 800],
      'DM+Sans': [400, 500, 600]
    },
    display: 'swap',
    download: true,
    preload: false,
  },
  css: ['~/assets/css/main.css'],
  image: {
    formats: ['webp', 'avif'],
    quality: 85,
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
    },
  },
  icon: {
    collections: ['mdi']
  },
  i18n: {
    strategy: 'prefix',
    defaultLocale: 'pt-BR',
    locales: [
      { code: 'pt-BR', file: 'pt-BR.json' },
      { code: 'en-US', file: 'en-US.json' }
    ],
    detectBrowserLanguage: false,
  },
  components: [
    { path: '~/components/atoms', pathPrefix: false },
    { path: '~/components/molecules', pathPrefix: false },
    { path: '~/components/organisms', pathPrefix: false },
    { path: '~/components/templates', pathPrefix: false },
  ],
  vite: {
    build: {
      cssMinify: 'lightningcss',
      rollupOptions: {
        output: {
          manualChunks: {
            'motion': ['motion-v'],
          },
        },
      },
    },
  },
  experimental: {
    payloadExtraction: false,
  },
});