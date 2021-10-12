export default function(context, inject,) {

  const { $axios } = context

  inject("projectsApi", {
    getProjects
  })

  async function getProjects() {
    try {
      const response = await $axios.$get("/api/projects.json")
      return response
    } catch(err) {
      throw new Error(err)
    }
  }
}