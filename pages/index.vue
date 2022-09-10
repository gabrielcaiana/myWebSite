<template>
  <Container class="flex items-center justify-center">
    <div
      class="max-w-[864px] m-auto flex gap-4 py-6 bg-primary-800 absolute left-0 right-0 top-[200px] rounded-md shadow-lg"
    >
      <Person :avatar="user.avatar" />
      <div>
        <h1 class="text-white text-2xl mb-3 font-general-medium">
          Gabriel Caiana
        </h1>
        <p class="text-primary-200 font-general-regular">
          {{ user.description }}
        </p>
        <SocialMedia :social-media="user.socialMedia" />
      </div>
    </div>

    <div class="w-full flex flex-col mt-40">
      <h2 class="text-white text-2xl mb-8 font-general-medium">Publicações</h2>
      <ArticleList :articles="paginatedArticles" :total="allArticles.length" />
    </div>
  </Container>
</template>

<script lang="ts">
import Vue from 'vue'
import { about } from '@/store'
import getContent from '@/utils/getContent'
export default Vue.extend({
  async asyncData({ $algoliaApi, $content, params, error }: any) {
    const response = await $algoliaApi.getAbout()
    about.index(response)
    const user = about.me

    const content = await getContent($content, params, error)
    return {
      user,
      allArticles: content.allArticles,
      paginatedArticles: content.paginatedArticles,
    }
  },

  head: () => ({
    title: 'Início',
  }),
})
</script>
