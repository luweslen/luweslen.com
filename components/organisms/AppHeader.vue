<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { Motion, AnimatePresence } from 'motion-v'

const navItems = [
  { label: 'Início', href: '/', anchor: '#inicio', page: '/', icon: 'i-mdi-home' },
  { label: 'Sobre', href: '/#sobre-mim', anchor: '#sobre-mim', page: '/sobre', icon: 'i-mdi-account' },
  { label: 'Habilidades', href: '/#habilidades', anchor: '#habilidades', page: '/habilidades', icon: 'i-mdi-lightning-bolt' },
  { label: 'Projetos', href: '/#projetos', anchor: '#projetos', page: '/projetos', icon: 'i-mdi-folder' },
  { label: 'Palestras', href: '/talks', anchor: '#palestras', page: '/talks', icon: 'i-mdi-microphone' },
  { label: 'Contato', href: '/#contato', anchor: '#contato', page: '', icon: 'i-mdi-email' },
  { label: 'CV', href: '/curriculum', anchor: '', page: '/curriculum', icon: 'i-mdi-file-document' },
]

const scrolled = ref(false)
const mobileOpen = ref(false)
const activeSection = ref('#inicio')
const route = useRoute()
const router = useRouter()

const isHome = computed(() => route.path === '/')

const activeHref = computed(() => {
  // If on a dedicated page, find matching nav item
  if (!isHome.value) {
    const matchingItem = navItems.find((item) => item.page === route.path)
    if (matchingItem) {
      return matchingItem.href
    }
    return ''
  }

  // On home page, use active section
  const matchingItem = navItems.find((item) => item.anchor === activeSection.value)
  return matchingItem?.href || '/'
})

const handleNav = (item: typeof navItems[0]) => {
  mobileOpen.value = false

  if (isHome.value && item.anchor) {
    const el = document.querySelector(item.anchor)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
      return
    }
  }

  if (item.href.startsWith('/#')) {
    router.push({ path: '/', hash: item.href.replace('/#', '#') })
    return
  }

  router.push(item.href)
}

const updateActiveSection = () => {
  if (!isHome.value) return

  const sections = ['#inicio', '#sobre-mim', '#habilidades', '#projetos', '#palestras', '#contato'] as const
  const scrollPosition = window.scrollY + 150 // Offset for header

  for (let i = sections.length - 1; i >= 0; i--) {
    const sectionId = sections[i]
    const section = document.querySelector(sectionId || '')
    if (section) {
      const rect = section.getBoundingClientRect()
      const sectionTop = rect.top + window.scrollY

      if (scrollPosition >= sectionTop && sectionId) {
        activeSection.value = sectionId
        return
      }
    }
  }

  activeSection.value = '#inicio'
}

const onScroll = () => {
  scrolled.value = window.scrollY > 40
  updateActiveSection()
}

onMounted(() => {
  window.addEventListener('scroll', onScroll)
  updateActiveSection()
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<template>
  <header
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      scrolled
        ? 'bg-background/70 backdrop-blur-xl border-b border-border/50'
        : 'bg-transparent'
    ]"
  >
    <div class="container mx-auto max-w-6xl px-6 lg:px-16 flex items-center justify-between h-16">
      <!-- Logo -->
      <button
        class="font-display text-xl font-extrabold tracking-tighter"
        @click="handleNav(navItems[0]!)"
      >
        <span class="text-accent">L</span>
        <span class="text-foreground">W</span>
        <span class="text-accent">.</span>
      </button>

      <!-- Desktop Navigation -->
      <nav class="hidden md:flex items-center bg-secondary/40 backdrop-blur-sm rounded-full px-1.5 py-1.5 border border-border/40">
        <button
          v-for="item in navItems"
          :key="item.href"
          :class="[
            'relative flex items-center gap-1.5 font-body text-xs font-medium px-3.5 py-2 rounded-full transition-all duration-200',
            item.href === '/curriculum' && activeHref !== item.href
              ? 'text-primary-foreground'
              : activeHref === item.href
                ? 'text-accent-foreground'
                : 'text-muted-foreground hover:text-foreground'
          ]"
          @click="handleNav(item)"
        >
          <div
            v-if="item.href === '/curriculum' && activeHref !== item.href"
            class="absolute inset-0 bg-primary rounded-full"
          />
          <Motion
            v-if="activeHref === item.href"
            layout-id="activeTab"
            class="absolute inset-0 bg-accent rounded-full"
            :transition="{ type: 'spring', stiffness: 400, damping: 30 }"
          />
          <span class="relative z-10 flex items-center gap-1.5">
            <UIcon
              :name="item.icon"
              class="text-sm"
            />
            {{ item.label }}
          </span>
        </button>
      </nav>

      <!-- Actions -->
      <div class="flex items-center gap-2">
        <!-- Language Selector -->
        <LanguageButton />

        <!-- Mobile Menu Button -->
        <button
          class="md:hidden text-foreground p-2 rounded-full hover:bg-secondary/50 transition-colors"
          aria-label="Menu"
          @click="mobileOpen = !mobileOpen"
        >
          <UIcon
            v-if="mobileOpen"
            name="i-mdi-close"
            class="text-xl"
          />
          <UIcon
            v-else
            name="i-mdi-menu"
            class="text-xl"
          />
        </button>
      </div>
    </div>

    <!-- Mobile Navigation -->
    <AnimatePresence>
      <Motion
        v-if="mobileOpen"
        :initial="{ opacity: 0, height: 0 }"
        :animate="{ opacity: 1, height: 'auto' }"
        :exit="{ opacity: 0, height: 0 }"
        class="md:hidden bg-background/95 backdrop-blur-xl border-b border-border overflow-hidden"
      >
        <div class="px-6 py-4 flex flex-col gap-1">
          <button
            v-for="item in navItems"
            :key="item.href"
            :class="[
              'flex items-center gap-3 font-body text-sm px-4 py-3 rounded-xl transition-colors text-left',
              activeHref === item.href
                ? 'bg-accent/10 text-accent font-medium'
                : item.href === '/curriculum'
                  ? 'bg-primary/10 text-primary font-medium'
                  : 'text-muted-foreground hover:text-foreground hover:bg-secondary/50'
            ]"
            @click="handleNav(item)"
          >
            <UIcon
              :name="item.icon"
              class="text-base"
            />
            {{ item.label }}
          </button>
        </div>
      </Motion>
    </AnimatePresence>
  </header>
</template>
