<script setup lang="ts">
defineProps<{
  category: string
  items: string[]
}>()
</script>

<template>
  <div class="bg-card border border-border rounded-xl p-5">
    <h4 class="font-display text-sm font-semibold text-accent mb-3">
      {{ category }}
    </h4>
    <ul class="space-y-2">
      <li
        v-for="item in items"
        :key="item"
        class="flex items-center gap-2 text-sm text-muted-foreground"
      >
        <span class="w-1.5 h-1.5 rounded-full bg-accent/50" />
        {{ item }}
      </li>
    </ul>
  </div>
</template>
