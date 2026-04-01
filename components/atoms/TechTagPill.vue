<script setup lang="ts">
defineProps<{
  label: string
}>()
</script>

<template>
  <span class="text-xs bg-accent/10 text-accent px-2.5 py-1 rounded-full font-medium">
    {{ label }}
  </span>
</template>
