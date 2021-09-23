<template>
  <article class="p-5">
    <h1 v-text="article.title"></h1>
    <p v-text="article.description"></p>
    <img :src="article.img" :alt="article.alt" />
    <p>Post last update: {{ formartDate(article.updatedAt) }}</p>

    <nuxt-content :document="article" />
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

<style lang="css">
</style>
