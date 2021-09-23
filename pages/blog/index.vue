<template>
  <div>
    <AppSearchInput />
    <h1 class="font-bold text-4xl">Blog Posts</h1>
    <ul class="flex flex-wrap">
      <li
        v-for="article of articles"
        :key="article.slug"
        class="xs:w-full md:w-1/2 px-2 xs:mb-6 md:mb-12 article-card"
      >
        <NuxtLink
          :to="{ name: 'blog-slug', params: { slug: article.slug } }"
          class="
            flex
            transition-shadow
            duration-150
            ease-in-out
            shadow-sm
            hover:shadow-md
            xxlmax:flex-col
          "
        >
          <div class="w-1/4 bg-gray-300">
            <img
              v-if="article.img"
              class="h-full xxlmax:w-full object-cover"
              :src="article.img"
            />
          </div>

          <div
            class="p-6 flex flex-col justify-between xxlmin:w-1/2 xxlmax:w-full"
          >
            <h2 class="font-bold">{{ article.title }}</h2>
            <p>by {{ article.author.name }}</p>
            <p class="font-bold text-gray-600 text-sm">
              {{ article.description }}
            </p>
          </div>
        </NuxtLink>
      </li>
    </ul>

    <footer class="flex justify-center border-gray-500 border-t-2">
      <p class="mt-4">
        Created by
        <a
          href="https://github.com//gabrielcaiana"
          class="font-bold hover:underline"
          >Gabriel Caiana</a
        >
      </p>
    </footer>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const articles = await $content('articles')
      .only(['title', 'description', 'img', 'slug', 'author'])
      .sortBy('createdAt', 'asc')
      .fetch()

    return {
      articles,
    }
  },
}
</script>

<style lang="css">
.article-card {
  border-radius: 8px;
}
.article-card a {
  background-color: #fff;
  border-radius: 8px;
}
.article-card img div {
  border-radius: 8px 0 0 8px;
}
</style>
