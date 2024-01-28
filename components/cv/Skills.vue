<template>
  <cv-section :title="$t('skills.title')">
    <template #content>
      <div class="w-full flex flex-col gap-3">
        <div class="flex flex-col md:flex-row gap-3">
          <span class="min-w-32 text-slate-500">{{ $t('skills.indicators.title') }}</span>
          <div class="flex flex-wrap gap-1">
            <u-badge
              color="sky"
              variant="soft"
              class="text-xs flex flex-col gap-1"
            >
              {{ $t('skills.indicators.used') }} {{ $t('skills.indicators.often').toLowerCase() }}
              <u-meter
                :value="100"
                size="xs"
                color="sky"
              />
            </u-badge>
            <u-badge
              color="sky"
              variant="soft"
              class="text-xs flex flex-col gap-1"
            >
              {{ $t('skills.indicators.used') }} {{ $t('skills.indicators.occasionally').toLowerCase() }}
              <u-meter
                :value="50"
                size="xs"
                color="sky"
              />
            </u-badge>
            <u-badge
              color="sky"
              variant="soft"
              class="text-xs flex flex-col gap-1"
            >
              {{ $t('skills.indicators.used') }} {{ $t('skills.indicators.sometimes').toLowerCase() }}
              <u-meter
                :value="25"
                size="xs"
                color="sky"
              />
            </u-badge>
          </div>
        </div>
        <div
          v-for="skill in skills"
          :key="skill.name"
          class="flex gap-3justify-between items-start"
        >
          <div class="flex flex-col items-start gap-2">
            <span class="font-bold">{{ skill.name }}</span>
            <div
              v-for="subCategory in skill.subcategories"
              :key="subCategory.name"
              class="flex flex-col md:flex-row gap-3 items-start"
            >
              <span class="min-w-32 text-slate-500">{{ subCategory.name }}</span>
              <div class="w-full flex flex-wrap gap-2">
                <u-badge
                  v-for="item in subCategory.skills"
                  :key="item.name"
                  color="sky"
                  variant="soft"
                  class="text-xs flex flex-col gap-1"
                >
                  {{ item.name }}
                  <u-meter
                    :value="item.level"
                    size="xs"
                    color="sky"
                  />
                </u-badge>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </cv-section>
</template>

<script setup lang="ts">
const { t: $t } = useI18n()

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
</script>