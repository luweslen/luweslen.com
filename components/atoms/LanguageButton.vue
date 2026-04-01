<template>
  <UDropdownMenu
    class="fixed bottom-4 right-4 z-50"
    :items="languages"
  >
    <UButton
      trailing-icon="i-mdi-translate"
      variant="soft"
      color="neutral"
    />
  </UDropdownMenu>
</template>

<script setup lang="ts">
const { locale } = useI18n()

const languages = [
  {
    label: 'Português',
    icon: 'i-twemoji-flag-brazil',
    onSelect: () => {
      locale.value = 'pt-BR'
    }
  },
  {
    label: 'English',
    icon: 'i-twemoji-flag-united-states',
    onSelect: () => {
      locale.value = 'en-US'
    }
  }
]
</script>
