<template>
  <article class="container mx-auto max-w-screen-md p-5">
    <h1
      class="text-white text-4xl my-8 font-general-medium"
      v-text="article.title"
    ></h1>
    <p
      class="text-white font-body font-general-regular mx-0 mb-6"
      v-text="article.description"
    ></p>
    <nuxt-img class="rounded-md" :src="article.img" :alt="article.alt" />

    <nuxt-content class="text-white" :document="article" />

    <p class="text-body text-primary-300 font-general-regular mx-0">
      Post atualizado em: {{ formatDate(article.updatedAt) }}
    </p>

    <prev-next class="text-white mt-10" :prev="prev" :next="next" />
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
        img: this.article.img,
      }

      return getSiteMeta(metaData)
    },
  },

  methods: {
    formatDate,
  },
})
</script>
