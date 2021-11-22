<template>
  <article class="container mx-auto max-w-screen-md p-5">
    <h1 v-text="article.title"></h1>
    <p v-text="article.description"></p>
    <img :src="article.img" :alt="article.alt" />
    <p class="py-6">Post last update: {{ formatDate(article.updatedAt) }}</p>

    <nav class="my-6">
      <ul>
        <li v-for="link of article.toc" :key="link.id">
          <nuxt-link
            :class="{ 'py-2': link.depth === 2, 'ml-2 pb-2': link.depth === 3 }"
            :to="`#${link.id}`"
            v-text="link.text"
          ></nuxt-link>
        </li>
      </ul>
    </nav>

    <nuxt-content :document="article" />

    <author :author="article.author"></author>

    <prev-next :prev="prev" :next="next" />
  </article>
</template>

<script>
import { formatDate } from '@/utils/date'

export default {
  async asyncData({ $content, params }) {
    const article = await $content('articles', params.slug).fetch()

    const [prev, next] = await $content('articles')
      .only(['title', 'slug'])
      .sortBy('createdAt', 'asc')
      .surround(params.slug)
      .fetch()

    return { article, prev, next }
  },

  head() {
    return {
      title: this.article.title,

      meta: [
        { hid: 'og:type', property: 'og:type', content: 'website' },
        { hid: 'og:title', property: 'og:title', content: this.article.title },
        { hid: 'og:desc', property: 'og:description', content: this.article.description },
        { hid: 'og:image', property: 'og:image', content: this.article.img },
        { hid: 'og:url', property: 'og:url', content: `$https://www.gabrielcaiana.com/articles/${this.$route.params.slug}` },
      ],

    }
  },
  methods: {
    formatDate,
  },
}
</script>
