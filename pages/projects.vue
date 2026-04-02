<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()
const { projects } = useProjects()

// SEO Meta Tags
useSeoMeta({
  title: () => `${t('pages.projects.title')} | Luciano Weslen`,
  description: () => t('pages.projects.seo.description'),
  ogTitle: () => `${t('pages.projects.title')} | Luciano Weslen`,
  ogDescription: () => t('pages.projects.seo.ogDescription'),
  ogUrl: () => `https://luweslen.com${localePath('/projects')}`,
  twitterTitle: () => `${t('pages.projects.title')} | Luciano Weslen`,
  twitterDescription: () => t('pages.projects.seo.ogDescription'),
})

useHead({
  link: [
    { rel: 'canonical', href: () => `https://luweslen.com${localePath('/projects')}` },
    { rel: 'alternate', hreflang: 'pt-BR', href: 'https://luweslen.com/pt-BR/projects' },
    { rel: 'alternate', hreflang: 'en-US', href: 'https://luweslen.com/en-US/projects' },
    { rel: 'alternate', hreflang: 'x-default', href: 'https://luweslen.com/pt-BR/projects' },
  ]
})
</script>

<template>
  <DetailPageLayout :title="t('pages.projects.title')">
    <!-- Projects Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <ProjectCard
        v-for="project in projects"
        :key="project.title"
        :title="project.title"
        :description="project.description"
        :techs="project.techs"
        :link="project.link"
        :link-text="project.linkText"
        :logo="project.logo"
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
</style>
