<script setup lang="ts">
import type { SkillLevel } from '~/types'
import { track } from '@vercel/analytics'
const { t } = useI18n()
const localePath = useLocalePath()

// SEO Meta Tags
useSeoMeta({
  title: () => `${t('pages.curriculum.title')} | Luciano Weslen`,
  description: () => t('pages.curriculum.seo.description'),
  ogTitle: () => `${t('pages.curriculum.title')} | Luciano Weslen`,
  ogDescription: () => t('pages.curriculum.seo.ogDescription'),
  ogUrl: () => `https://luweslen.com${localePath('/curriculum')}`,
  robots: 'noindex, nofollow',
})

useHead({
  link: [
    { rel: 'canonical', href: () => `https://luweslen.com${localePath('/curriculum')}` },
    { rel: 'alternate', hreflang: 'pt-BR', href: 'https://luweslen.com/pt-BR/curriculum' },
    { rel: 'alternate', hreflang: 'en-US', href: 'https://luweslen.com/en-US/curriculum' },
    { rel: 'alternate', hreflang: 'x-default', href: 'https://luweslen.com/pt-BR/curriculum' },
  ]
})

const generating = ref(false)
const cvRef = ref<HTMLDivElement | null>(null)

const handleDownload = async () => {
  if (!cvRef.value) return
  generating.value = true

  try {
    track('download_cv', {
      page: 'curriculum',
      format: 'pdf'
    })

    const html2canvas = (await import('html2canvas-pro')).default
    const { jsPDF } = await import('jspdf')

    const canvas = await html2canvas(cvRef.value, {
      scale: 2,
      useCORS: true,
      backgroundColor: '#ffffff',
      windowWidth: 1280,
    })

    const imgData = canvas.toDataURL('image/jpeg', 0.95)
    const pdf = new jsPDF('p', 'mm', 'a4')
    const pageWidth = pdf.internal.pageSize.getWidth()
    const pageHeight = pdf.internal.pageSize.getHeight()
    const scale = Math.min(pageWidth / canvas.width, pageHeight / canvas.height)
    const imgWidth = canvas.width * scale
    const imgHeight = canvas.height * scale

    pdf.addImage(imgData, 'JPEG', (pageWidth - imgWidth) / 2, 0, imgWidth, imgHeight)
    pdf.save('Luciano_Weslen_CV.pdf')
  }
  catch (err) {
    console.error('PDF generation failed:', err)
  }
  finally {
    generating.value = false
  }
}

const educationData = useEducation()
const educations = computed(() => educationData.value.map(edu => ({
  institution: edu.institution.split(' – ')[0],
  course: edu.title,
  period: edu.period,
})))

const experiences = useExperiences({ format: 'cv' })

const levelPercent: Record<SkillLevel, number> = {
  frequent: 100,
  occasional: 60,
  sometimes: 30,
}

const { skillsByCategory } = useSkills()

const skillLegend = computed(() => [
  { label: t('skills.legend.frequent'), pct: 100 },
  { label: t('skills.legend.occasional'), pct: 60 },
  { label: t('skills.legend.sporadic'), pct: 30 },
])
</script>

<template>
  <div class="min-h-screen bg-[hsl(240,5%,90%)] py-8 px-4 print:bg-white print:p-0">
    <!-- Top bar with back link and download button -->
    <div class="max-w-[210mm] mx-auto mb-4 flex justify-between print:hidden">
      <NuxtLink
        :to="localePath('/')"
        class="inline-flex items-center gap-2 text-sm text-[hsl(240,5%,40%)] hover:text-[hsl(240,10%,12%)] transition-colors"
      >
        <UIcon
          mode="svg"
          name="i-mdi-arrow-left"
          class="text-base"
        />
        {{ t('common.backToHome') }}
      </NuxtLink>
      <button
        :disabled="generating"
        class="inline-flex items-center gap-2 bg-accent text-accent-foreground font-medium px-4 py-2 rounded-lg hover:bg-accent/90 transition-colors text-sm disabled:opacity-50"
        @click="handleDownload"
      >
        <UIcon
          mode="svg"
          name="i-mdi-download"
          class="text-base"
        />
        {{ generating ? t('common.generatingPdf') : t('common.downloadPdf') }}
      </button>
    </div>

    <!-- CV Content -->
    <div
      ref="cvRef"
      class="max-w-[210mm] mx-auto bg-white shadow-xl print:shadow-none"
      style="font-family: 'DM Sans', sans-serif"
    >
      <!-- Header -->
      <div
        class="px-10 pt-7 pb-6 text-center"
        style="background: linear-gradient(135deg, hsl(240, 10%, 12%) 0%, hsl(240, 8%, 20%) 100%)"
      >
        <NuxtLink
          :to="localePath('/')"
          class="inline-block text-white no-underline hover:opacity-80 transition-opacity print:pointer-events-none"
        >
          <h1
            class="text-3xl font-extrabold tracking-tight text-white mb-1"
            style="font-family: 'Sora', sans-serif"
          >
            Luciano Weslen da Silva
          </h1>
        </NuxtLink>
        <p class="text-[hsl(240,5%,70%)] text-sm mb-3">
          {{ t('cvProfession') }}
        </p>

        <div class="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-[hsl(240,5%,70%)]">
          <span class="flex items-center gap-1.5">
            <UIcon
              mode="svg"
              name="i-mdi-map-marker"
              class="text-accent text-sm"
            />
            Londrina, Brasil
          </span>
          <a
            href="mailto:luciano.weslen1@gmail.com"
            class="flex items-center gap-1.5 hover:text-white transition-colors no-underline text-[hsl(240,5%,70%)]"
          >
            <UIcon
              mode="svg"
              name="i-mdi-email"
              class="text-accent text-sm"
            />
            luciano.weslen1@gmail.com
          </a>
          <span class="flex items-center gap-1.5">
            <UIcon
              mode="svg"
              name="i-mdi-eye-outline"
              class="text-accent text-sm"
            />
            {{ t('cvDisability') }}
          </span>
        </div>

        <div class="flex items-center justify-center gap-4 mt-2 text-xs text-[hsl(240,5%,70%)]">
          <a
            href="https://linkedin.com/in/luweslen"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center gap-1.5 hover:text-white transition-colors no-underline text-[hsl(240,5%,70%)]"
          >
            <UIcon
              mode="svg"
              name="i-mdi-linkedin"
              class="text-accent text-sm"
            />
            /luweslen
          </a>
          <a
            href="https://github.com/luweslen"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center gap-1.5 hover:text-white transition-colors no-underline text-[hsl(240,5%,70%)]"
          >
            <UIcon
              mode="svg"
              name="i-mdi-github"
              class="text-accent text-sm"
            />
            /luweslen
          </a>
        </div>
      </div>

      <!-- Body -->
      <div class="px-10 py-6 space-y-6">
        <!-- Educação -->
        <div>
          <h2
            class="text-lg font-bold text-[hsl(240,10%,12%)] mb-3 pb-1.5 border-b-2 border-accent"
            style="font-family: 'Sora', sans-serif"
          >
            {{ t('education.title') }}
          </h2>
          <div class="space-y-3">
            <div
              v-for="edu in educations"
              :key="edu.course"
              class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1"
            >
              <div>
                <p class="font-semibold text-sm text-[hsl(240,10%,12%)]">
                  {{ edu.institution }}
                </p>
                <p class="text-xs text-[hsl(240,5%,45%)]">
                  {{ edu.course }}
                </p>
              </div>
              <span class="flex items-center gap-1.5 text-xs text-[hsl(240,5%,45%)] whitespace-nowrap shrink-0">
                <UIcon
                  mode="svg"
                  name="i-mdi-calendar"
                  class="text-xs"
                />
                {{ edu.period }}
              </span>
            </div>
          </div>
        </div>

        <!-- Experiência -->
        <div>
          <h2
            class="text-lg font-bold text-[hsl(240,10%,12%)] mb-3 pb-1.5 border-b-2 border-accent"
            style="font-family: 'Sora', sans-serif"
          >
            {{ t('experience.title') }}
          </h2>
          <div class="space-y-4">
            <div
              v-for="exp in experiences"
              :key="exp.company"
            >
              <p class="font-semibold text-sm text-[hsl(240,10%,12%)] mb-1">
                {{ exp.company }}
              </p>
              <div class="flex flex-wrap gap-1.5 mb-2">
                <span
                  v-for="tag in exp.tags"
                  :key="tag"
                  class="px-2.5 py-0.5 rounded-full text-[10px] font-medium border"
                  style="color: hsl(78, 100%, 35%); border-color: hsl(78, 100%, 65%); background-color: hsl(78, 100%, 95%)"
                >
                  {{ tag }}
                </span>
              </div>
              <div class="space-y-1">
                <div
                  v-for="role in exp.roles"
                  :key="role.title"
                  class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-0.5"
                >
                  <p class="text-xs text-[hsl(240,10%,20%)]">
                    <span class="text-[hsl(78,100%,32%)] font-mono mr-1">>_</span>
                    {{ role.title }}
                  </p>
                  <span class="flex items-center gap-1.5 text-[11px] text-[hsl(240,5%,45%)] whitespace-nowrap">
                    <UIcon
                      mode="svg"
                      name="i-mdi-calendar"
                      class="text-[10px]"
                    />
                    {{ role.period }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Habilidades -->
        <div>
          <h2
            class="text-lg font-bold text-[hsl(240,10%,12%)] mb-3 pb-1.5 border-b-2 border-accent"
            style="font-family: 'Sora', sans-serif"
          >
            {{ t('skills.title') }}
          </h2>
          <div class="space-y-3">
            <!-- Legenda -->
            <div class="flex flex-wrap items-center gap-x-6 gap-y-2">
              <span class="text-xs text-[hsl(240,5%,45%)] font-medium">Legenda:</span>
              <span
                v-for="item in skillLegend"
                :key="item.label"
                class="flex items-center gap-1.5 text-[10px] text-[hsl(240,5%,45%)]"
              >
                <span class="inline-flex w-10 h-1.5 rounded-full bg-[hsl(240,5%,88%)] overflow-hidden">
                  <span
                    class="h-full rounded-full bg-[hsl(240,10%,20%)]"
                    :style="{ width: `${item.pct}%` }"
                  />
                </span>
                {{ item.label }}
              </span>
            </div>

            <div class="space-y-2">
              <div
                v-for="category in skillsByCategory"
                :key="category.title"
                class="grid grid-cols-2 sm:grid-cols-[10rem_1fr_1fr_1fr_4rem] items-center gap-x-4 gap-y-1"
              >
                <p class="col-span-2 sm:col-span-1 font-semibold text-xs leading-tight text-[hsl(240,10%,12%)]">
                  {{ category.title }}
                </p>
                <div
                  v-for="tag in category.skills.slice(0, 3)"
                  :key="tag.title"
                  class="flex items-center gap-2 min-w-0"
                >
                  <span class="text-[10px] text-[hsl(240,10%,20%)] w-20 shrink-0 truncate">{{ tag.title }}</span>
                  <div class="flex-1 h-1.5 rounded-full bg-[hsl(240,5%,88%)] overflow-hidden min-w-[30px]">
                    <div
                      class="h-full rounded-full bg-[hsl(240,10%,20%)]"
                      :style="{ width: `${levelPercent[tag.level]}%` }"
                    />
                  </div>
                </div>
                <span
                  v-if="category.skills.length > 3"
                  class="sm:col-start-5 text-[10px] text-[hsl(240,5%,55%)] italic whitespace-nowrap"
                >{{ t('skills.andOthers') }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Footer -->
      <div class="px-10 py-3 border-t border-[hsl(240,5%,88%)] flex items-center justify-between">
        <span class="font-display text-sm font-bold tracking-tight">
          <span class="text-[hsl(78,100%,32%)]">L</span>
          <span class="text-[hsl(240,10%,20%)]">W</span>
          <span class="text-[hsl(78,100%,32%)]">.</span>
        </span>
        <p class="text-[10px] text-[hsl(240,5%,55%)] flex items-center gap-1">
          © {{ new Date().getFullYear() }} Feito com
          <UIcon
            mode="svg"
            name="i-mdi-heart"
            class="text-[hsl(78,100%,32%)] text-[10px]"
          />
          por Luciano Weslen
        </p>
      </div>
    </div>
  </div>
</template>
