import { SkillCategory, SkillLevel, type Skill } from '~/types'

interface UseSkillsReturn {
  skills: ComputedRef<Skill[]>
  skillsByCategory: ComputedRef<{ category: SkillCategory; title: string; description: string; icon: string; skills: Skill[] }[]>
  getSkillByName: (name: string) => Skill | undefined
}

export function useSkills(): UseSkillsReturn {
  const { t } = useI18n()
  const categoryIcons: Record<SkillCategory, string> = {
    [SkillCategory.LANGUAGE_PROGRAMMING]: 'i-mdi-language-javascript',
    [SkillCategory.FRONTEND]: 'i-mdi-vuejs',
    [SkillCategory.BACKEND]: 'i-mdi-nodejs',
    [SkillCategory.MOBILE]: 'i-mdi-cellphone',
    [SkillCategory.DEVOPS]: 'i-mdi-docker',
    [SkillCategory.DATABASE]: 'i-mdi-database',
    [SkillCategory.TOOLS]: 'i-mdi-tools',
    [SkillCategory.METHODOLOGIES]: 'i-mdi-view-dashboard',
    [SkillCategory.SOFT_SKILLS]: 'i-mdi-account-group',
  }
  const skills = computed<Skill[]>(() => [
    // --- PROGRAMMING LANGUAGES ---
    {
      icon: 'i-mdi-language-javascript',
      title: t('skills.javascript.title'),
      description: t('skills.javascript.description'),
      categories: [SkillCategory.LANGUAGE_PROGRAMMING],
      level: SkillLevel.FREQUENT,
    },
    {
      icon: 'i-mdi-language-typescript',
      title: t('skills.typescript.title'),
      description: t('skills.typescript.description'),
      categories: [SkillCategory.LANGUAGE_PROGRAMMING],
      level: SkillLevel.FREQUENT,
    },
    {
      icon: 'i-mdi-language-python',
      title: t('skills.python.title'),
      description: t('skills.python.description'),
      categories: [SkillCategory.LANGUAGE_PROGRAMMING],
      level: SkillLevel.SOMETIMES,
    },
    {
      icon: 'i-mdi-language-java',
      title: t('skills.java.title'),
      description: t('skills.java.description'),
      categories: [SkillCategory.LANGUAGE_PROGRAMMING],
      level: SkillLevel.SOMETIMES,
    },
        {
      icon: 'i-mdi-language-ruby',
      title: t('skills.ruby.title'),
      description: t('skills.ruby.description'),
      categories: [SkillCategory.LANGUAGE_PROGRAMMING],
      level: SkillLevel.OCCASIONAL,
    },

    // --- FRONTEND ---
    {
      icon: 'i-mdi-vuejs',
      title: t('skills.vueJS.title'),
      description: t('skills.vueJS.description'),
      categories: [SkillCategory.FRONTEND],
      level: SkillLevel.FREQUENT,
    },
    {
      icon: 'i-mdi-quasar',
      title: t('skills.quasar.title'),
      description: t('skills.quasar.description'),
      categories: [SkillCategory.FRONTEND],
      level: SkillLevel.FREQUENT,
    },
    {
      icon: 'i-mdi-nuxt',
      title: t('skills.nuxtjs.title'),
      description: t('skills.nuxtjs.description'),
      categories: [SkillCategory.FRONTEND],
      level: SkillLevel.FREQUENT,
    },
    {
      icon: 'i-mdi-react',
      title: t('skills.reactJS.title'),
      description: t('skills.reactJS.description'),
      categories: [SkillCategory.FRONTEND],
      level: SkillLevel.OCCASIONAL,
    },
    {
      icon: 'i-mdi-tailwind',
      title: t('skills.tailwind.title'),
      description: t('skills.tailwind.description'),
      categories: [SkillCategory.FRONTEND],
      level: SkillLevel.OCCASIONAL,
    },

    // --- BACKEND ---
    {
      icon: 'i-mdi-nodejs',
      title: t('skills.nodeJS.title'),
      description: t('skills.nodeJS.description'),
      categories: [SkillCategory.BACKEND],
      level: SkillLevel.FREQUENT,
    },
    {
      icon: 'i-mdi-alpha-n-box',
      title: t('skills.nestJS.title'),
      description: t('skills.nestJS.description'),
      categories: [SkillCategory.BACKEND],
      level: SkillLevel.FREQUENT,
    },
    {
      icon: 'i-mdi-database-outline',
      title: t('skills.postgreSQL.title'),
      description: t('skills.postgreSQL.description'),
      categories: [SkillCategory.BACKEND, SkillCategory.DATABASE],
      level: SkillLevel.FREQUENT,
    },
    {
      icon: 'i-mdi-leaf',
      title: t('skills.mongoDB.title'),
      description: t('skills.mongoDB.description'),
      categories: [SkillCategory.BACKEND, SkillCategory.DATABASE],
      level: SkillLevel.FREQUENT,
    },
    {
      icon: 'i-mdi-database',
      title: t('skills.sql.title'),
      description: t('skills.sql.description'),
      categories: [SkillCategory.DATABASE],
      level: SkillLevel.FREQUENT,
    },
    {
      icon: 'i-mdi-database',
      title: t('skills.redis.title'),
      description: t('skills.redis.description'),
      categories: [SkillCategory.DATABASE],
      level: SkillLevel.FREQUENT,
    },

    // --- MOBILE ---
    {
      icon: 'i-mdi-cellphone',
      title: t('skills.reactNative.title'),
      description: t('skills.reactNative.description'),
      categories: [SkillCategory.MOBILE],
      level: SkillLevel.OCCASIONAL,
    },
    {
      icon: 'i-mdi-cellphone',
      title: t('skills.expo.title'),
      description: t('skills.expo.description'),
      categories: [SkillCategory.MOBILE],
      level: SkillLevel.OCCASIONAL,
    },

    // --- DEVOPS / ARCHITECTURE ---
    {
      icon: 'i-mdi-docker',
      title: t('skills.docker.title'),
      description: t('skills.docker.description'),
      categories: [SkillCategory.DEVOPS],
      level: SkillLevel.FREQUENT,
    },
    {
      icon: 'i-mdi-aws',
      title: t('skills.aws.title'),
      description: t('skills.aws.description'),
      categories: [SkillCategory.DEVOPS],
      level: SkillLevel.FREQUENT,
    },

    // --- TOOLS & METHODOLOGIES ---
    {
      icon: 'i-mdi-git',
      title: t('skills.git.title'),
      description: t('skills.git.description'),
      categories: [SkillCategory.TOOLS],
      level: SkillLevel.FREQUENT,
    },
    {
      icon: 'i-mdi-view-dashboard',
      title: t('skills.projectManagement.title'),
      description: t('skills.projectManagement.description'),
      categories: [SkillCategory.METHODOLOGIES],
      level: SkillLevel.FREQUENT,
    },
    {
      icon: 'i-mdi-view-dashboard',
      title: t('skills.kanban.title'),
      description: t('skills.kanban.description'),
      categories: [SkillCategory.METHODOLOGIES],
      level: SkillLevel.FREQUENT,
    },
    {
      icon: 'i-mdi-view-dashboard',
      title: t('skills.scrum.title'),
      description: t('skills.scrum.description'),
      categories: [SkillCategory.METHODOLOGIES],
      level: SkillLevel.FREQUENT,
    },

    // --- SOFT SKILLS ---
    {
      icon: 'i-mdi-account-group',
      title: t('skills.teamWork.title'),
      description: t('skills.teamWork.description'),
      categories: [SkillCategory.SOFT_SKILLS],
      level: SkillLevel.FREQUENT,
    },
    {
      icon: 'i-mdi-chat-processing',
      title: t('skills.communication.title'),
      description: t('skills.communication.description'),
      categories: [SkillCategory.SOFT_SKILLS],
      level: SkillLevel.FREQUENT,
    }
  ])

  const skillsByCategory = computed(() => {
    const categoryMap = new Map<SkillCategory, Skill[]>()

    skills.value.forEach(skill => {
      skill.categories.forEach(category => {
        if (!categoryMap.has(category)) {
          categoryMap.set(category, [])
        }
        categoryMap.get(category)!.push(skill)
      })
    })

    return Array.from(categoryMap.entries()).map(([category, skills]) => ({
      category,
      title: t(`skills.categories.${category}.title`),
      description: t(`skills.categories.${category}.description`),
      icon: categoryIcons[category],
      skills
    }))
  })

  const getSkillByName = (name: string): Skill | undefined => {
    return skills.value.find(skill => skill.title === name)
  }

  return {
    skills,
    skillsByCategory,
    getSkillByName
  }
}