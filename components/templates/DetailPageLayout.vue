<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template>
  <main class="min-h-screen bg-background">
    <AppHeader />

    <section class="pt-32 pb-24 px-6 lg:px-16">
      <div class="container mx-auto max-w-6xl">
        <BackToHomeLink />
        <SectionTitleBar
          :title="title"
          tag="h1"
        />
        <slot />
      </div>
    </section>

    <AppFooter />
  </main>
</template>
