<script setup lang="ts">
defineProps<{
  title: string
  description: string
  techs: string[]
  link: string
  linkText: string
  coverClass?: string
  logo?: string
}>()
</script>

<template>
  <div class="group bg-card border border-border rounded-xl overflow-hidden hover:border-accent/40 transition-colors duration-300">
    <!-- Cover -->
    <div
      :class="[
        'h-48 flex items-center justify-center',
        coverClass || 'bg-secondary'
      ]"
    >
      <span
        v-if="logo"
        class="h-48 w-48"
      >
        <NuxtImg
          :src="logo"
          :alt="title"
          class="object-contain h-full w-full"
          loading="lazy"
          format="webp"
        />
      </span>
      <span
        v-else
        class="font-display text-3xl font-bold text-foreground/50"
      >{{ title }}</span>
    </div>

    <!-- Content -->
    <div class="p-6">
      <h3 class="font-display text-xl font-bold text-foreground mb-2">
        {{ title }}
      </h3>
      <p class="text-sm text-muted-foreground leading-relaxed mb-4">
        {{ description }}
      </p>
      <div class="flex flex-wrap gap-2 mb-5">
        <TechTagPill
          v-for="tech in techs"
          :key="tech"
          :label="tech"
        />
      </div>
      <a
        :href="link"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center gap-2 bg-primary text-primary-foreground font-display font-medium text-sm px-5 py-2.5 rounded-lg hover:opacity-90 transition-opacity"
      >
        {{ linkText }}
        <UIcon
          name="i-mdi-open-in-new"
          class="text-base"
        />
      </a>
    </div>
  </div>
</template>
