<template>
  <div class="w-full px-2 xs:mb-6 md:mb-12 article-card mt-10">
    <NuxtLink
      :to="`/articles/author/${author.name}`"
      class="flex transition-shadow duration-150 ease-in-out shadow-sm hover:shadow-md xxlmax:flex-col"
    >
      <nuxt-img
        v-if="author.image"
        :src="author.image"
        :alt="author.name"
        class="h-32 xxlmin:w-1/2 xxlmax:w-full object-cover rounded-md"
      />
      <div class="flex flex-col m-4">
        <p class="font-general-medium text-white">{{ author.name }}</p>
        <p class="font-general-regular text-white">{{ author.bio }}</p>
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
