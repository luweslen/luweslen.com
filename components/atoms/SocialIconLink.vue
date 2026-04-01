<script setup lang="ts">
defineProps<{
  icon: string
  href: string
  ariaLabel: string
}>()
</script>

<template>
  <a
    :href="href"
    target="_blank"
    rel="noopener noreferrer"
    :aria-label="ariaLabel"
    class="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent/40 transition-colors"
  >
    <UIcon
      :name="icon"
      class="text-lg"
    />
  </a>
</template>
