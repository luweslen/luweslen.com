<template>
  <cv-section :title="$t('experience.title')">
    <template #content>
      <div class="w-full flex flex-col gap-6">
        <div
          v-for="experience in experiences"
          :key="experience.key"
          class="w-full flex flex-col gap-3 justify-between items-start"
        >
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
                  <cv-between-date
                    :start="job.start"
                    :end="job.end"
                  />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div class="flex flex-col gap-2">
                <div
                  v-for="responsibility in experience.responsibilities"
                  :key="responsibility"
                  class="flex gap-2"
                >
                  - <span class="text-xs">{{ responsibility }}</span>
                </div>
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

const experiences = computed(() => ([
  {
    key: 2,
    company: $t('experience.companies.zrp'),
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
    company: $t('experience.companies.tilit'),
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
</script>