<template>
  <Container>
    <h1>Projetos</h1>
    <section class="max-w-7xl mx-auto mb-12">
      <article>
        <section
          class="mt-6 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-8"
        >
          <ProjectCard
            v-for="(card, index) in filteredProjects"
            :key="index"
            :card="card"
          />
        </section>

        <div
          v-if="page < lastPage"
          class="w-full flex items-center justify-center py-10"
        >
          <button
            class="p-2 pl-5 pr-5 transition-colors duration-700 transform bg-green-500 hover:bg-green-400 text-gray-100 text-lg rounded-lg focus:border-4 border-indigo-300"
            @click="loadMore"
          >
            Carregar mais
          </button>
        </div>
      </article>
    </section>
  </Container>
</template>

<script lang="ts">
import Vue from 'vue'
import { projects } from '@/store'
export default Vue.extend({
  async asyncData() {
    await projects.index()

    const allProjects = projects.all

    return {
      allProjects,
    }
  },

  data() {
    return {
      perPage: 4,
      lastPage: 0,
      page: 1,
      allProjects: []
    }
  },

  head: () => ({
    title: 'Projects',
  }),

  computed: {
    filteredProjects(): string[] {
      return this.allProjects.slice(0, this.page * this.perPage)
    },
  },

  mounted() {
    this.lastPage = Math.ceil(this.allProjects.length / this.perPage)
  },

  methods: {
    loadMore() {
      this.page += 1
    },
  },
})
</script>
