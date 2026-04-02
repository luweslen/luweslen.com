import type { Talk } from '~/types'

interface UseTalksReturn {
  talks: ComputedRef<Talk[]>
  latestTalk: ComputedRef<Talk[]>
}

export function useTalks(): UseTalksReturn {
  const { t } = useI18n()

  const talks = computed<Talk[]>(() => [
    {
      year: '2026',
      title: t('talks.2026.apadrinhamento.title'),
      description: t('talks.2026.apadrinhamento.description'),
      link: 'https://palestras.luweslen.com/2026-03-27',
      linkText: t('common.viewSlides'),
    },
    {
      year: '2025',
      title: t('talks.2025.cicd.title'),
      description: t('talks.2025.cicd.description'),
      link: 'https://palestras.luweslen.com/2025-10-23',
      linkText: t('common.viewSlides'),
    },
  ])

  const latestTalk = computed(() => {
  return talks.value.sort((a, b) => Number(b.year) - Number(a.year)).slice(0, 1)
})

  return { talks , latestTalk }
}
