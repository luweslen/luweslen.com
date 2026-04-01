<script setup lang="ts">
withDefaults(defineProps<{
  title: string
  tag?: 'h1' | 'h2' | 'h3'
}>(), {
  tag: 'h2',
})
</script>

<template>
  <div class="flex items-center gap-4 mb-8">
    <div class="border-l-4 border-accent h-8" />
    <component
      :is="tag"
      class="font-display text-2xl md:text-3xl font-bold text-foreground"
    >
      {{ title }}
    </component>
  </div>
</template>
