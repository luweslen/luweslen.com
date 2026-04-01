<script setup lang="ts">
import { ref } from 'vue'

const props = withDefaults(defineProps<{
  period: string
  title: string
  subtitle: string
  summary?: string
  details?: string[]
  isLast?: boolean
}>(), {
  isLast: false,
})

const { t } = useI18n()

const isOpen = ref(false)

const toggle = () => {
  isOpen.value = !isOpen.value
}
</script>

<template>
  <div
    class="relative pl-8"
    :class="{ 'pb-8': !isLast }"
  >
    <!-- Timeline line -->
    <div
      v-if="!isLast"
      class="absolute left-[7px] top-3 bottom-0 w-px bg-border"
    />
    <!-- Timeline dot -->
    <div class="absolute left-0 top-2.5 w-[15px] h-[15px] rounded-full border-2 border-accent bg-background z-10" />

    <div class="bg-card border border-border rounded-xl p-5 hover:border-accent/30 transition-colors">
      <span class="text-xs font-medium text-accent">{{ period }}</span>
      <h4 class="font-display font-semibold text-foreground mt-1">
        {{ title }}
      </h4>
      <p class="text-sm text-muted-foreground mb-2">
        {{ subtitle }}
      </p>
      <p
        v-if="summary"
        class="text-sm text-secondary-foreground leading-relaxed"
      >
        {{ summary }}
      </p>

      <template v-if="details && details.length > 0">
        <button
          class="mt-3 inline-flex items-center gap-1.5 text-xs border border-border rounded-lg px-3 py-1.5 text-muted-foreground hover:text-foreground hover:border-accent/40 transition-colors"
          @click="toggle"
        >
          {{ isOpen ? t('common.viewLess') : t('common.viewMore') }}
          <UIcon
            name="i-mdi-chevron-down"
            :class="[
              'text-sm transition-transform duration-200',
              isOpen ? 'rotate-180' : ''
            ]"
          />
        </button>

        <ul
          v-if="isOpen"
          class="mt-3 space-y-2"
        >
          <li
            v-for="(detail, dIndex) in details"
            :key="dIndex"
            class="flex items-start gap-2 text-sm text-secondary-foreground"
          >
            <span class="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
            <span class="leading-relaxed">{{ detail }}</span>
          </li>
        </ul>
      </template>
    </div>
  </div>
</template>
