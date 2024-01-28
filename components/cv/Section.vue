<template>
  <section class="w-full flex flex-col md:flex-row gap-2 justify-between text-sm">
    <h4 class="min-w-40 font-bold text-xl">
      {{ props.title }}
    </h4>
    <slot name="content" />
  </section>
</template>

<script setup lang="ts">
type TProps = {
  title: string;
}
const props = defineProps<TProps>()
</script>