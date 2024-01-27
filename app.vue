<template>
  <u-notifications />

  <u-dropdown
    class="fixed bottom-4 right-4"
    :items="languages" 
    mode="click" 
    :popper="{ placement: 'bottom-start' }"
  >
    <u-button trailing-icon="i-mdi-language" color="sky" variant="soft"/>
  </u-dropdown>

  <div class="bg-slate-900 w-full flex flex-col items-center">
    <header class="w-screen justify-center flex flex-col gap-3 p-10 bg-gradient-to-b from-sky-800 to-slate-900 shadow-inner">
      <div class="flex flex-col items-center gap-1">
        <h1 class="text-3xl font-extrabold text-center text-slate-200">Luciano Weslen</h1>
        <h3 class="text-lg font-medium text-center text-slate-300">{{ $t('profession') }}</h3>
      </div>
      <div class="flex flex-col items-center gap-1">
        <div class="flex flex-col md:flex-row items-center text-xs">
          <u-button 
            variant="link" 
            color="white" 
            icon="i-mdi-location" 
            to="https://www.google.com.br/maps/place/Londrina,+PR/@-23.321258,-51.2481647,12z/data=!3m1!4b1!4m6!3m5!1s0x94eb435a57af586d:0x23ac11a5c614f971!8m2!3d-23.3197305!4d-51.1662008!16zL20vMDM0cnEy?hl=pt-BR&entry=ttu"
            label="Londrina, Brasil"
          />
          <u-button 
            variant="link" 
            color="white" 
            icon="i-mdi-email" 
            @click="copyToClipboard"
            label="luciano.weslen11@gmail.com"
          />
        </div>
        <div class="flex gap-2 items-center">
          <u-button 
            v-for="item in socialMedia" 
            :key="item.key"
            :color="item.color"
            :ui="{ rounded: 'rounded-full' }"
            :icon="item.icon" 
            label="/luweslen"
            :to="item.url"
            variant="link"
          />
        </div>
      </div>
    </header>

    <main class="max-w-screen-md w-full items-center flex flex-col gap-5 my-8 px-4">
      <section class="w-full flex flex-col md:flex-row gap-2 justify-between text-sm">
        <h4 class="min-w-40 font-bold text-xl">{{ $t('education.title') }}</h4>
        <div class="w-full flex flex-col gap-3">
          <div class="flex flex-col flex-wrap gap-1" v-for="education in educations" :key="education.key">
            <span class="font-bold">{{ education.institution }}</span>
            <div class="w-full flex flex-wrap gap-1 justify-between items-center">
              <span>{{ education.course }}</span>
              <div class="flex gap-1 items-center justify-start">
                <u-icon name="i-mdi-calendar" class="bg-slate-500"/>
                <span>{{ $d(new Date(education.start), 'short') }} - {{ education.end ? $d(new Date(education.end),  'short') : $t('current').toLowerCase() }}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <u-divider :ui="{ border: { size: { horizontal: 'border-t-2' } } }" />
      
      <section class="w-full flex flex-col md:flex-row gap-2 justify-between text-sm">
        <h4 class="min-w-40 font-bold text-xl">{{ $t('experience.title') }}</h4>
        <div class="w-full flex flex-col gap-6">
          <div class="w-full flex flex-col gap-3 justify-between items-start" v-for="experience in experiences" :key="experience.key">
            <div class="w-full flex justify-between gap-2">
              <div class="w-full flex flex-col gap-2">
                <u-button 
                  class="font-bold p-0" 
                  variant="link" 
                  :to="experience.companyUrl" 
                  color="white"
                >
                  {{ experience.company }}
                </u-button>
                <div class="w-full flex flex-wrap gap-2">
                  <u-badge 
                    v-for="skill in experience.skills" 
                    :key="skill" 
                    color="sky" 
                    variant="soft"
                    class="text-xs"
                  >
                    {{ skill }}
                  </u-badge>
                </div>
                <div class="w-full flex flex-col gap-2">
                  <div 
                    v-for="job in experience.jobs"
                    :key="job.key"
                    class="w-full flex flex-col md:flex-row gap-1 justify-between"
                  >
                    <span>>_ {{ job.name }}</span>
                    <div class="min-w-52 flex gap-1 items-center">
                      <u-icon name="i-mdi-calendar" class="bg-slate-500" />
                      <span>{{ $d(new Date(job.start), 'short') }} - {{ job.end ? $d(new Date(job.end),  'short') : $t('current').toLowerCase() }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div>
                <div class="flex flex-col gap-2">
                  <div class="flex gap-2" v-for="responsibility in experience.responsibilities" :key="responsibility">
                    - <span class="text-xs">{{ responsibility }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <u-divider :ui="{ border: { size: { horizontal: 'border-t-2' } } }" />

      <section class="w-full flex flex-col md:flex-row gap-2 justify-between text-sm">
        <h4 class="min-w-40 font-bold text-xl">{{ $t('skills.title') }}</h4>
        <div class="w-full flex flex-col gap-3">
          <div class="flex flex-col md:flex-row gap-3">
            <span class="min-w-32 text-slate-500">{{ $t('skills.indicators.title') }}</span>
            <div class="flex flex-wrap gap-1">
              <u-badge 
                color="sky" 
                variant="soft"
                class="text-xs flex flex-col gap-1"
              >
                {{ $t('skills.indicators.used') }} {{ $t('skills.indicators.often').toLowerCase()  }}
                <u-meter :value="100" size="xs" color="sky"/>
              </u-badge>
              <u-badge 
                color="sky" 
                variant="soft"
                class="text-xs flex flex-col gap-1"
              >
                {{ $t('skills.indicators.used') }} {{ $t('skills.indicators.occasionally').toLowerCase()  }}
                <u-meter :value="50" size="xs" color="sky"/>
              </u-badge>
              <u-badge 
                color="sky" 
                variant="soft"
                class="text-xs flex flex-col gap-1"
              >
                {{ $t('skills.indicators.used') }} {{ $t('skills.indicators.sometimes').toLowerCase() }}
                <u-meter :value="25" size="xs" color="sky"/>
              </u-badge>
            </div>
          </div>
          <div class="flex gap-3justify-between items-start" v-for="skill in skills" :key="skill.name">
            <div class="flex flex-col items-start gap-2">
              <span class="font-bold">{{ skill.name }}</span>
              <div class="flex flex-col md:flex-row gap-3 items-start" v-for="subCategory in skill.subcategories" :key="subCategory.name">
                <span class="min-w-32 text-slate-500">{{ subCategory.name }}</span>
                <div class="w-full flex flex-wrap gap-2">
                  <u-badge 
                    v-for="skill in subCategory.skills" 
                    :key="skill.name" 
                    color="sky" 
                    variant="soft"
                    class="text-xs flex flex-col gap-1"
                  >
                    {{ skill.name }}
                    <u-meter :value="skill.level" size="xs" color="sky"/>
                  </u-badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>

    <u-divider :ui="{ border: { size: { horizontal: 'border-t-2' } } }" />

    <footer class="w-full flex justify-center p-10 text-xs">
      ©2023 Luciano Weslen
    </footer>
  </div>
</template>

<script setup lang='ts'>
const clipboard = useCopyToClipboard();
const toast = useToast();
const { locale, t: $t } = useI18n()

const languages = ref([
  [
    {
      label: 'Português',
      icon: 'i-twemoji-flag-brazil',
      value: 'pt-BR',
      click: () => {
        locale.value = 'pt-BR'
      }
    },
    {
      label: 'Inglês',
      icon: 'i-twemoji-flag-united-states',
      value: 'en-US',
      click: () => {
        locale.value = 'en-US'
      }
    }
  ]
])

const socialMedia = ref([
  {
    key: 'linkedin', 
    icon: 'i-mdi-linkedin', 
    url: 'https://www.linkedin.com/in/luweslen', 
    color: 'sky'
  },
  {
    key: 'github',
    icon: 'i-mdi-github', 
    url: 'https://www.github.com/luweslen', 
    color: 'sky'
  },
])

const educations = computed(() => ([
  {
    key: 2,
    institution: $t('education.institutions.ifpr'),
    course: $t('education.courses.analysis'),
    start: '2020-01-01T00:00:00.000Z',
    end: '2023-03-31T00:00:00.000Z',
  },
  {
    key: 1,
    institution: $t('education.institutions.ifpr'),
    course: $t('education.courses.technician'),
    start: '2016-01-01T00:00:00.000Z',
    end: '2019-12-31T00:00:00.000Z',
  }
]))

const experiences = computed(() => ([
  {
    key: 2,
    company:  $t('experience.companies.zrp'),
    companyUrl: 'https://zrp.com.br',
    jobs: [
      {
        key: 2,
        name: $t('experience.positions.developer'),
        start: '2023-09-01T00:00:00.000Z',
        end: undefined,
      },
      {
        key: 1,
        name: $t('experience.positions.junior'),
        start: '2022-04-01T00:00:00.000Z',
        end: '2023-08-31T00:00:00.000Z',
      },
    ],
    skills: [
      'VueJS',
      'NestJS',
      'MongoDB',
      'PostgreSQL',
      'TypeScript',
      'AWS',
    ]
  },
  {
    key: 2,
    company:  $t('experience.companies.tilit'),
    companyUrl: 'https://uird.com.br',
    jobs: [
      {
        key: 2,
        name: $t('experience.positions.junior'),
        start: '2021-07-01T00:00:00.000Z',
        end: '2022-03-31T00:00:00.000Z',
      },
      {
        key: 1,
        name: $t('experience.positions.intern'),
        start: '2020-03-01T00:00:00.000Z',
        end: '2021-06-31T00:00:00.000Z',
      },
    ],
    skills: [
      'VueJS',
      'NodeJS',
      'MongoDB',
      'TypeScript',
      'Python',
      'Flask'
    ],
    responsibilities: []
  },
]))

const skills = computed(() => ([
  {
    name: $t('skills.categories.programming'),
    subcategories: [
      {
        name: $t('skills.subcategories.frontend'),
        skills: [
          { name: 'JavaScript', level: 100 },
          { name: 'TypeScript', level: 100 },
          { name: 'HTML', level: 100 },
          { name: 'CSS', level: 100 },
          { name: 'JSON', level: 100 },
          { name: 'GraphQL', level: 25 }
        ],
      },
      {
        name: $t('skills.subcategories.backend'),
        skills: [
          { name: 'JavaScript', level: 100 },
          { name: 'TypeScript', level: 100 },
          { name: 'Python', level: 25 },
          { name: 'Ruby', level: 25 },
          { name: 'Java', level: 25 },
        ]
      },
      {
        name: $t('skills.subcategories.database'),
        skills: [
          { name: 'SQL', level: 50 },
        ]
      },
    ]
  },
  {
    name: 'Tecnologias',
    subcategories: [
      {
        name: $t('skills.subcategories.frontend'),
        skills: [
          { name: 'VueJS', level: 100 },
          { name: 'Quasar', level: 100 },
          { name: 'ViteJS', level: 100 },
          { name: 'NuxtJS', level: 50 },
          { name: 'Webpack', level: 50 },
          { name: 'ReactJS', level: 25 },
          { name: 'TailwindCSS', level: 50 },
          { name: 'Bootstrap', level: 50 },
        ]
      },
      {
        name: $t('skills.subcategories.backend'),
        skills: [
          { name: 'NodeJS', level: 100 },
          { name: 'NestJS', level: 100 },
          { name: 'ExpressJS', level: 100 },
          { name: 'Fastify', level: 50 },
          { name: 'TypeORM', level: 100 },
          { name: 'Prisma', level: 50 },
          { name: 'Flask', level: 25 },
          { name: 'Ruby on Rails', level: 25 },
        ]
      },
      {
        name: $t('skills.subcategories.devops'),
        skills: [
          { name: 'Docker', level: 100 },
          { name: 'AWS', level: 100 },
        ]
      },
      {
        name: $t('skills.subcategories.database'),
        skills: [
          { name: 'MongoDB', level: 100 },
          { name: 'PostgreSQL', level: 100 },
          { name: 'Redis', level: 100 },
        ]
      }
    ]
  },
  {
    name: $t('skills.categories.tools'),
    subcategories: [
      {
        name: $t('skills.subcategories.general'),
        skills: [
          { name: 'Git', level: 100 },
          { name: 'GitHub', level: 100 },
          { name: 'GitLab', level: 100 },
          { name: 'VSCode', level: 100 },
          { name: 'Jira', level: 100 },
        ]
      },
    ]
  },
  {
    name: $t('skills.categories.soft'),
    subcategories: [
      {
        name: $t('skills.subcategories.general'),
        skills: [
          { name: $t('skills.teamWork'), level: 100 },
          { name: $t('skills.communication'), level: 100 },
          { name: $t('skills.proactivity'), level: 100 },
          { name: $t('skills.leadership'), level: 100 },
          { name: $t('skills.creativity'), level: 50 },
        ]
      }
    ]
  }
]))

const copyToClipboard = () => {
  try {
    clipboard.copy('luciano.weslken11@gmail.com')

    toast.add({ title: 'Email copiado', description: 'Email copiado para a área de transferência', color: 'green' })
  } catch (error) {
    
  }
}
</script>
