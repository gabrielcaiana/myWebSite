<template>
  <article class="p-5">
    <h1 v-text="article.title"></h1>
    <p v-text="article.description"></p>
    <img :src="article.img" :alt="article.alt" />
    <p>Post last update: {{ formartDate(article.updatedAt) }}</p>

    <nav>
      <ul>
        <li v-for="link of article.toc" :key="link.id">
          <nuxt-link :to="`#${link.id}`" v-text="link.text"></nuxt-link>
        </li>
      </ul>
    </nav>

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
.icon.icon-link {
  background-image: url('@/assets/icons/icon-hashtag.svg');
  display: inline-block;
  width: 20px;
  height: 20px;
  background-size: 20px 20px;
}
</style>
