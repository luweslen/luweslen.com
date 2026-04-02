<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()
</script>

<template>
  <NuxtLink
    :to="localePath('/')"
    class="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
  >
    <UIcon
      name="i-mdi-arrow-left"
      class="text-base"
    />
    {{ t('common.backToHome') }}
  </NuxtLink>
</template>
