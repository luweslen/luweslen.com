<script setup lang="ts">
withDefaults(defineProps<{
  icon: string
  size?: 'sm' | 'md' | 'lg'
  rounded?: 'lg' | 'full'
}>(), {
  size: 'md',
  rounded: 'lg',
})

const sizeClasses = {
  sm: 'w-10 h-10 text-xl',
  md: 'w-12 h-12 text-2xl',
  lg: 'w-14 h-14 text-3xl',
}

const roundedClasses = {
  lg: 'rounded-lg',
  full: 'rounded-full',
}
</script>

<template>
  <div
    :class="[
      'bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors',
      sizeClasses[size],
      roundedClasses[rounded],
    ]"
  >
    <UIcon
      :name="icon"
      class="text-accent"
    />
  </div>
</template>
