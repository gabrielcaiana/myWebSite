<template>
  <ArticleList :articles="paginatedArticles" :total="allArticles.length" />
</template>

<script>
import getContent from '@/utils/getContent'
export default {
  async asyncData({ $content, params, error }) {
    try {
      const content = await getContent($content, params, error)
      return {
        allArticles: content.allArticles,
        paginatedArticles: content.paginatedArticles,
      }
    } catch (err) {
      throw new Error(err)
    }
  },

  head: () => ({
    title: 'Articles',
  }),
}
</script>
