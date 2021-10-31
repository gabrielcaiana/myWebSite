<template>
  <Container>
    <h1>Projects</h1>
    <section class="max-w-7xl mx-auto mb-12">
      <article>
        <section
          class="
            mt-6
            grid grid-cols-1
            md:grid-cols-1
            lg:grid-cols-2
            gap-x-6 gap-y-8
          "
        >
          <ProjectCard
            v-for="(card, index) in filteredProjects"
            :key="index"
            :card="card"
          />
        </section>

        <div v-if="page < lastPage" class="w-full flex items-center justify-center py-10">
          <button
            class="
              p-2
              pl-5
              pr-5
              transition-colors
              duration-700
              transform
              bg-green-500
              hover:bg-green-400
              text-gray-100 text-lg
              rounded-lg
              focus:border-4
              border-indigo-300
            "
            @click="loadMore"
          >
            Load more
          </button>
        </div>
      </article>
    </section>
  </Container>
</template>

<script>
export default {
  async asyncData({ $projectsApi }) {
    const projectResponse = await $projectsApi.getProjects()

    return {
      cards: projectResponse,
    }
  },

  data() {
    return {
      perPage: 4,
      lastPage: 0,
      page: 1,
    }
  },

  head: () => ({
    title: 'Projects',
  }),
  
  computed: {
    filteredProjects() {
      return this.cards.slice(0, this.page * this.perPage)
    }
  },

  mounted() {
    this.lastPage = Math.ceil(this.cards.length / this.perPage)
  },

  methods: {
    loadMore() {
      this.page += 1
    },
  },
}
</script>
