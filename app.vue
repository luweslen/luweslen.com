<template>
  <u-notifications />

  <div class="bg-slate-900 w-full flex flex-col items-center">
    <header class="w-screen justify-center flex flex-col gap-4 p-10 bg-gradient-to-b from-sky-800 to-slate-900 shadow-inner">
      <div class="flex flex-col items-center gap-2">
        <h1 class="text-3xl font-extrabold text-center text-slate-200">Luciano Weslen</h1>
        <h3 class="text-lg font-medium text-center text-slate-300">Desenvolvedor de Sistemas</h3>
      </div>
      <div class="flex flex-col items-center gap-2">
        <div class="flex items-center text-xs">
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

    <main class="max-w-screen-sm w-full items-center flex flex-col gap-5 my-8">
      <section class="w-full flex justify-between text-sm">
        <h4 class="min-w-40 font-bold">Educação</h4>
        <div class="w-full flex flex-col gap-3">
          <div class="flex justify-between items-start" v-for="education in educations" :key="education.key">
            <div class="flex flex-col items-start">
              <span class="font-bold">{{ education.institution }}</span>
              <span>{{ education.course }}</span>
            </div>
            <div class="min-w-40 flex gap-1 items-center justify-start">
              <u-icon name="i-mdi-calendar" />
              <span>{{ education.start }} - {{ education.end }}</span>
            </div>
          </div>
        </div>
      </section>

      <u-divider :ui="{ border: { size: { horizontal: 'border-t-2' } } }" />
      
      <section class="max-w-screen-sm w-full flex justify-between text-sm">
        <h4 class="min-w-40 font-bold">Experiência</h4>
        <div class="w-full flex flex-col gap-6">
          <div class="flex flex-col gap-3 justify-between items-start" v-for="experience in experiences" :key="experience.key">
            <div class="w-full flex justify-between gap-2">
              <div class="flex flex-col items-start">
                <u-button 
                  class="font-bold p-0" 
                  variant="link" 
                  :to="experience.companyUrl" 
                  color="white"
                >
                  {{ experience.company }}
                </u-button>
                <span>{{ experience.job }}</span>
              </div>
              <div class="min-w-40 flex gap-1 items-center">
                <u-icon name="i-mdi-calendar" />
                <span>{{ experience.start }} - {{ experience.end }}</span>
              </div>
            </div>
            <div>
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

      <section class="w-full flex justify-between text-sm">
        <h4 class="min-w-40 font-bold">Habilidades</h4>
        <div class="w-full flex flex-col gap-3">
          <div class="flex justify-between items-start" v-for="skill in skills" :key="skill.name">
            <div class="flex flex-col items-start gap-2">
              <span class="font-bold">{{ skill.name }}</span>
              <div class="flex gap-3" v-for="subCategory in skill.subCategories" :key="subCategory.name">
                <span class="min-w-32 text-slate-500">{{ subCategory.name }}</span>
                <div class="w-full flex flex-wrap gap-2">
                  <u-badge 
                    v-for="skill in subCategory.skills" 
                    :key="skill" 
                    color="sky" 
                    variant="soft"
                    class="text-xs"
                  >
                    {{ skill }}
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

const educations = ref([
  {
    key: 2,
    institution: 'Instituto Federal de Educação',
    course: 'Analise e Desenvolvimento de Sistemas',
    start: 'Jan 2020',
    end: 'Mar 2023'
  },
  {
    key: 1,
    institution: 'Instituto Federal de Educação',
    course: 'Analise e Desenvolvimento de Sistemas',
    start: 'Jan 2016',
    end: 'Dez 2019'
  }
])

const experiences = ref([
  {
    key: 2,
    company: 'ZRP',
    companyUrl: 'https://zrp.com.br',
    job: 'Desenvolvedor de Sistemas',
    start: 'Abr 2022',
    end: 'presente',
    skills: [
      'VueJS',
      'NodeJS',
      'MongoDB',
      'Trabalho em equipe',
      'PostgreSQL',
      'NestJS',
      'AWS',
      'TypeScript',
      'Comunicação'
    ]
  },
  {
    key: 2,
    company: 'tilit / UIRD',
    companyUrl: 'https://uird.com.br',
    job: 'Desenvolvedor de Sistemas Junior',
    start: 'Jul 2021',
    end: 'Abr 2022',
    skills: [
      'VueJS',
      'NodeJS',
      'MongoDB',
      'TypeScript',
      'Comunicação',
      'Python',
      'Flask'
    ],
    responsibilities: []
  },
  {
    key: 1,
    company: 'tilit / UIRD',
    companyUrl: 'https://uird.com.br',
    job: 'Estagiário em Desenvolvimento de Sistemas',
    start: 'Abr 2019',
    end: 'Jun 2021',
    skills: [
      'VueJS',
      'NodeJS',
      'MongoDB',
    ],
    responsibilities: []
  }
])

const skills = ref ([
  {
    name: 'Linguagens',
    subCategories: [
      {
        name: 'Frontend',
        skills: [
          'JavaScript',
          'TypeScript',
          'CSS',
          'HTML',
        ],
      },
      {
        name: 'Backend',
        skills: [
          'Python',
          'JavaScript',
          'TypeScript',
        ]
      },
      {
        name: 'Banco de dados',
        skills: [
          'SQL',
        ]
      },
    ]
  },
  {
    name: 'Tecnologias',
    subCategories: [
      {
        name: 'Frontend',
        skills: [
          'VueJS',
          'NuxtJS',
          'Quasar',
          'ReactJS',
          'ViteJS',
          'Webpack',
        ]
      },
      {
        name: 'UI',
        skills: [
          'TailwindCSS',
          'Bootstrap',
        ]
      },
      {
        name: 'Backend',
        skills: [
          'NodeJS',
          'NestJS',
          'Flask',
          'TypeORM',
          'Prisma'
        ]
      },
      {
        name: 'Cloud',
        skills: [
          'AWS',
          'Docker'
        ]
      },
      {
        name: 'Database',
        skills: [
          'MongoDB',
          'PostgreSQL',
          'Redis'
        ]
      }
    ]
  },
  {
    name: 'Ferramentas',
    subCategories: [
      {
        name: 'Desenvolvimento',
        skills: [
          'Git',
          'GitHub',
          'GitLab',
          'VSCode',
        ]
      },
      {
        name: 'Design',
        skills: [
          'Figma',
        ]
      }
    ]
  },
  {
    name: 'Soft Skills',
    subCategories: [
      {
        name: 'Geral',
        skills: [
          'Trabalho em equipe',
          'Comunicação',
          'Criatividade',
          'Gestão',
        ]
      }
    ]
  }
])

const copyToClipboard = () => {
  try {
    clipboard.copy('luciano.weslken11@gmail.com')

    toast.add({ title: 'Email copiado', description: 'Email copiado para a área de transferência', color: 'green' })
  } catch (error) {
    
  }
}
</script>
