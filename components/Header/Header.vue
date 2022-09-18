<template>
  <header class="flex justify-center items-center py-24 px-8">
    <div class="flex justify-between items-center w-[864px] m-auto">
      <nuxt-link to="/">
        <nuxt-img width="170" src="/images/logo.svg" alt="Gabriel Caiana" />
      </nuxt-link>
      <ul
        v-if="isMobile.width > 901"
        class="flex items-center font-general-medium text-white"
      >
        <li
          v-for="(menu, index) in menus"
          :key="index"
          class="pl-6 hover:text-purple-700 transition duration-300 ease-in-out"
        >
          <nuxt-link :to="menu.path" v-text="menu.name" />
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
        { name: 'Projetos', path: '/projects' },
        { name: 'Carreira', path: '/career' },
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
