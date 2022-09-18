<template>
  <div class="max-w-[864px] px-6 md:px-0 m-auto mb-40">
    <div
      class="max-w-[864px] m-auto flex items-center md:items-start flex-col md:flex-row gap-4 p-6 md:px-0 bg-primary-800 absolute left-0 right-0 top-[200px] rounded-md shadow-lg"
    >
      <Person :avatar="user.avatar" />
      <div
        class="flex flex-col items-center md:items-start text-center md:text-start"
      >
        <h1 class="text-white text-2xl font-general-medium">Gabriel Caiana</h1>
        <span class="text-medium font-general-medium text-primary-100 mb-3"
          ><strong>Desenvolvedor frontend</strong> e entusiasta de design.</span
        >
        <p class="text-primary-200 font-general-regular">
          {{ user.description }}
        </p>
        <SocialMedia :social-media="user.socialMedia" />
      </div>
    </div>

    <div class="w-full flex flex-col mt-[450px] md:mt-56">
      <h2 class="text-white text-2xl mb-8 font-general-medium">Publicações</h2>
      <ArticleList :articles="paginatedArticles" :total="allArticles.length" />
    </div>
  </div>
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
