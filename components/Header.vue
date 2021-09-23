<template>
  <header class="flex justify-center justify-center py-4">
    <div class="container flex justify-between">
      <span>Gabriel Caiana</span>
      <ul class="flex">
        <AppSearchInput />

        <li class="pl-3" v-for="(item, index) in items" :key="index">
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
        { title: 'Blog', path: '/blog' },
      ],
    }
  },
}
</script>
