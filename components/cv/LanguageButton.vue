<template>
  <u-dropdown
    class="fixed bottom-4 right-4"
    :items="languages"
    mode="click"
    :popper="{ placement: 'bottom-start' }"
  >
    <u-button
      trailing-icon="i-mdi-language"
      color="sky"
      variant="soft"
    />
  </u-dropdown>
</template>

<script setup lang="ts">
const { locale } = useI18n()

const languages = ref([
  [
    {
      label: 'Português',
      icon: 'i-twemoji-flag-brazil',
      value: 'pt-BR',
      click: () => {
        locale.value = 'pt-BR'
      }
    },
    {
      label: 'Inglês',
      icon: 'i-twemoji-flag-united-states',
      value: 'en-US',
      click: () => {
        locale.value = 'en-US'
      }
    }
  ]
])
</script>