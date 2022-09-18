<template>
  <div
    class="w-[160px] md:w-[300px] h-fit md:ml-6 rounded-md p-2 border-2 border-purple-500 cursor-pointer"
  >
    <a
      target="_blank"
      rel="noopener"
      href="https://www.linkedin.com/in/gabrielcaiana/"
    >
      <nuxt-img
        :src="avatar"
        placeholder="Gabriel Caiana"
        alt="Gabriel Caiana"
        class="rounded-md"
        loading="lazy"
        fit="cover"
        quality="80"
        format="png"
      />
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
      required: true,
    },
  },
})
</script>
