<template>
  <Container class="flex items-center justify-center max-w-screen-lg">
    <main class="flex flex-col h-full justify-center items-center">
      <div class="container flex flex-col items-center text-center">
        <Person :avatar="user.avatar" />
        <h1>Olá, meu nome é {{ user.firstName}}!</h1>

        <p class="max-w-2xl">
         {{ user.description }}
        </p>
      </div>
      <SocialMedia :social-media="user.socialMedia" />
      <!-- <ColorModePicker /> -->
    </main>
  </Container>
</template>

<script lang="ts">
import Vue from 'vue'
import { about } from '@/store'
export default Vue.extend({
  async asyncData( { $algoliaApi }: any) {
    const response = await $algoliaApi.getAbout();
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
