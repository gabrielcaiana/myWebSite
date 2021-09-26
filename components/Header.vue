<template>
  <header class="flex justify-center justify-center py-4">
    <div class="container flex justify-between">
      <nuxt-link to="/">Gabriel Caiana</nuxt-link>
      <ul class="flex">
        <li v-for="(item, index) in items" :key="index" class="pl-3">
          <nuxt-link :to="item.path" v-text="item.title"></nuxt-link>
        </li>
      </ul>
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
    }
  },
}
</script>
