export default function (context, inject) {
  const { $axios } = context

  inject('jobsApi', {
    getJobs
  })

  async function getJobs () {
    try {
      const response = await $axios.$get('/api/jobs.json')
      return response
    } catch (err) {
      throw new Error(err)
    }
  }
}
