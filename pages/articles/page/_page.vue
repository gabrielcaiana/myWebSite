<template>
  <ArticleList :articles="paginatedArticles" :total="allArticles.length" />
</template>

<script lang="ts">
import Vue from 'vue'
import getContent from '@/utils/getContent'
export default Vue.extend({
  async asyncData({ $content, params, error }: any) {
    try {
      const content = await getContent($content, params, error)
      return {
        allArticles: content.allArticles,
        paginatedArticles: content.paginatedArticles,
      }
    } catch (err: any) {
      throw new Error(err)
    }
  },

  head: () => ({
    title: 'Articles',
  }),
})
</script>
