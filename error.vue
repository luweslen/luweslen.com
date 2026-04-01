<script setup lang="ts">
import type { NuxtError } from '#app'

defineProps<{
  error: NuxtError
}>()

const handleError = () => clearError({ redirect: '/' })
</script>

<template>
  <div class="flex min-h-screen items-center justify-center bg-background px-6">
    <div class="text-center">
      <h1 class="mb-4 text-6xl font-display font-bold text-accent">
        {{ error.status }}
      </h1>
      <p class="mb-2 text-2xl font-display font-semibold text-foreground">
        {{ error.status === 404 ? 'Página não encontrada' : 'Algo deu errado' }}
      </p>
      <p class="mb-8 text-muted-foreground">
        {{ error.status === 404
          ? 'A página que você está procurando não existe ou foi movida.'
          : error.message || 'Ocorreu um erro inesperado.'
        }}
      </p>
      <button
        class="inline-flex items-center gap-2 bg-primary text-primary-foreground font-display font-medium px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
        @click="handleError"
      >
        <UIcon
          name="i-mdi-home"
          class="text-lg"
        />
        Voltar ao início
      </button>
    </div>
  </div>
</template>
