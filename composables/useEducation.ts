import type { Education } from '~/types'

export function useEducation() {
  const { t } = useI18n()

  return computed<Education[]>(() => [
    {
      period: t('education.timeline.analysis.period'),
      title: t('education.timeline.analysis.title'),
      institution: t('education.timeline.analysis.institution'),
    },
    {
      period: t('education.timeline.technician.period'),
      title: t('education.timeline.technician.title'),
      institution: t('education.timeline.technician.institution'),
    },
  ])
}
