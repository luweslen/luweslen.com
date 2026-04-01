<script setup lang="ts">
import { Motion } from 'motion-v'

const { t, tm } = useI18n()

const highlights = computed(() => [
  {
    icon: 'i-mdi-briefcase',
    title: t('highlights.experience.title'),
    description: t('highlights.experience.description'),
  },
  {
    icon: 'i-mdi-heart',
    title: t('highlights.motivation.title'),
    description: t('highlights.motivation.description'),
  },
  {
    icon: 'i-mdi-target',
    title: t('highlights.impact.title'),
    description: t('highlights.impact.description'),
  },
  {
    icon: 'i-mdi-account-group',
    title: t('highlights.goal.title'),
    description: t('highlights.goal.description'),
  },
])

interface Experience {
  period: string
  title: string
  company: string
  summary: string
  details?: string[]
}

const experiences = computed<Experience[]>(() => [
  {
    period: t('experience.timeline.zrp.chapterLeader.period'),
    title: t('experience.positions.chapterLeader'),
    company: 'ZRP Aplicações',
    summary: t('experience.timeline.zrp.chapterLeader.summary'),
    details: tm('experience.timeline.zrp.chapterLeader.details') as string[],
  },
  {
    period: t('experience.timeline.zrp.developer.period'),
    title: t('experience.positions.developer'),
    company: 'ZRP Aplicações',
    summary: t('experience.timeline.zrp.developer.summary'),
    details: tm('experience.timeline.zrp.developer.details') as string[],
  },
  {
    period: t('experience.timeline.zrp.junior.period'),
    title: t('experience.positions.junior'),
    company: 'ZRP Aplicações',
    summary: t('experience.timeline.zrp.junior.summary'),
    details: tm('experience.timeline.zrp.junior.details') as string[],
  },
  {
    period: t('experience.timeline.uird.junior.period'),
    title: t('experience.positions.junior'),
    company: 'UIRD',
    summary: t('experience.timeline.uird.junior.summary'),
    details: tm('experience.timeline.uird.junior.details') as string[],
  },
  {
    period: t('experience.timeline.uird.intern.period'),
    title: t('experience.positions.intern'),
    company: 'UIRD',
    summary: t('experience.timeline.uird.intern.summary'),
    details: tm('experience.timeline.uird.intern.details') as string[],
  },
])

interface Education {
  period: string
  title: string
  institution: string
}

const education = computed<Education[]>(() => [
  {
    period: t('education.timeline.analysis.period'),
    title: t('education.timeline.analysis.title'),
    institution: t('education.timeline.analysis.institution'),
  },
  {
    period: t('education.timeline.technician.period'),
    title: t('education.timeline.technician.title'),
    institution: t('education.timeline.technician.institution'),
  },
])
</script>

<template>
  <DetailPageLayout :title="t('pages.about.title')">
    <!-- Bio -->
    <Motion
      class="flex flex-col md:flex-row md:items-center gap-6 mb-12"
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

    <!-- Highlights -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
      <Motion
        v-for="(item, i) in highlights"
        :key="item.title"
        :initial="{ opacity: 0, y: 20 }"
        :animate="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.4, delay: i * 0.1 }"
      >
        <HighlightCard
          :icon="item.icon"
          :title="item.title"
          :description="item.description"
        />
      </Motion>
    </div>

    <!-- Experience Timeline -->
    <Motion
      class="mb-16"
      :initial="{ opacity: 0, y: 20 }"
      :animate="{ opacity: 1, y: 0 }"
      :transition="{ duration: 0.5, delay: 0.3 }"
    >
      <h3 class="font-display text-xl font-semibold text-foreground mb-8 flex items-center gap-3">
        <span class="w-1 h-6 bg-accent rounded-full" />
        <UIcon
          name="i-mdi-briefcase"
          class="text-xl text-accent"
        />
        {{ t('pages.about.professionalExperience') }}
      </h3>
      <div class="relative">
        <Motion
          v-for="(item, index) in experiences"
          :key="index"
          :initial="{ opacity: 0, x: -20 }"
          :animate="{ opacity: 1, x: 0 }"
          :transition="{ duration: 0.4, delay: index * 0.1 }"
        >
          <TimelineItem
            :period="item.period"
            :title="item.title"
            :subtitle="item.company"
            :summary="item.summary"
            :details="item.details"
            :is-last="index === experiences.length - 1"
          />
        </Motion>
      </div>
    </Motion>

    <!-- Education Timeline -->
    <Motion
      :initial="{ opacity: 0, y: 20 }"
      :animate="{ opacity: 1, y: 0 }"
      :transition="{ duration: 0.5, delay: 0.5 }"
    >
      <h3 class="font-display text-xl font-semibold text-foreground mb-8 flex items-center gap-3">
        <span class="w-1 h-6 bg-accent rounded-full" />
        <UIcon
          name="i-mdi-school"
          class="text-xl text-accent"
        />
        {{ t('pages.about.academicEducation') }}
      </h3>
      <div class="relative">
        <Motion
          v-for="(item, index) in education"
          :key="index"
          :initial="{ opacity: 0, x: -20 }"
          :animate="{ opacity: 1, x: 0 }"
          :transition="{ duration: 0.4, delay: index * 0.1 }"
        >
          <TimelineItem
            :period="item.period"
            :title="item.title"
            :subtitle="item.institution"
            :is-last="index === education.length - 1"
          />
        </Motion>
      </div>
    </Motion>
  </DetailPageLayout>
</template>
