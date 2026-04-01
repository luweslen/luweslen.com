<script setup lang="ts">
defineProps<{
  value: string
  description: string
}>()
</script>

<template>
  <div class="flex items-center gap-4 shrink-0 bg-card border border-border rounded-xl px-6 py-4">
    <span class="font-display text-5xl md:text-6xl font-bold text-accent">{{ value }}</span>
    <p class="text-sm text-muted-foreground leading-snug">
      {{ description }}
    </p>
  </div>
</template>
