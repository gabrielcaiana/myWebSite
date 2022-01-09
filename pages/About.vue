<template>
  <Container>
    <h1>Experiência</h1>
    <ul>
      <li
        v-for="(job, index) in allJobs"
        :key="index"
        class="lg:flex lg:flex-row mb-4 sm:flex md:flex-col md:items-start"
      >
        <img
          class="rounded-xl object-cover mr-12"
          :src="require(`../assets${job.image}`)"
          :alt="job.name"
        />

        <div class="border-b-2 w-full">
          <h2>{{ job.ocupation }}</h2>
          <h4>{{ job.name }}</h4>
          <span class="text-gray-500"> {{ job.period }}</span>
          <p class="mt-5">{{ job.description }}</p>
        </div>
      </li>
    </ul>
  </Container>
</template>

<script lang="ts">
import Vue from 'vue'
import { jobs } from '@/store'
export default Vue.extend({
  async asyncData() {
    await jobs.index()
    const allJobs = jobs.all
    return {
      allJobs,
    }
  },

  head: () => ({
    title: 'About',
  }),
})
</script>
