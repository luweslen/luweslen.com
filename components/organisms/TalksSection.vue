<script setup lang="ts">
import { Motion } from 'motion-v'

const { t } = useI18n()
const localePath = useLocalePath()
const { latestTalk } = useTalks()

</script>

<template>
  <section
    id="talks"
    class="py-24 px-6 lg:px-16 bg-secondary/30"
  >
    <div class="container mx-auto max-w-6xl">
      <SectionTitleBar :title="t('sections.talks')" />

      <Motion
        class="flex items-start gap-5 bg-card border border-border rounded-xl p-6 mb-8"
        :initial="{ opacity: 0, y: 20 }"
        :animate="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.5 }"
      >
        <IconBadge
          icon="i-mdi-presentation"
          size="sm"
        />
        <div>
          <span class="font-display text-sm font-semibold text-accent block">{{ latestTalk[0]?.year }}</span>
          <h3 class="font-display text-base font-medium text-foreground">
            {{ latestTalk[0]?.title }}
          </h3>
          <p class="text-sm text-muted-foreground mt-1">
            +1 {{ t('common.talk') }}
          </p>
        </div>
      </Motion>

      <Motion
        :initial="{ opacity: 0 }"
        :animate="{ opacity: 1 }"
        :transition="{ delay: 0.3 }"
      >
        <CallToActionLink
          :to="localePath('/talks')"
          :label="t('common.viewMore')"
        />
      </Motion>
    </div>
  </section>
</template>
