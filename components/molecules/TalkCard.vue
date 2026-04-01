<script setup lang="ts">
defineProps<{
  year: string
  title: string
  description?: string
  link?: string
  linkText?: string
}>()
</script>

<template>
  <div class="bg-card border border-border rounded-xl p-6 hover:border-accent/40 transition-colors duration-300">
    <div class="flex items-start gap-5">
      <IconBadge
        icon="i-mdi-presentation"
        size="sm"
      />
      <div>
        <span class="font-display text-sm font-semibold text-accent block">{{ year }}</span>
        <h3 class="font-display text-base font-medium text-foreground">
          {{ title }}
        </h3>
        <p
          v-if="description"
          class="text-sm text-muted-foreground mt-1"
        >
          {{ description }}
        </p>
        <a
          v-if="link && linkText"
          :href="link"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 text-sm text-accent hover:underline mt-3"
        >
          {{ linkText }}
          <UIcon
            name="i-mdi-open-in-new"
            class="text-base"
          />
        </a>
      </div>
    </div>
  </div>
</template>
