<script setup lang="ts">
import { Motion } from 'motion-v'

const { t } = useI18n()

const talks = computed(() => [
  {
    year: '2026',
    title: t('talks.2026.apadrinhamento.title'),
    description: t('talks.2026.apadrinhamento.description'),
    link: 'https://palestras.luweslen.com/2026-03-27',
    linkText: t('common.viewSlides'),
  },
  {
    year: '2025',
    title: t('talks.2025.cicd.title'),
    description: t('talks.2025.cicd.description'),
    link: 'https://palestras.luweslen.com/2025-10-23',
    linkText: t('common.viewSlides'),
  },
])
</script>

<template>
  <DetailPageLayout :title="t('pages.talks.title')">
    <!-- Talks List -->
    <div class="space-y-6">
      <Motion
        v-for="(talk, index) in talks"
        :key="talk.title"
        :initial="{ opacity: 0, x: -20 }"
        :animate="{ opacity: 1, x: 0 }"
        :transition="{ duration: 0.5, delay: index * 0.1 }"
      >
        <TalkCard
          :year="talk.year"
          :title="talk.title"
          :description="talk.description"
          :link="talk.link"
          :link-text="talk.linkText"
        />
      </Motion>
    </div>
  </DetailPageLayout>
</template>
