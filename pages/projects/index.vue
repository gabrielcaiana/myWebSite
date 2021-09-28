<template>
  <Container>
    <h1>Projects</h1>
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 mb-12">
      <article>
        <section
          class="
            mt-6
            grid grid-cols-1
            md:grid-cols-1
            lg:grid-cols-3
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
  data() {
    return {
      cards: [
        {
          cover: '/images/projects/biobe.png',
          title: 'Biobe',
          link: 'http://biobe.com.br',
        },
        {
          cover: '/images/projects/ibook.png',
          title: 'Ibook',
          link: 'http://ibook.gabrielcaiana.com',
          repository: 'https://github.com/gabrielcaiana/iBook',
        },
        {
          cover: '/images/projects/sampa.png',
          title: 'Sampa Eventos',
          link: 'http://sampa-eventos.gabrielcaiana.com',
          repository: 'https://github.com/gabrielcaiana/Sampa-Eventos',
        },
      ],
    }
  },
  head: () => ({
    title: 'Projects',
  }),
}
</script>

<style lang="scss" scoped></style>
