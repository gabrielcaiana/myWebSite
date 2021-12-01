<template>
  <header class="flex justify-center items-center py-4">
    <div class="flex justify-between container px-6">
      <nuxt-link to="/">Gabriel Caiana</nuxt-link>
      <ul v-if="isMobile.width > 901" class="flex">
        <li
          v-for="(menu, index) in menus"
          :key="index"
          class="pl-6 hover:text-blue-500 transition duration-300 ease-in-out"
        >
          <nuxt-link :to="menu.path" v-text="menu.name"></nuxt-link>
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
      menus: [
        { name: 'Home', path: '/' },
        { name: 'Sobre', path: '/about' },
        { name: 'Projetos', path: '/projects' },
        { name: 'Blog', path: '/articles/page' },
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
