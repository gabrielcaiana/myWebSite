<template>
  <div class="w-56 rounded-full p-2 border-2 border-green-500 cursor-pointer">
    <a target="_blank" rel="noopener" href="https://www.linkedin.com/in/gabrielcaiana/">
      <nuxt-img loading="lazy" provider="static" class="rounded-full" src="/images/me.jpeg" alt="Gabriel Caiana" />
    </a>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'Person'
})
</script>

<style lang="scss" scoped>

</style>