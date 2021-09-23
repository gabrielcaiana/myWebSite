<template>
  <article>
    <nuxt-content :document="article" />
    <p>Post last update: {{ formartDate(article.updatedAt) }}</p>
  </article>
</template>

<script>
import { formartDate } from '@/utils'
export default {
  async asyncData({ $content, params }) {
    const article = await $content('articles', params.slug).fetch()
    return { article }
  },

  methods: {
    formartDate,
  },
}
</script>

<style lang="scss" scoped></style>
