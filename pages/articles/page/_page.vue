<template>
  <ArticleList :articles="paginatedArticles" :total="allArticles.length" />
</template>

<script>
import getContent from '@/utils/getContent'
export default {
  async asyncData({ $content, app, params, error }) {
    try {
      const content = await getContent($content, params, error)
      return {
        allArticles: content.allArticles,
        paginatedArticles: content.paginatedArticles,
      }
    } catch (err) {
      console.error(err)
    }
  },

  head: () => ({
    title: 'Articles',
  }),
}
</script>
