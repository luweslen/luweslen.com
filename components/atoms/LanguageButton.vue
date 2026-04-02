<template>
  <div class="relative">
    <button
      class="flex items-center gap-1.5 text-xs font-medium font-body px-3 py-2 rounded-full border border-border/40 bg-secondary/40 backdrop-blur-sm text-muted-foreground hover:text-foreground transition-colors"
      aria-label="Selecionar idioma"
      @click="langOpen = !langOpen"
    >
      <UIcon
        name="i-mdi-translate"
        class="text-sm"
      />
      <span>{{ currentLangLabel }}</span>
    </button>

    <Transition
      enter-active-class="transition duration-150 ease-out"
      enter-from-class="opacity-0 -translate-y-1 scale-95"
      enter-to-class="opacity-100 translate-y-0 scale-100"
      leave-active-class="transition duration-100 ease-in"
      leave-from-class="opacity-100 translate-y-0 scale-100"
      leave-to-class="opacity-0 -translate-y-1 scale-95"
    >
      <div
        v-if="langOpen"
        class="absolute right-0 top-full mt-2 bg-card border border-border rounded-xl shadow-xl overflow-hidden min-w-[140px]"
      >
        <NuxtLink
          v-for="lang in languages"
          :key="lang.code"
          :to="switchLocalePath(lang.code)"
          :class="[
            'w-full flex items-center gap-3 px-4 py-2.5 text-sm font-body transition-colors',
            locale === lang.code
              ? 'bg-accent/10 text-accent'
              : 'text-muted-foreground hover:bg-secondary/50 hover:text-foreground'
          ]"
          @click="langOpen = false"
        >
          <span class="font-display font-semibold text-xs w-6">{{ lang.label }}</span>
          <span>{{ lang.full }}</span>
        </NuxtLink>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'

enum LocaleCode {
  PT_BR = 'pt-BR',
  EN_US = 'en-US'
}

const { t, locale } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const langOpen = ref(false)

const languages = computed(() => [
  { code: LocaleCode.PT_BR, label: 'PT', full: t('common.portuguese') },
  { code: LocaleCode.EN_US, label: 'EN', full: t('common.english') },
])

const currentLangLabel = computed(() => {
  const lang = languages.value.find(l => l.code === locale.value)
  return lang?.label || 'PT'
})

const handleClickOutside = (event: MouseEvent) => {
  const target = event.target as HTMLElement
  if (!target.closest('.relative')) {
    langOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>
