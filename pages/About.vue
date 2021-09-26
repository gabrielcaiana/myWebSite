<template>
  <Container>
    <h1>Experience</h1>
    <ul>
      <li
        v-for="(job, index) in jobs"
        :key="index"
        class="flex items-center mb-4"
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
  data() {
    return {
      jobs: [
        {
          ocupation: `Front-end Developer`,
          name: `i4pro`,
          image: `/images/i4pro.jpeg`,
          period: `Feb. 2021 - The moment`,
          description: `I work with the development of systems for the insurance market using javascript, Vue and Nuxt.`,
        },
        {
          ocupation: `UX/UI Designer`,
          name: `Signa Consultoria e Sistemas`,
          image: `/images/signa.jpg`,
          period: `July. 2019 0 Feb. 2021, 1 year 8 months`,
          description: `I was responsible for the ideation and maintenance of the company's product design, as well as the creation of Front-end features, identification of business opportunities, creation of web and mobile interfaces, working with large companies in the logistics market.`,
        },
        {
          ocupation: `IT Technician`,
          name: `AGB computers and Services`,
          image: `/images/agb.jpeg`,
          period: `Feb. 2019 0 Jul. 2021, 4 months`,
          description: ``,
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped></style>
