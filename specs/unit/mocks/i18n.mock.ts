import { vi } from 'vitest'
import { config } from '@vue/test-utils'

// Mock useI18n as a global provide
const useI18nMock = () => ({
  t: (key: string) => key,
  tm: (key: string) => [key],
  locale: { value: 'pt-BR' },
})

// Add useI18n as a global stub
config.global.mocks = {
  ...config.global.mocks,
  useI18n: useI18nMock,
}

// Also make it available globally for components that call it directly
vi.stubGlobal('useI18n', useI18nMock)

// Mock UIcon component from @nuxt/ui
config.global.stubs = {
  ...config.global.stubs,
  UIcon: { template: '<span class="u-icon-stub"></span>' },
}
