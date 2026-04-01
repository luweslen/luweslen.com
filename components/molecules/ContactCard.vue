<script setup lang="ts">
defineProps<{
  icon: string
  label: string
  value: string
  href: string
}>()
</script>

<template>
  <a
    :href="href"
    target="_blank"
    rel="noopener noreferrer"
    class="group flex flex-col items-center gap-3 bg-card border border-border rounded-xl p-6 hover:border-accent/40 transition-colors duration-300 text-center"
  >
    <IconBadge
      :icon="icon"
      size="md"
      rounded="full"
    />
    <span class="font-display font-semibold text-foreground text-sm">
      {{ label }}
    </span>
    <span class="text-sm text-muted-foreground">
      {{ value }}
    </span>
  </a>
</template>
