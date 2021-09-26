<template>
  <div>
    <nuxt-link
      :to="{
        name: 'articles-page-page',
        params: { page: 1 },
      }"
    >
      First
    </nuxt-link>

    <nuxt-link
      :to="{
        name: 'articles-page-page',
        params: { page: prevPage }
      }"
    >
      Prev
    </nuxt-link>

    <nuxt-link
      :to="{
        name: 'articles-page-page',
        params: { page: nextPage },
      }"
    >
      Next
    </nuxt-link>

    <nuxt-link
      :to="{
        name: 'articles-page-page',
        params: { page: totalPages },
      }"
    >
      Last
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    total: {
      type: Number,
      default: 0,
    },
    perPage: {
      type: Number,
      default: 5,
    },
  },
  computed: {
    totalPages() {
      return Math.floor(this.total / this.perPage)
    },
    currentPage() {
      return parseInt(this.$route.params.page) || 1
    },
    prevPage() {
      return this.currentPage > 1 ? this.currentPage - 1 : 1
    },
    nextPage() {
      return this.currentPage < this.totalPages
        ? this.currentPage + 1
        : this.totalPages
    },
  },
}
</script>
