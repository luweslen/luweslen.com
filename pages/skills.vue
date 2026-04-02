<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()
const {skillsByCategory} = useSkills()

// SEO Meta Tags
useSeoMeta({
  title: () => `${t('pages.skills.title')} | Luciano Weslen`,
  description: () => t('pages.skills.seo.description'),
  ogTitle: () => `${t('pages.skills.title')} | Luciano Weslen`,
  ogDescription: () => t('pages.skills.seo.ogDescription'),
  ogUrl: () => `https://luweslen.com${localePath('/skills')}`,
  twitterTitle: () => `${t('pages.skills.title')} | Luciano Weslen`,
  twitterDescription: () => t('pages.skills.seo.ogDescription'),
})

useHead({
  link: [
    { rel: 'canonical', href: () => `https://luweslen.com${localePath('/skills')}` },
    { rel: 'alternate', hreflang: 'pt-BR', href: 'https://luweslen.com/pt-BR/skills' },
    { rel: 'alternate', hreflang: 'en-US', href: 'https://luweslen.com/en-US/skills' },
    { rel: 'alternate', hreflang: 'x-default', href: 'https://luweslen.com/pt-BR/skills' },
  ]
})
</script>

<template>
  <DetailPageLayout :title="t('pages.skills.title')">
    <!-- Skills Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
      <SkillCard
        v-for="item in skillsByCategory"
        :key="item.category"
        :icon="item.icon"
        :title="item.title"
        :description="item.description"
        :techs="item.skills.map(skill => skill.title)"
        class="animate-fade-in"
      />
    </div>
  </DetailPageLayout>
</template>

<style scoped>
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
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
.animate-fade-in:nth-child(4) {
  animation-delay: 0.3s;
}
.animate-fade-in:nth-child(5) {
  animation-delay: 0.4s;
}
.animate-fade-in:nth-child(6) {
  animation-delay: 0.5s;
}
</style>
