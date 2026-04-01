<script setup lang="ts">
const { t } = useI18n()

const generating = ref(false)
const cvRef = ref<HTMLDivElement | null>(null)

const handleDownload = async () => {
  if (!cvRef.value) return
  generating.value = true

  try {
    const html2canvas = (await import('html2canvas-pro')).default
    const { jsPDF } = await import('jspdf')

    const canvas = await html2canvas(cvRef.value, {
      scale: 2,
      useCORS: true,
      backgroundColor: '#ffffff',
    })

    const imgData = canvas.toDataURL('image/jpeg', 0.95)
    const pdf = new jsPDF('p', 'mm', 'a4')
    const pdfWidth = pdf.internal.pageSize.getWidth()
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width

    pdf.addImage(imgData, 'JPEG', 0, 0, pdfWidth, pdfHeight)
    pdf.save('Luciano_Weslen_CV.pdf')
  }
  catch (err) {
    console.error('PDF generation failed:', err)
  }
  finally {
    generating.value = false
  }
}

const educations = computed(() => [
  {
    institution: t('education.institutions.ifpr'),
    course: t('education.courses.analysis'),
    period: 'dez. de 2019 – mar. de 2023',
  },
  {
    institution: t('education.institutions.ifpr'),
    course: t('education.courses.technician'),
    period: 'dez. de 2015 – dez. de 2019',
  },
])

const experiences = computed(() => [
  {
    company: 'ZRP',
    tags: ['VueJS', 'NestJS', 'MongoDB', 'PostgreSQL', 'TypeScript', 'AWS'],
    roles: [
      { title: t('experience.positions.chapterLeader'), period: 'ago. de 2024 – ' + t('current').toLowerCase() },
      { title: t('experience.positions.developer'), period: 'ago. de 2023 – ' + t('current').toLowerCase() },
      { title: t('experience.positions.junior'), period: 'mar. de 2022 – ago. de 2023' },
    ],
  },
  {
    company: 'tilit / UIRD',
    tags: ['VueJS', 'NodeJS', 'MongoDB', 'TypeScript', 'Python', 'Flask'],
    roles: [
      { title: t('experience.positions.junior'), period: 'jun. de 2021 – mar. de 2022' },
      { title: t('experience.positions.intern'), period: 'fev. de 2020 – jun. de 2021' },
    ],
  },
])

type SkillLevel = 'frequent' | 'occasional' | 'sometimes'

const levelPercent: Record<SkillLevel, number> = {
  frequent: 100,
  occasional: 60,
  sometimes: 30,
}

const skillCategories = computed(() => [
  {
    title: t('skills.categories.programming'),
    rows: [
      {
        label: t('skills.subcategories.frontend'),
        tags: [
          { name: 'JavaScript', level: 'frequent' as SkillLevel },
          { name: 'TypeScript', level: 'frequent' as SkillLevel },
          { name: 'HTML', level: 'frequent' as SkillLevel },
          { name: 'CSS', level: 'frequent' as SkillLevel },
          { name: 'JSON', level: 'occasional' as SkillLevel },
          { name: 'GraphQL', level: 'sometimes' as SkillLevel },
        ],
      },
      {
        label: t('skills.subcategories.backend'),
        tags: [
          { name: 'JavaScript', level: 'frequent' as SkillLevel },
          { name: 'TypeScript', level: 'frequent' as SkillLevel },
          { name: 'Python', level: 'sometimes' as SkillLevel },
          { name: 'Ruby', level: 'sometimes' as SkillLevel },
          { name: 'Java', level: 'sometimes' as SkillLevel },
        ],
      },
      {
        label: t('skills.subcategories.database'),
        tags: [{ name: 'SQL', level: 'frequent' as SkillLevel }],
      },
    ],
  },
  {
    title: t('skills.categories.technologies'),
    rows: [
      {
        label: t('skills.subcategories.frontend'),
        tags: [
          { name: 'VueJS', level: 'frequent' as SkillLevel },
          { name: 'Quasar', level: 'frequent' as SkillLevel },
          { name: 'ViteJS', level: 'frequent' as SkillLevel },
          { name: 'NuxtJS', level: 'occasional' as SkillLevel },
          { name: 'Webpack', level: 'occasional' as SkillLevel },
          { name: 'ReactJS', level: 'occasional' as SkillLevel },
          { name: 'TailwindCSS', level: 'occasional' as SkillLevel },
          { name: 'Bootstrap', level: 'sometimes' as SkillLevel },
        ],
      },
      {
        label: t('skills.subcategories.backend'),
        tags: [
          { name: 'NodeJS', level: 'frequent' as SkillLevel },
          { name: 'NestJS', level: 'frequent' as SkillLevel },
          { name: 'ExpressJS', level: 'occasional' as SkillLevel },
          { name: 'Fastify', level: 'occasional' as SkillLevel },
          { name: 'TypeORM', level: 'occasional' as SkillLevel },
          { name: 'Prisma', level: 'occasional' as SkillLevel },
          { name: 'Flask', level: 'sometimes' as SkillLevel },
          { name: 'Ruby on Rails', level: 'sometimes' as SkillLevel },
        ],
      },
      {
        label: t('skills.subcategories.devops'),
        tags: [
          { name: 'Docker', level: 'frequent' as SkillLevel },
          { name: 'AWS', level: 'frequent' as SkillLevel },
        ],
      },
      {
        label: t('skills.subcategories.database'),
        tags: [
          { name: 'MongoDB', level: 'frequent' as SkillLevel },
          { name: 'PostgreSQL', level: 'frequent' as SkillLevel },
          { name: 'Redis', level: 'occasional' as SkillLevel },
        ],
      },
    ],
  },
  {
    title: t('skills.categories.tools'),
    rows: [
      {
        label: t('skills.subcategories.general'),
        tags: [
          { name: 'Git', level: 'frequent' as SkillLevel },
          { name: 'GitHub', level: 'frequent' as SkillLevel },
          { name: 'GitLab', level: 'occasional' as SkillLevel },
          { name: 'VSCode', level: 'frequent' as SkillLevel },
          { name: 'Jira', level: 'frequent' as SkillLevel },
        ],
      },
    ],
  },
  {
    title: t('skills.categories.soft'),
    rows: [
      {
        label: t('skills.subcategories.general'),
        tags: [
          { name: t('skills.teamWork'), level: 'frequent' as SkillLevel },
          { name: t('skills.communication'), level: 'frequent' as SkillLevel },
          { name: t('skills.proactivity'), level: 'frequent' as SkillLevel },
          { name: t('skills.leadership'), level: 'frequent' as SkillLevel },
          { name: t('skills.creativity'), level: 'frequent' as SkillLevel },
        ],
      },
    ],
  },
])

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
        to="/"
        class="inline-flex items-center gap-2 text-sm text-[hsl(240,5%,40%)] hover:text-[hsl(240,10%,12%)] transition-colors"
      >
        <UIcon
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
        class="px-10 pt-10 pb-8 text-center"
        style="background: linear-gradient(135deg, hsl(240, 10%, 12%) 0%, hsl(240, 8%, 20%) 100%)"
      >
        <NuxtLink
          to="/"
          class="inline-block text-white no-underline hover:opacity-80 transition-opacity print:pointer-events-none"
        >
          <h1
            class="text-3xl font-extrabold tracking-tight text-white mb-1"
            style="font-family: 'Sora', sans-serif"
          >
            Luciano Weslen
          </h1>
        </NuxtLink>
        <p class="text-[hsl(240,5%,70%)] text-sm mb-4">
          {{ t('profession') }}
        </p>

        <div class="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-[hsl(240,5%,70%)]">
          <span class="flex items-center gap-1.5">
            <UIcon
              name="i-mdi-map-marker"
              class="text-accent text-sm"
            />
            Londrina, Brasil
          </span>
          <a
            href="mailto:luciano.weslen11@gmail.com"
            class="flex items-center gap-1.5 hover:text-white transition-colors no-underline text-[hsl(240,5%,70%)]"
          >
            <UIcon
              name="i-mdi-email"
              class="text-accent text-sm"
            />
            luciano.weslen11@gmail.com
          </a>
        </div>

        <div class="flex items-center justify-center gap-4 mt-3 text-xs text-[hsl(240,5%,70%)]">
          <a
            href="https://linkedin.com/in/luweslen"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center gap-1.5 hover:text-white transition-colors no-underline text-[hsl(240,5%,70%)]"
          >
            <UIcon
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
              name="i-mdi-github"
              class="text-accent text-sm"
            />
            /luweslen
          </a>
        </div>
      </div>

      <!-- Body -->
      <div class="px-10 py-8 space-y-8">
        <!-- Educação -->
        <div>
          <h2
            class="text-lg font-bold text-[hsl(240,10%,12%)] mb-4 pb-2 border-b-2 border-accent"
            style="font-family: 'Sora', sans-serif"
          >
            {{ t('education.title') }}
          </h2>
          <div class="space-y-5">
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
            class="text-lg font-bold text-[hsl(240,10%,12%)] mb-4 pb-2 border-b-2 border-accent"
            style="font-family: 'Sora', sans-serif"
          >
            {{ t('experience.title') }}
          </h2>
          <div class="space-y-5">
            <div
              v-for="exp in experiences"
              :key="exp.company"
            >
              <p class="font-semibold text-sm text-[hsl(240,10%,12%)] mb-1.5">
                {{ exp.company }}
              </p>
              <div class="flex flex-wrap gap-1.5 mb-3">
                <span
                  v-for="tag in exp.tags"
                  :key="tag"
                  class="px-2.5 py-0.5 rounded-full text-[10px] font-medium border"
                  style="color: hsl(78, 100%, 35%); border-color: hsl(78, 100%, 65%); background-color: hsl(78, 100%, 95%)"
                >
                  {{ tag }}
                </span>
              </div>
              <div class="space-y-1.5">
                <div
                  v-for="role in exp.roles"
                  :key="role.title"
                  class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-0.5"
                >
                  <p class="text-xs text-[hsl(240,10%,20%)]">
                    <span class="text-accent font-mono mr-1">>_</span>
                    {{ role.title }}
                  </p>
                  <span class="flex items-center gap-1.5 text-[11px] text-[hsl(240,5%,45%)] whitespace-nowrap">
                    <UIcon
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
            class="text-lg font-bold text-[hsl(240,10%,12%)] mb-4 pb-2 border-b-2 border-accent"
            style="font-family: 'Sora', sans-serif"
          >
            {{ t('skills.title') }}
          </h2>
          <div class="space-y-4">
            <!-- Legenda -->
            <div class="flex flex-wrap items-center gap-x-6 gap-y-2 mb-1">
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

            <div
              v-for="category in skillCategories"
              :key="category.title"
            >
              <p class="font-semibold text-sm text-[hsl(240,10%,12%)] mb-2">
                {{ category.title }}
              </p>
              <div class="space-y-2">
                <div
                  v-for="row in category.rows"
                  :key="row.label"
                  class="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4"
                >
                  <span class="text-xs text-[hsl(240,5%,45%)] w-28 shrink-0">{{ row.label }}</span>
                  <div class="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-1.5 flex-1">
                    <div
                      v-for="tag in row.tags"
                      :key="tag.name"
                      class="flex items-center gap-2"
                    >
                      <span class="text-[10px] text-[hsl(240,10%,20%)] w-20 shrink-0 truncate">{{ tag.name }}</span>
                      <div class="flex-1 h-1.5 rounded-full bg-[hsl(240,5%,88%)] overflow-hidden min-w-[40px]">
                        <div
                          class="h-full rounded-full bg-[hsl(240,10%,20%)]"
                          :style="{ width: `${levelPercent[tag.level]}%` }"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Footer -->
      <div class="px-10 py-4 border-t border-[hsl(240,5%,88%)] flex items-center justify-between">
        <span class="font-display text-sm font-bold tracking-tight">
          <span class="text-accent">L</span>
          <span class="text-[hsl(240,10%,20%)]">W</span>
        </span>
        <p class="text-[10px] text-[hsl(240,5%,55%)] flex items-center gap-1">
          © {{ new Date().getFullYear() }} Feito com
          <UIcon
            name="i-mdi-heart"
            class="text-accent text-[10px]"
          />
          por Luciano Weslen
        </p>
      </div>
    </div>
  </div>
</template>
