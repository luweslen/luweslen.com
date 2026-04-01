<script setup lang="ts">
import { Motion } from 'motion-v'

const { t } = useI18n()

const previewSkills = computed(() => [
  { icon: 'i-mdi-server', title: t('skillsPreview.backend') },
  { icon: 'i-mdi-monitor', title: t('skillsPreview.frontend') },
  { icon: 'i-mdi-sitemap', title: t('skillsPreview.architecture') },
])
</script>

<template>
  <section
    id="habilidades"
    class="py-24 px-6 lg:px-16 bg-secondary/30"
  >
    <div class="container mx-auto max-w-6xl">
      <SectionTitleBar :title="t('sections.skills')" />

      <Motion
        class="flex flex-wrap gap-4 mb-8"
        :initial="{ opacity: 0, y: 20 }"
        :animate="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.5 }"
      >
        <div
          v-for="skill in previewSkills"
          :key="skill.title"
          class="flex items-center gap-3 bg-card border border-border rounded-xl px-5 py-4"
        >
          <IconBadge
            :icon="skill.icon"
            size="sm"
          />
          <span class="font-display text-sm font-semibold text-foreground">{{ skill.title }}</span>
        </div>
        <div class="flex items-center text-muted-foreground text-sm font-medium px-4">
          {{ t('skillsPreview.moreAreas') }}
        </div>
      </Motion>

      <Motion
        :initial="{ opacity: 0 }"
        :animate="{ opacity: 1 }"
        :transition="{ delay: 0.3 }"
      >
        <CallToActionLink
          to="/habilidades"
          :label="t('common.viewMore')"
        />
      </Motion>
    </div>
  </section>
</template>
