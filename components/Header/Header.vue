<template>
  <header class="flex justify-center items-center py-4">
    <div class="flex justify-between container px-6">
      <nuxt-link to="/">Gabriel Caiana</nuxt-link>
      <ul v-if="isMobile.width > 901" class="flex">
        <li
          v-for="(item, index) in items"
          :key="index"
          class="pl-6 hover:text-blue-500 transition duration-300 ease-in-out"
        >
          <nuxt-link :to="item.path" v-text="item.title"></nuxt-link>
        </li>
      </ul>
    <HamburguerMenu v-if="isMobile.width < 900" />
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { title: 'Home', path: '/' },
        { title: 'About', path: '/about' },
        { title: 'Projects', path: '/projects' },
        { title: 'Blog', path: '/articles/page' },
      ],

      window: {
        width: 0,
      },
    }
  },
  computed: {
    isMobile() {
      return this.window
    }
  },
  mounted() {
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    handleResize() {
      this.window.width = window.innerWidth
      this.window.height = window.innerHeight
    },
  },
}
</script>
