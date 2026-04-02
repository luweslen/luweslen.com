<script setup lang="ts">
const { locale } = useI18n()

// Structured Data - Person & Organization
useSchemaOrg([
  {
    '@type': 'Person',
    name: 'Luciano Weslen',
    url: 'https://luweslen.com',
    image: 'https://luweslen.com/avatar.png',
    jobTitle: 'Software Developer',
    worksFor: {
      '@type': 'Organization',
      name: 'ZRP',
    },
    alumniOf: [
      {
        '@type': 'EducationalOrganization',
        name: 'Instituto Federal do Paraná',
      },
    ],
    knowsAbout: [
      'Node.js',
      'TypeScript',
      'NestJS',
      'Vue.js',
      'React',
      'PostgreSQL',
      'MongoDB',
      'AWS',
      'Software Architecture',
      'Backend Development',
    ],
    sameAs: [
      'https://github.com/luweslen',
      'https://linkedin.com/in/luweslen',
    ],
  },
  {
    '@type': 'WebSite',
    name: 'Luciano Weslen',
    url: 'https://luweslen.com',
    inLanguage: () => locale.value,
  },
])
</script>

<template>
  <UApp>
    <NuxtLayout class="w-full">
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>

