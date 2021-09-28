<template>
  <transition name="slide">
    <nav v-if="show" class="menu-mobile">
      <nuxt-link class="item" to="/">Home</nuxt-link>
      <nuxt-link class="item" to="/about">About</nuxt-link>
      <nuxt-link class="item" to="/projects">Projects</nuxt-link>
      <nuxt-link class="item" to="/articles">Blog</nuxt-link>
    </nav>
  </transition>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
}
</script>

<style lang="css" scoped>
.menu-mobile {
  height: 100vh;
  width: 250px;
  background: #243746;
  position: absolute;
  top: 0;
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
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}
</style>
