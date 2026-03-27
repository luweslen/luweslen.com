<template>
  <div class="talks-page max-w-2xl mx-auto py-8 px-4">
    <cv-language-button />
    <h1 class="text-3xl font-bold mb-8">
      {{ $t('talks.title') }}
    </h1>
    <section>
      <h2 class="text-2xl font-semibold mt-6 mb-2">
        2026
      </h2>
      <ul class="list-disc ml-6">
        <li>
          <a
            href="https://palestras.luweslen.com/2026-03-27"
            target="_blank"
            class="text-blue-600 hover:underline"
          >
            {{ $t('talks.2026.apadrinhamento') }}
          </a>
        </li>
      </ul>
    </section>
    <section>
      <h2 class="text-2xl font-semibold mt-6 mb-2">
        2025
      </h2>
      <ul class="list-disc ml-6">
        <li>
          <a
            href="https://palestras.luweslen.com/2025-10-23"
            target="_blank"
            class="text-blue-600 hover:underline"
          >
            {{ $t('talks.2025.cicd') }}
          </a>
        </li>
      </ul>
    </section>
  </div>
</template>

<script setup lang="ts">
// No script logic needed for static talks page
</script>

<style scoped>
.talks-page {
  font-family: inherit;
}
</style>
