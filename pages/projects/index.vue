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
            v-for="(card, index) in cards"
            :key="index"
            :card="card"
          />
        </section>
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

  head: () => ({
    title: 'Projects',
  }),
}
</script>

<style lang="scss" scoped></style>
