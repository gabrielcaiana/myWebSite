<template>
  <div
    class="w-[160px] md:w-[300px] h-fit md:ml-6 rounded-md p-2 border-2 border-purple-500 cursor-pointer"
  >
    <a
      target="_blank"
      rel="noopener"
      href="https://www.linkedin.com/in/gabrielcaiana/"
    >
      <img
        loading="lazy"
        class="rounded-md"
        :src="avatar"
        alt="Gabriel Caiana"
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
