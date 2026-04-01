<script setup lang="ts">
import { Motion } from 'motion-v'

const { t } = useI18n()

const skills = computed(() => [
  {
    icon: 'i-mdi-server',
    title: t('skills.backendDev.title'),
    description: t('skills.backendDev.description'),
    techs: ['Node.js', 'NestJS', 'TypeScript'],
  },
  {
    icon: 'i-mdi-monitor',
    title: t('skills.frontendDev.title'),
    description: t('skills.frontendDev.description'),
    techs: ['Vue.js', 'Quasar', 'React'],
  },
  {
    icon: 'i-mdi-cellphone',
    title: t('skills.mobileDev.title'),
    description: t('skills.mobileDev.description'),
    techs: ['React Native', 'Flutter'],
  },
  {
    icon: 'i-mdi-view-dashboard',
    title: t('skills.projectManagement.title'),
    description: t('skills.projectManagement.description'),
    techs: ['Kanban', 'Scrum'],
  },
  {
    icon: 'i-mdi-sitemap',
    title: t('skills.systemsArchitecture.title'),
    description: t('skills.systemsArchitecture.description'),
    techs: ['AWS', 'Docker', 'CI/CD'],
  },
])

const techStack = computed(() => [
  { category: t('skills.techStack.backend'), items: ['Node.js', 'NestJS', 'TypeScript'] },
  { category: t('skills.techStack.frontend'), items: ['Vue.js', 'Quasar', 'React'] },
  { category: t('skills.techStack.database'), items: ['PostgreSQL', 'MongoDB', 'Redis'] },
  { category: t('skills.techStack.cloudDevops'), items: ['AWS (SQS, Lambda, ECS, Step Functions)', 'Docker', 'CI/CD'] },
  { category: t('skills.techStack.testing'), items: ['Jest', t('skills.techStack.unitTests'), t('skills.techStack.integrationTests')] },
])
</script>

<template>
  <DetailPageLayout :title="t('pages.skills.title')">
    <!-- Skills Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
      <Motion
        v-for="(skill, index) in skills"
        :key="skill.title"
        :initial="{ opacity: 0, y: 30 }"
        :animate="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.5, delay: index * 0.1 }"
      >
        <SkillCard
          :icon="skill.icon"
          :title="skill.title"
          :description="skill.description"
          :techs="skill.techs"
        />
      </Motion>
    </div>

    <!-- Tech Stack -->
    <Motion
      :initial="{ opacity: 0, y: 20 }"
      :animate="{ opacity: 1, y: 0 }"
      :transition="{ duration: 0.5, delay: 0.5 }"
    >
      <h3 class="font-display text-xl font-semibold text-foreground mb-8 flex items-center gap-3">
        <span class="w-1 h-6 bg-accent rounded-full" />
        {{ t('pages.skills.fullStack') }}
      </h3>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <TechStackGroup
          v-for="group in techStack"
          :key="group.category"
          :category="group.category"
          :items="group.items"
        />
      </div>
    </Motion>
  </DetailPageLayout>
</template>
