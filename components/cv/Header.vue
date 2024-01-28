<template>
  <header
    class="w-screen justify-center flex flex-col gap-3 p-10 bg-gradient-to-b from-sky-800 to-slate-900 shadow-inner"
  >
    <div class="flex flex-col items-center gap-1">
      <h1 class="text-3xl font-extrabold text-center text-slate-200">
        Luciano Weslen
      </h1>
      <h3 class="text-lg font-medium text-center text-slate-300">
        {{ $t('profession') }}
      </h3>
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
          label="luciano.weslen11@gmail.com"
          @click="copyToClipboard"
        />
      </div>
      <div class="flex gap-2 items-center">
        <u-button
          v-for="item in socialMedia"
          :key="item.key"
          color="sky"
          :ui="{ rounded: 'rounded-full' }"
          :icon="item.icon"
          label="/luweslen"
          :to="item.url"
          variant="link"
        />
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
const clipboard = useCopyToClipboard();
const toast = useToast();

const socialMedia = ref([
  {
    key: 'linkedin',
    icon: 'i-mdi-linkedin',
    url: 'https://www.linkedin.com/in/luweslen'
  },
  {
    key: 'github',
    icon: 'i-mdi-github',
    url: 'https://www.github.com/luweslen'
  },
])

const copyToClipboard = () => {
  try {
    clipboard.copy('luciano.weslken11@gmail.com')

    toast.add({ title: 'Email copiado', description: 'Email copiado para a área de transferência', color: 'green' })
  } catch (error) {
    toast.add({ title: 'Erro ao copiar email', description: 'Erro ao copiar email para a área de transferência', color: 'red' })
  }
}
</script>