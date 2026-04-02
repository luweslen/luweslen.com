<script setup lang="ts">
import { Motion } from 'motion-v'

const { t } = useI18n()
const localePath = useLocalePath()
</script>

<template>
  <section
    id="about"
    class="py-24 px-6 lg:px-16"
  >
    <div class="container mx-auto max-w-6xl">
      <SectionTitleBar :title="t('sections.about')" />

      <Motion
        class="flex flex-col md:flex-row md:items-center gap-6 mb-8"
        :initial="{ opacity: 0, y: 20 }"
        :animate="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.5 }"
      >
        <StatBadge
          value="5+"
          :description="t('common.yearsExperience')"
        />
        <p class="text-lg text-secondary-foreground leading-relaxed">
          {{ t('bio.intro') }}
          <span class="text-accent font-semibold">{{ t('bio.company') }}</span>{{ t('bio.description') }}
        </p>
      </Motion>

      <Motion
        :initial="{ opacity: 0 }"
        :animate="{ opacity: 1 }"
        :transition="{ delay: 0.3 }"
      >
        <CallToActionLink
          :to="localePath('/about')"
          :label="t('common.viewMore')"
        />
      </Motion>
    </div>
  </section>
</template>
