<template>
  <div class="flex gap-1 items-center justify-start">
    <u-icon
      name="i-mdi-calendar"
      class="bg-slate-500"
    />
    <span>
      {{ startDate }} - {{ endDate }}
    </span>
  </div>
</template>

<script setup lang="ts">
type TProps = {
  start: string;
  end?: string;
}

const props = defineProps<TProps>()

const { d: $d, t: $t } = useI18n()

const endDate = computed(() => {
  return props.end ? $d(new Date(props.end), 'short') : $t('current').toLowerCase()
})

const startDate = computed(() => {
  return $d(new Date(props.start), 'short')
})
</script>