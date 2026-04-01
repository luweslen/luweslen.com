<script setup lang="ts">
defineProps<{
  to: string
  label: string
}>()
</script>

<template>
  <NuxtLink
    :to="to"
    class="inline-flex items-center gap-2 border border-border text-foreground font-display font-medium px-6 py-3 rounded-lg hover:border-accent/40 hover:text-accent transition-all text-sm"
  >
    {{ label }}
    <UIcon
      name="i-mdi-arrow-right"
      class="text-base"
    />
  </NuxtLink>
</template>
