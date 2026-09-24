import type { Experience, CVExperience } from '~/types'

type ExperienceFormat = 'timeline' | 'cv'

interface UseExperiencesOptions {
  format?: ExperienceFormat
}

// Overload signatures
export function useExperiences(options: { format: 'cv' }): ComputedRef<CVExperience[]>
export function useExperiences(options?: { format?: 'timeline' }): ComputedRef<Experience[]>

// Implementation
export function useExperiences(options: UseExperiencesOptions = {}): ComputedRef<any> {
  const { format = 'timeline' } = options
  const { t, tm } = useI18n()

  if (format === 'cv') {
    return computed<CVExperience[]>(() => [
      {
        company: 'Bernoulli Educação',
        tags: ['VueJS', 'React', 'NestJS', 'MongoDB', 'TypeScript', 'Azure'],
        roles: [
          {
            title: t('experience.positions.senior'),
            period: 'jun. de 2022 – ' + t('current').toLowerCase()
          },
        ],
      },
      {
        company: 'ZRP',
        tags: ['VueJS', 'NestJS', 'MongoDB', 'PostgreSQL', 'TypeScript', 'AWS'],
        roles: [
          {
            title: t('experience.positions.senior'),
            period: 'fev. de 2026 – mai. de 2026'
          },
          {
            title: t('experience.positions.chapterLeader'),
            period: 'ago. de 2024 – mai. de 2026'
          },
          {
            title: t('experience.positions.developer'),
            period: 'ago. de 2023 – fev. de 2026'
          },
          {
            title: t('experience.positions.junior'),
            period: 'mar. de 2022 – ago. de 2023'
          },
        ],
      },
      {
        company: 'tilit / UIRD',
        tags: ['VueJS', 'NodeJS', 'MongoDB', 'TypeScript', 'Python', 'Flask'],
        roles: [
          {
            title: t('experience.positions.junior'),
            period: 'jun. de 2021 – mar. de 2022'
          },
          {
            title: t('experience.positions.intern'),
            period: 'fev. de 2020 – jun. de 2021'
          },
        ],
      },
    ])
  }

  // format === 'timeline'
  return computed<Experience[]>(() => [
    {
      period: t('experience.timeline.bernoulli.senior.period'),
      title: t('experience.positions.senior'),
      company: 'Bernoulli Educação',
      summary: t('experience.timeline.bernoulli.senior.summary'),
      details: tm('experience.timeline.bernoulli.senior.details') as string[],
    },
    {
      period: t('experience.timeline.zrp.senior.period'),
      title: t('experience.positions.senior'),
      company: 'ZRP Aplicações',
      summary: t('experience.timeline.zrp.senior.summary'),
      details: tm('experience.timeline.zrp.senior.details') as string[],
    },
    {
      period: t('experience.timeline.zrp.chapterLeader.period'),
      title: t('experience.positions.chapterLeader'),
      company: 'ZRP Aplicações',
      summary: t('experience.timeline.zrp.chapterLeader.summary'),
      details: tm('experience.timeline.zrp.chapterLeader.details') as string[],
    },
    {
      period: t('experience.timeline.zrp.developer.period'),
      title: t('experience.positions.developer'),
      company: 'ZRP Aplicações',
      summary: t('experience.timeline.zrp.developer.summary'),
      details: tm('experience.timeline.zrp.developer.details') as string[],
    },
    {
      period: t('experience.timeline.zrp.junior.period'),
      title: t('experience.positions.junior'),
      company: 'ZRP Aplicações',
      summary: t('experience.timeline.zrp.junior.summary'),
      details: tm('experience.timeline.zrp.junior.details') as string[],
    },
    {
      period: t('experience.timeline.uird.junior.period'),
      title: t('experience.positions.junior'),
      company: 'UIRD',
      summary: t('experience.timeline.uird.junior.summary'),
      details: tm('experience.timeline.uird.junior.details') as string[],
    },
    {
      period: t('experience.timeline.uird.intern.period'),
      title: t('experience.positions.intern'),
      company: 'UIRD',
      summary: t('experience.timeline.uird.intern.summary'),
      details: tm('experience.timeline.uird.intern.details') as string[],
    },
  ])
}
