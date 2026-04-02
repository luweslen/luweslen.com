<script setup lang="ts">
import { Motion } from 'motion-v'

const { t } = useI18n()
const localePath = useLocalePath()

const {skillsByCategory} = useSkills()
</script>

<template>
  <section
    id="skills"
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
          v-for="category in skillsByCategory.slice(0, 5)"
          :key="category.title"
          class="flex items-center gap-3 bg-card border border-border rounded-xl px-5 py-4"
        >
          <IconBadge
            :icon="category.icon"
            size="sm"
          />
          <span class="font-display text-sm font-semibold text-foreground">{{ category.title }}</span>
        </div>
        <div class="flex items-center text-muted-foreground text-sm font-medium px-4">
          {{ t('skillsPreview.moreAreas', [skillsByCategory.length - 5]) }}
        </div>
      </Motion>

      <Motion
        :initial="{ opacity: 0 }"
        :animate="{ opacity: 1 }"
        :transition="{ delay: 0.3 }"
      >
        <CallToActionLink
          :to="localePath('/skills')"
          :label="t('common.viewMore')"
        />
      </Motion>
    </div>
  </section>
</template>
