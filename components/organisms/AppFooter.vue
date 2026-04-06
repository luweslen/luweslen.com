<script setup lang="ts">
const socials = [
  { icon: 'i-mdi-web', href: 'https://www.luweslen.com', label: 'Site' },
  { icon: 'i-mdi-linkedin', href: 'https://www.linkedin.com/in/luweslen', label: 'LinkedIn' },
  { icon: 'i-mdi-github', href: 'https://www.github.com/luweslen', label: 'GitHub' },
]
</script>

<template>
  <footer class="border-t border-border py-10 px-6">
    <div class="container mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-6">
      <!-- Logo -->
      <a
        href="#home"
        class="font-display text-lg font-bold tracking-tight"
      >
        <span class="text-accent">L</span>
        <span class="text-foreground">W</span>
      </a>

      <!-- Social icons -->
      <div class="flex items-center gap-4">
        <SocialIconLink
          v-for="s in socials"
          :key="s.label"
          :icon="s.icon"
          :href="s.href"
          :aria-label="s.label"
        />
      </div>

      <!-- Copyright -->
      <p class="text-xs text-muted-foreground flex items-center gap-1">
        © {{ new Date().getFullYear() }} Feito com
        <UIcon
          name="i-mdi-heart"
          class="text-accent text-sm"
        />
        por Luciano Weslen
      </p>
    </div>
  </footer>
</template>
