<script setup lang="ts">
defineProps<{
  icon: string
  title: string
  description: string
}>()
</script>

<template>
  <div class="group bg-card border border-border rounded-xl p-6 hover:border-accent/30 transition-colors">
    <div class="flex items-start gap-4">
      <div class="p-2.5 rounded-lg bg-accent/10 text-accent group-hover:bg-accent/20 transition-colors">
        <UIcon
          :name="icon"
          class="text-xl"
        />
      </div>
      <div>
        <h3 class="font-display font-semibold text-foreground mb-1.5">
          {{ title }}
        </h3>
        <p class="text-sm text-muted-foreground leading-relaxed">
          {{ description }}
        </p>
      </div>
    </div>
  </div>
</template>
