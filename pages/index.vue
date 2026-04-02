<script setup lang="ts">
const localePath = useLocalePath()

// Hreflang for multilingual pages
useHead({
  link: [
    { rel: 'canonical', href: () => `https://luweslen.com${localePath('/')}` },
    { rel: 'alternate', hreflang: 'pt-BR', href: 'https://luweslen.com/pt-BR/' },
    { rel: 'alternate', hreflang: 'en-US', href: 'https://luweslen.com/en-US/' },
    { rel: 'alternate', hreflang: 'x-default', href: 'https://luweslen.com/pt-BR/' },
  ]
})
</script>

<template>
  <PageLayout>
    <div id="home">
      <HeroSection />
    </div>
    <AboutSection />
    <SkillsSection />
    <ProjectsSection />
    <TalksSection />
    <ContactSection />
  </PageLayout>
</template>