<template>
  <header class="flex justify-center items-center py-24">
    <div
      class="flex justify-between items-center justify-center w-[864px] m-auto"
    >
      <nuxt-link to="/">
        <img width="170" src="/images/logo.svg" alt="Gabriel Caiana" />
      </nuxt-link>
      <ul
        v-if="isMobile.width > 901"
        class="flex items-center font-general-regular text-white"
      >
        <li
          v-for="(menu, index) in menus"
          :key="index"
          class="pl-6 hover:text-purple-700 transition duration-300 ease-in-out"
        >
          <nuxt-link :to="menu.path" v-text="menu.name"></nuxt-link>
        </li>
      </ul>
      <HamburguerMenu v-if="isMobile.width < 900" />
    </div>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
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
        height: 0,
      },
    }
  },
  computed: {
    isMobile(): object {
      return this.window
    },
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
})
</script>

<style lang="css" scoped>
header {
  background: url('/images/cover.svg') no-repeat center center / cover;
}
</style>
