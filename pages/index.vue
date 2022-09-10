<template>
  <Container class="flex items-center justify-center">
    <div
      class="w-[864px] flex gap-4 m-auto py-6 bg-primary-800 absolute left-0 right-0 top-[200px] rounded-md shadow-lg"
    >
      <Person :avatar="user.avatar" />
      <div>
        <h1 class="text-white text-2xl mb-3">Gabriel Caiana</h1>
        <p class="text-primary-200">{{ user.description }}</p>
        <SocialMedia :social-media="user.socialMedia" />
      </div>
    </div>
  </Container>
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
