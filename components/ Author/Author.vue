<template>
  <div class="w-full px-2 xs:mb-6 md:mb-12 article-card">
    <NuxtLink
      :to="`/articles/author/${author.name}`"
      class="flex transition-shadow duration-150 ease-in-out shadow-sm hover:shadow-md xxlmax:flex-col"
    >
      <img 
        v-if="author.image"
        class="h-48 xxlmin:w-1/2 xxlmax:w-full object-cover"
        :src="author.image"
        :alt="author.name"
      />
      <div class="flex flex-col m-4">
        <h4 class="font-semibold">Author</h4>

        <p class="author-name">{{ author.name }}</p>
        <p class="author-bio">{{ author.bio }}</p>
      </div>
    </NuxtLink>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'Author',
  props: {
    author: {
      type: Object,
      required: true,
    },
  },
})
</script>
