<script setup lang="ts">
defineProps<{
  icon: string
  title: string
  description: string
  techs: string[]
}>()
</script>

<template>
  <div class="group bg-card border border-border rounded-xl p-6 hover:border-accent/40 transition-colors duration-300">
    <IconBadge
      :icon="icon"
      class="mb-4"
    />
    <h3 class="font-display text-lg font-semibold text-foreground mb-2">
      {{ title }}
    </h3>
    <p class="text-sm text-muted-foreground leading-relaxed mb-4">
      {{ description }}
    </p>
    <div class="flex flex-wrap gap-2">
      <TechTagPill
        v-for="tech in techs"
        :key="tech"
        :label="tech"
      />
    </div>
  </div>
</template>
