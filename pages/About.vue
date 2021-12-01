<template>
  <Container>
    <h1>Experiência</h1>
    <ul>
      <li
        v-for="(job, index) in jobs"
        :key="index"
        class="lg:flex lg:flex-row mb-4 sm:flex md:flex-col md:items-start"
      >
        <img
          class="rounded-xl object-cover mr-12"
          :src="job.image"
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

<script>
export default {
  async asyncData({ $jobsApi }) {
    const jobsResponse = await $jobsApi.getJobs()

    return {
      jobs: jobsResponse,
    }
  },

  head: () => ({
    title: 'About',
  }),
}
</script>
