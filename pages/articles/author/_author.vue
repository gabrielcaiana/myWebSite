<template>
  <Container class="container mx-auto max-w-screen-md">
    <h1>Autor: {{ articles[0].author.name }}</h1>
    <p>Bio: {{ articles[0].author.bio }}</p>
    <h3>Lista de artigos {{ articles[0].author.name }}:</h3>
    <ul>
      <li v-for="article in articles" :key="article.slug">
        <NuxtLink
          :to="{ name: 'articles-slug', params: { slug: article.slug } }"
        >
          <nuxt-img
            :src="article.img"
            :placeholder="article.alt"
            loading="lazy"
            fit="cover"
            quality="80"
            format="png"
          />
          <div>
            <h2>{{ article.title }}</h2>
            <p>{{ article.description }}</p>
            <p>{{ formatDate(article.updatedAt) }}</p>
          </div>
        </NuxtLink>
      </li>
    </ul>
  </Container>
</template>

<script lang="ts">
import Vue from 'vue'
import { formatDate } from '@/utils/date'
import { Article } from '@/models'
export default Vue.extend({
  async asyncData({ $content, params }: any) {
    const articles: Article = await $content('articles', params.slug)
      .where({
        'author.name': {
          $regex: [params.author, 'i'],
        },
      })
      .without('body')
      .sortBy('createdAt', 'asc')
      .fetch()

    return {
      articles,
    }
  },

  head: () => ({
    title: 'Author',
  }),

  methods: {
    formatDate,
  },
})
</script>
