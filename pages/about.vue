<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()

// SEO Meta Tags
useSeoMeta({
  title: () => `${t('pages.about.title')} | Luciano Weslen`,
  description: () => t('pages.about.seo.description'),
  ogTitle: () => `${t('pages.about.title')} | Luciano Weslen`,
  ogDescription: () => t('pages.about.seo.ogDescription'),
  ogUrl: () => `https://luweslen.com${localePath('/about')}`,
  twitterTitle: () => `${t('pages.about.title')} | Luciano Weslen`,
  twitterDescription: () => t('pages.about.seo.ogDescription'),
})

useHead({
  link: [
    { rel: 'canonical', href: () => `https://luweslen.com${localePath('/about')}` },
    { rel: 'alternate', hreflang: 'pt-BR', href: 'https://luweslen.com/pt-BR/about' },
    { rel: 'alternate', hreflang: 'en-US', href: 'https://luweslen.com/en-US/about' },
    { rel: 'alternate', hreflang: 'x-default', href: 'https://luweslen.com/pt-BR/about' },
  ]
})

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

const experiences = useExperiences()
const education = useEducation()
</script>

<template>
  <DetailPageLayout :title="t('pages.about.title')">
    <!-- Bio -->
    <div class="flex flex-col md:flex-row md:items-center gap-6 mb-12 animate-fade-in">
      <StatBadge
        value="5+"
        :description="t('common.yearsExperience')"
      />
      <p class="text-lg text-secondary-foreground leading-relaxed">
        {{ t('bio.intro') }}
        <span class="text-accent font-semibold">{{ t('bio.company') }}</span>{{ t('bio.description') }}
      </p>
    </div>

    <!-- Highlights -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
      <HighlightCard
        v-for="item in highlights"
        :key="item.title"
        :icon="item.icon"
        :title="item.title"
        :description="item.description"
        class="animate-fade-in"
      />
    </div>

    <!-- Experience Timeline -->
    <div class="mb-16 animate-fade-in delay-100">
      <h3 class="font-display text-xl font-semibold text-foreground mb-8 flex items-center gap-3">
        <span class="w-1 h-6 bg-accent rounded-full" />
        <UIcon
          name="i-mdi-briefcase"
          class="text-xl text-accent"
        />
        {{ t('pages.about.professionalExperience') }}
      </h3>
      <div class="relative">
        <TimelineItem
          v-for="(item, index) in experiences"
          :key="index"
          :period="item.period"
          :title="item.title"
          :subtitle="item.company"
          :summary="item.summary"
          :details="item.details"
          :is-last="index === experiences.length - 1"
        />
      </div>
    </div>

    <!-- Education Timeline -->
    <div class="animate-fade-in delay-200">
      <h3 class="font-display text-xl font-semibold text-foreground mb-8 flex items-center gap-3">
        <span class="w-1 h-6 bg-accent rounded-full" />
        <UIcon
          name="i-mdi-school"
          class="text-xl text-accent"
        />
        {{ t('pages.about.academicEducation') }}
      </h3>
      <div class="relative">
        <TimelineItem
          v-for="(item, index) in education"
          :key="index"
          :period="item.period"
          :title="item.title"
          :subtitle="item.institution"
          :is-last="index === education.length - 1"
        />
      </div>
    </div>
  </DetailPageLayout>
</template>

<style scoped>
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 0.4s ease-out forwards;
}

.delay-100 {
  animation-delay: 0.1s;
}

.delay-200 {
  animation-delay: 0.2s;
}
</style>

