<template>
  <div class="bg-slate-900 w-full flex flex-col items-center">
    <cv-language-button />
  
    <cv-header />
  
    <main class="max-w-screen-md w-full items-center flex flex-col gap-5 my-8 px-4">
      <cv-education />
  
      <u-divider :ui="dividerStyles" />
  
      <cv-experience />
  
      <u-divider :ui="dividerStyles" />
  
      <cv-skills />
    </main>
  
    <cv-footer />
  </div>
</template>

<script setup lang='ts'>
const dividerStyles = ref({
  border: {
    size: { horizontal: 'border-t-2' }
  }
})
</script>
