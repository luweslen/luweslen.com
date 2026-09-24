import type { Project } from '~/types'

interface UseProjectsOptions {
  preview?: boolean
}

export function useProjects(options: UseProjectsOptions = {}) {
  const { preview = false } = options
  const { t } = useI18n()
  const {getSkillByName} = useSkills()

  const projects = computed<Project[]>(() => [
    {
      title: 'Multitude Adams',
      description: preview
        ? t('projects.multitude.shortDescription')
        : t('projects.multitude.description'),
      link: 'https://sistemamultitude.com.br/',
      linkText: t('common.viewDetails'),
      techs: [
        getSkillByName('Vue.js')?.title,
        getSkillByName('React.js')?.title,
        getSkillByName('TypeScript')?.title,
        getSkillByName('NestJS')?.title,
        getSkillByName('MongoDB')?.title,
        getSkillByName('Azure DevOps')?.title
      ].filter(Boolean) as string[],
      logo: '/projects/multitude.png',
    },
    {
      title: 'COMM.PIX',
      description: preview 
        ? t('projects.commpix.shortDescription') 
        : t('projects.commpix.description'),
      link: 'https://www.commpix.com/',
      linkText: t('common.viewDetails'),
      techs: [
        getSkillByName('Vue.js')?.title, 
        getSkillByName('TypeScript')?.title, 
        getSkillByName('Node.js')?.title, 
        getSkillByName('NestJS')?.title, 
        getSkillByName('PostgreSQL')?.title, 
        getSkillByName('AWS')?.title
      ].filter(Boolean) as string[],
      logo: '/projects/commpix.png',
    },
    {
      title: 'SIMPLE',
      description: preview
        ? t('projects.simple.shortDescription')
        : t('projects.simple.description'),
      link: 'https://iamsimple.com.br/frente',
      linkText: t('common.viewDetails'),
      techs: [
        getSkillByName('Vue.js')?.title, 
        getSkillByName('TypeScript')?.title, 
        getSkillByName('Node.js')?.title, 
        getSkillByName('NestJS')?.title, 
        getSkillByName('PostgreSQL')?.title, 
        getSkillByName('AWS')?.title
      ].filter(Boolean) as string[],
      logo: '/projects/simple.png',
    },
  ])

  return {
    projects: preview ? projects.value.slice(0, 2) : projects.value,
  }
}
