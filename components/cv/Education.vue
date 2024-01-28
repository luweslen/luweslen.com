<template>
  <cv-section :title="$t('education.title')">
    <template #content>
      <div class="w-full flex flex-col gap-3">
        <div
          v-for="education in educations"
          :key="education.key"
          class="flex flex-col flex-wrap gap-1"
        >
          <span class="font-bold">{{ education.institution }}</span>
          <div class="w-full flex flex-wrap gap-1 justify-between items-center">
            <span>{{ education.course }}</span>
            <cv-between-date
              :start="education.start"
              :end="education.end"
            />
          </div>
        </div>
      </div>
    </template>
  </cv-section>
</template>

<script setup lang="ts">
const { t: $t } = useI18n()

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
</script>