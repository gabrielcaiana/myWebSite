<template>
  <transition name="slide">
    <nav v-if="show" class="menu-mobile" @click="close">
      <nuxt-link
        v-for="menu in menus"
        :key="menu.name"
        class="item"
        :to="menu.path"
        v-text="menu.name"
      />
    </nav>
  </transition>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    show: {
      type: Boolean,
      required: true,
      default: false,
    },
  },

  data() {
    return {
      menus: [
        { name: 'Home', path: '/' },
        { name: 'Sobre', path: '/about' },
        { name: 'Projetos', path: '/projects' },
        { name: 'Blog', path: '/articles' },
      ],
    }
  },

  methods: {
    close() {
      this.$emit('close')
    },
  },
})
</script>

<style lang="css" scoped>
.menu-mobile {
  height: 100vh;
  width: 250px;
  position: absolute;
  top: 0;
  background-color: #243746;
  right: 0;
  display: flex;
  flex-direction: column;
  padding: 8rem 1rem;
  box-sizing: border-box;
  position: fixed;
  z-index: 1;
}

.menu-mobile .item {
  padding: 1rem 0;
  color: #fff;
  border-bottom: 1px solid rgba(255, 255, 255, 0.247);
}
</style>
