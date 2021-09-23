<template>
  <article class="p-5">
    <h1 v-text="article.title"></h1>
    <p v-text="article.description"></p>
    <img :src="article.img" :alt="article.alt" />
    <p>Post last update: {{ formartDate(article.updatedAt) }}</p>

    <nav>
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
import { formartDate } from '@/utils'
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
