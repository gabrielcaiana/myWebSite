<template>
  <div class="max-w-[864px] m-auto p-6 md:p-0 md:mt-10">
    <h1 class="text-white text-2xl mb-8 font-general-medium">Experiência</h1>
    <ul>
      <li
        v-for="(job, index) in allJobs"
        :key="index"
        class="lg:flex lg:flex-row mb-8 md:mb-4 sm:flex md:flex-col md:items-start"
      >
        <nuxt-img
          class="w-24 h-24 rounded-lg mb-8 cursor-pointer"
          :src="job.image"
          :placeholder="job.name"
          loading="lazy"
          fit="cover"
          quality="80"
          format="png"
        />

        <div class="m-0 md:mx-4">
          <span class="text-white text-xl font-medium block">{{
            job.ocupation
          }}</span>
          <span class="text-white text-body font-regular block">{{
            job.name
          }}</span>
          <span class="text-gray-400 text-sm font-regular block">
            {{ job.period }}</span
          >
          <p class="text-white text-body font-regular my-2">
            {{ job.description }}
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { jobs } from '@/store'
export default Vue.extend({
  async asyncData({ $algoliaApi }: any) {
    const response = await $algoliaApi.getJobs()
    jobs.index(response)
    const allJobs = jobs.all
    return {
      allJobs,
    }
  },

  head: () => ({
    title: 'Carreira',
  }),
})
</script>
