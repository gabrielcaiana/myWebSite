<template>
  <div class="w-56 rounded-full p-2 border-2 border-green-500 cursor-pointer">
    <a target="_blank" rel="noopener" href="https://www.linkedin.com/in/gabrielcaiana/">
      <img loading="lazy" class="rounded-full" :src="avatar" alt="Gabriel Caiana" />
    </a>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'Person',

  props: {
    avatar: {
      type: String,
      required: true
    }
  }
})
</script>

<style lang="scss" scoped>

</style>