<template>
  <div>
    <ul class="flex flex-wrap gap-4">
      <li
        v-for="article of articles"
        :key="article.slug"
        class="w-[300px] md:w-[416px] bg-primary-700 cursor-pointer transform transition duration-500 hover:scale-105"
      >
        <NuxtLink :to="`/articles/${article.slug}`">
          <div>
            <img
              class="w-full h-64 object-cover mb-4"
              :src="article.img"
              :alt="article.title"
            />
            <div class="px-4 my-4">
              <h2 class="font-bold text-xl mb-2 text-white font-general-medium">
                {{ article.title }}
              </h2>
              <p
                class="text-sm line-clamp-4 text-primary-200 font-general-regular"
              >
                {{ article.description }}
              </p>
            </div>
          </div>
        </NuxtLink>
      </li>
    </ul>
    <div v-if="total" class="constainer mx-auto my-5 max-w-5xl">
      <Pagination v-if="total > 4" :total="total" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'ArticleList',
  props: {
    articles: {
      type: Array,
      default: Array,
    },
    total: {
      type: Number,
      default: 0,
    },
  },
})
</script>
