<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()
const { talks } = useTalks()

// SEO Meta Tags
useSeoMeta({
  title: () => `${t('pages.talks.title')} | Luciano Weslen`,
  description: () => t('pages.talks.seo.description'),
  ogTitle: () => `${t('pages.talks.title')} | Luciano Weslen`,
  ogDescription: () => t('pages.talks.seo.ogDescription'),
  ogUrl: () => `https://luweslen.com${localePath('/talks')}`,
  twitterTitle: () => `${t('pages.talks.title')} | Luciano Weslen`,
  twitterDescription: () => t('pages.talks.seo.ogDescription'),
})

useHead({
  link: [
    { rel: 'canonical', href: () => `https://luweslen.com${localePath('/talks')}` },
    { rel: 'alternate', hreflang: 'pt-BR', href: 'https://luweslen.com/pt-BR/talks' },
    { rel: 'alternate', hreflang: 'en-US', href: 'https://luweslen.com/en-US/talks' },
    { rel: 'alternate', hreflang: 'x-default', href: 'https://luweslen.com/pt-BR/talks' },
  ]
})
</script>

<template>
  <DetailPageLayout :title="t('pages.talks.title')">
    <!-- Talks List -->
    <div class="space-y-6">
      <TalkCard
        v-for="talk in talks"
        :key="talk.title"
        :year="talk.year"
        :title="talk.title"
        :description="talk.description"
        :link="talk.link"
        :link-text="talk.linkText"
        class="animate-fade-in"
      />
    </div>
  </DetailPageLayout>
</template>

<style scoped>
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateX(-10px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.animate-fade-in {
  animation: fade-in 0.5s ease-out forwards;
}

.animate-fade-in:nth-child(2) {
  animation-delay: 0.1s;
}
.animate-fade-in:nth-child(3) {
  animation-delay: 0.2s;
}
</style>
