<script setup lang="ts">
import { ref } from 'vue'
import { Motion } from 'motion-v'

const { t } = useI18n()
const isFlipped = ref(false)
</script>

<template>
  <section class="relative min-h-screen flex items-center overflow-hidden">
    <!-- Animated background elements -->
    <div class="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />

    <!-- Floating code particles -->
    <Motion
      class="absolute top-1/4 left-[10%] text-accent/20 font-mono text-sm hidden lg:block"
      :animate="{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }"
      :transition="{ duration: 4, repeat: Infinity, ease: 'easeInOut' }"
    >
      { code: "passion" }
    </Motion>
    <Motion
      class="absolute bottom-1/3 right-[15%] text-primary/20 font-mono text-sm hidden lg:block"
      :animate="{ y: [0, 15, 0], opacity: [0.2, 0.5, 0.2] }"
      :transition="{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }"
    >
      &lt;Developer /&gt;
    </Motion>
    <Motion
      class="absolute top-1/3 right-[30%] text-muted-foreground/15 font-mono text-xs hidden lg:block"
      :animate="{ y: [0, -12, 0], opacity: [0.2, 0.4, 0.2] }"
      :transition="{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 2 }"
    >
      npm run build ✓
    </Motion>

    <div class="container relative z-10 mx-auto max-w-6xl px-6 lg:px-16">
      <div class="flex flex-col-reverse lg:flex-row items-center justify-between gap-16">
        <!-- Text -->
        <Motion
          class="flex-1 text-center lg:text-left"
          :initial="{ opacity: 0, y: 40 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.7, ease: 'easeOut' }"
        >
          <Motion
            class="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-1.5 rounded-full text-sm font-medium mb-6 border border-accent/20"
            :initial="{ opacity: 0, scale: 0.8 }"
            :animate="{ opacity: 1, scale: 1 }"
            :transition="{ duration: 0.5, delay: 0.3 }"
          >
            <UIcon
              name="i-mdi-console"
              class="text-sm"
            />
            {{ t('profession') }}
          </Motion>

          <h1 class="font-display text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter leading-none mb-4">
            <span class="text-accent">Luciano</span>
            <span class="text-foreground"> Weslen</span>
          </h1>

          <Motion
            tag="p"
            class="text-lg md:text-xl text-muted-foreground max-w-lg mb-4 leading-relaxed"
            :initial="{ opacity: 0 }"
            :animate="{ opacity: 1 }"
            :transition="{ delay: 0.4 }"
          >
            {{ t('hero.tagline') }}
          </Motion>

          <Motion
            class="flex flex-col sm:flex-row items-center gap-3 text-sm text-muted-foreground mb-10 justify-center lg:justify-start"
            :initial="{ opacity: 0 }"
            :animate="{ opacity: 1 }"
            :transition="{ delay: 0.6 }"
          >
            <span class="flex items-center gap-1.5">
              <span class="w-2 h-2 rounded-full bg-accent animate-pulse" />
              {{ t('hero.availableForChallenges') }}
            </span>
            <span class="text-border hidden sm:inline">•</span>
            <span>Node.js · TypeScript · AWS</span>
          </Motion>

          <Motion
            class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            :initial="{ opacity: 0, y: 20 }"
            :animate="{ opacity: 1, y: 0 }"
            :transition="{ delay: 0.7 }"
          >
            <a
              href="#sobre-mim"
              class="inline-flex items-center gap-2 bg-accent text-accent-foreground font-display font-semibold px-8 py-4 rounded-lg hover:bg-accent/90 transition-all text-base hover:shadow-lg hover:shadow-accent/20"
            >
              {{ t('common.aboutMe') }}
              <UIcon
                name="i-mdi-arrow-down"
                class="text-lg"
              />
            </a>
            <a
              href="#contato"
              class="inline-flex items-center gap-2 border border-border text-foreground font-display font-semibold px-8 py-4 rounded-lg hover:bg-secondary transition-all text-base"
            >
              {{ t('common.contact') }}
              <UIcon
                name="i-mdi-sparkles"
                class="text-lg"
              />
            </a>
          </Motion>
        </Motion>

        <!-- Flip Photo -->
        <Motion
          class="flex-shrink-0 cursor-pointer"
          :initial="{ opacity: 0, scale: 0.8 }"
          :animate="{ opacity: 1, scale: 1 }"
          :transition="{ duration: 0.7, delay: 0.2, ease: 'easeOut' }"
          @click="isFlipped = !isFlipped"
          @mouseenter="isFlipped = true"
          @mouseleave="isFlipped = false"
        >
          <div
            class="relative"
            style="perspective: 1000px"
          >
            <Motion
              class="relative w-52 h-52 md:w-72 md:h-72"
              :animate="{ rotateY: isFlipped ? 180 : 0 }"
              :transition="{ duration: 0.6, ease: 'easeInOut' }"
              style="transform-style: preserve-3d"
            >
              <!-- Front - Real photo -->
              <div
                class="absolute inset-0 rounded-full overflow-hidden ring-4 ring-accent/30 ring-offset-4 ring-offset-background"
                style="backface-visibility: hidden"
              >
                <img
                  src="/hero.png"
                  alt="Luciano Weslen"
                  class="w-full h-full object-cover"
                  width="288"
                  height="288"
                >
              </div>

              <!-- Back - Avatar cartoon -->
              <div
                class="absolute inset-0 rounded-full overflow-hidden ring-4 ring-primary/40 ring-offset-4 ring-offset-background bg-[hsl(35,30%,90%)]"
                style="backface-visibility: hidden; transform: rotateY(180deg)"
              >
                <img
                  src="/avatar.png"
                  alt="Luciano Weslen - Avatar"
                  class="w-full h-full object-cover"
                  width="288"
                  height="288"
                >
              </div>
            </Motion>

            <!-- Decorative glow -->
            <Motion
              class="absolute -inset-4 rounded-full blur-2xl -z-10"
              :animate="{
                background: isFlipped
                  ? 'hsl(244 99% 67% / 0.15)'
                  : 'hsl(78 100% 65% / 0.1)',
              }"
              :transition="{ duration: 0.6 }"
            />

            <!-- Hover hint -->
            <Motion
              tag="p"
              class="text-center text-xs text-muted-foreground mt-4 font-mono"
              :initial="{ opacity: 0 }"
              :animate="{ opacity: 1 }"
              :transition="{ delay: 1.5 }"
            >
              hover me ✨
            </Motion>
          </div>
        </Motion>
      </div>
    </div>
  </section>
</template>
