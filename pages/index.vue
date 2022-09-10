<template>
  <!-- <Container class="flex items-center justify-center"> -->
  <!-- <main class="flex flex-col h-full relative"> -->
  <div class="w-96 m-auto py-6 bg-gray-600">
    hello world
    <!-- <Person :avatar="user.avatar" />
        <h1 class="font-general-bold text-3xl mt-4">Olá, sou o Gabriel</h1>
        <span class="font-general-regular text-xl mb-4"
          >Desenvolvedor frontend e entusiasta de design.</span
        >

        <p class="font-general-regular max-w-2xl">
          {{ user.description }}
        </p> -->
  </div>
  <!-- <SocialMedia :social-media="user.socialMedia" />
      <ColorModePicker /> -->
  <!-- </main> -->
  <!-- </Container> -->
</template>

<script lang="ts">
import Vue from 'vue'
import { about } from '@/store'
export default Vue.extend({
  async asyncData({ $algoliaApi }: any) {
    const response = await $algoliaApi.getAbout()
    about.index(response)
    const user = about.me
    return {
      user,
    }
  },

  head: () => ({
    title: 'Início',
  }),
})
</script>
