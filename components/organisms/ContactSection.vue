<script setup lang="ts">
import { Motion } from 'motion-v'

const { t } = useI18n()

const contacts = [
  {
    icon: 'i-mdi-web',
    label: 'Site',
    href: 'https://www.luweslen.com',
    display: 'luweslen.com',
  },
  {
    icon: 'i-mdi-linkedin',
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/luweslen',
    display: '/in/luweslen',
  },
  {
    icon: 'i-mdi-instagram',
    label: 'Instagram',
    href: 'https://www.instagram.com/luweslen',
    display: '@luweslen',
  },
]
</script>

<template>
  <section
    id="contact"
    class="py-24 px-6 lg:px-16"
  >
    <div class="container mx-auto max-w-6xl">
      <SectionTitleBar :title="t('sections.contact')" />

      <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <Motion
          v-for="(contact, index) in contacts"
          :key="contact.label"
          :initial="{ opacity: 0, y: 20 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.5, delay: index * 0.1 }"
        >
          <ContactCard
            :icon="contact.icon"
            :label="contact.label"
            :value="contact.display"
            :href="contact.href"
          />
        </Motion>
      </div>
    </div>
  </section>
</template>
