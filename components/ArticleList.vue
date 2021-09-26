<template>
  <Container>
    <ul class="max-w-5xl mx-auto">
      <li
        v-for="article of articles"
        :key="article.slug"
        class="mb-12 bg-white bg-opacity-5 p-5 rounded shadow"
      >
        <NuxtLink
          :to="{ name: 'articles-slug', params: { slug: article.slug } }"
          class="md:grid md:gap-4 md:grid-cols-2 flex items-center"
        >
          <img
            v-if="article.img"
            :src="article.img"
            alt=""
            class="mb-4 border rounded"
          />
          <div>
            <h2 class="font-bold text-2xl mb-2">
              {{ article.title }}
            </h2>
            <p class="text-lg">{{ article.description }}</p>
            <p
              class="
                font-bold
                text-blue-500
                hover:text-blue-700
                transition
                duration-300
                ease-in-out
                mt-2
              "
            >
              Read more<span
                class="
                  text-blue-500
                  hover:text-blue-700
                  transition
                  duration-300
                  ease-in-out
                "
                >&hellip;</span
              >
            </p>
          </div>
        </NuxtLink>
      </li>
    </ul>
    <div v-if="total" class="constainer mx-auto my-5 max-w-5xl">
      <Pagination v-if="total > 4" :total="total" />
    </div>
  </Container>
</template>

<script>
export default {
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
}
</script>
