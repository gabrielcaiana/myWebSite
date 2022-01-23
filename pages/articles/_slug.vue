<template>
  <article class="container mx-auto max-w-screen-md p-5">
    <h1 v-text="article.title"></h1>
    <p v-text="article.description"></p>
    <img loading="lazy" :src="article.img" :alt="article.alt" />
    <p class="py-6">Post atualizado em: {{ formatDate(article.updatedAt) }}</p>

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

<script lang="ts">
import Vue from 'vue'
import getSiteMeta from '../../utils/getSiteMeta'
import global from '@/utils/global'
import { formatDate } from '@/utils/date'
import { Article } from '@/models'

export default Vue.extend({
  async asyncData({ $content, params }: any) {
    try {
      const article = await $content('articles', params.slug).fetch()

      const [prev, next] = await $content('articles')
        .only(['title', 'slug'])
        .sortBy('createdAt', 'asc')
        .surround(params.slug)
        .fetch()

      return { article, prev, next }
    } catch (err: any) {
      throw new Error(err)
    }
  },

  data() {
    return {
      article: {} as Article,
    }
  },

  head(): object {
    return {
      title: this.article.title,
      meta: [
        ...this.meta,
        {
          property: 'article:published_time',
          content: this.article.createdAt,
        },
        {
          property: 'article:modified_time',
          content: this.article.updatedAt,
        },
        { name: 'twitter:label1', content: 'Written by' },
        { name: 'twitter:data1', content: global.author || '' },
        { name: 'twitter:label2', content: 'Filed under' },
      ],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: `${this.$config.axios.browserBaseURL}/articles/${this.$route.params.slug}`,
        },
      ],
    }
  },

  computed: {
    meta(): any {
      const metaData = {
        type: 'article',
        url: `${this.$config.axios.browserBaseURL}/articles/${this.$route.params.slug}`,
        title: this.article.title,
        description: this.article.description,
        mainImage: this.article.img,
      }

      return getSiteMeta(metaData)
    },
  },

  methods: {
    formatDate,
  },
})
</script>
