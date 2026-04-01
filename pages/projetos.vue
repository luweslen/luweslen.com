<script setup lang="ts">
import { Motion } from 'motion-v'

const { t } = useI18n()

const projects = computed(() => [
  {
    title: 'COMM.PIX',
    description: t('projects.commpix.description'),
    link: 'https://www.commpix.com/',
    linkText: t('common.viewDetails'),
    techs: ['Node.js', 'NestJS', 'PostgreSQL', 'AWS'],
  },
  {
    title: 'SIMPLE',
    description: t('projects.simple.description'),
    link: 'https://iamsimple.com.br/frente',
    linkText: t('common.viewDetails'),
    techs: ['Vue.js', 'TypeScript', 'MongoDB'],
  },
])
</script>

<template>
  <DetailPageLayout :title="t('pages.projects.title')">
    <!-- Projects Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <Motion
        v-for="(project, index) in projects"
        :key="project.title"
        :initial="{ opacity: 0, y: 30 }"
        :animate="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.5, delay: index * 0.15 }"
      >
        <ProjectCard
          :title="project.title"
          :description="project.description"
          :techs="project.techs"
          :link="project.link"
          :link-text="project.linkText"
        />
      </Motion>
    </div>
  </DetailPageLayout>
</template>
