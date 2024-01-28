import { defineVitestConfig } from '@nuxt/test-utils/config'

export default defineVitestConfig({
  test: {
    dir: './specs/unit',
    environment: 'nuxt',
    setupFiles: ['./specs/unit/mocks/i18n.mock.ts'],
  },
})