<script setup lang="ts">
import { Motion } from 'motion-v'

const { t } = useI18n()

const projects = computed(() => [
  { title: 'COMM.PIX', description: t('projects.commpix.shortDescription') },
  { title: 'SIMPLE', description: t('projects.simple.shortDescription') },
])
</script>

<template>
  <section
    id="projetos"
    class="py-24 px-6 lg:px-16"
  >
    <div class="container mx-auto max-w-6xl">
      <SectionTitleBar :title="t('sections.projects')" />

      <Motion
        class="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8"
        :initial="{ opacity: 0, y: 20 }"
        :animate="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.5 }"
      >
        <div
          v-for="project in projects"
          :key="project.title"
          class="bg-card border border-border rounded-xl p-6"
        >
          <h3 class="font-display text-lg font-bold text-foreground mb-2">
            {{ project.title }}
          </h3>
          <p class="text-sm text-muted-foreground">
            {{ project.description }}
          </p>
        </div>
      </Motion>

      <Motion
        :initial="{ opacity: 0 }"
        :animate="{ opacity: 1 }"
        :transition="{ delay: 0.3 }"
      >
        <CallToActionLink
          to="/projetos"
          :label="t('common.viewMore')"
        />
      </Motion>
    </div>
  </section>
</template>
