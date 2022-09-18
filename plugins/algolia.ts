export default function ({ $config }: any, inject: any) {
  const appId = $config.algolia.appId
  const apiKey = $config.algolia.apiKey

  const headers = {
    'X-Algolia-API-Key': apiKey,
    'X-Algolia-Application-Id': appId,
  }

  inject('algoliaApi', {
    getJobs,
    getProjects,
    getAbout,
  })

  async function getJobs() {
    try {
      const response = await fetch(
        `https://${appId}-dsn.algolia.net/1/indexes/jobs/`,
        {
          headers,
        }
      )

      if (response.ok && response.status === 200) {
        const jobs = await response.json()
        return jobs.hits
      }
    } catch (error) {
      console.error(error)
    }
  }

  async function getProjects() {
    try {
      const response = await fetch(
        `https://${appId}-dsn.algolia.net/1/indexes/projects/`,
        {
          headers,
        }
      )

      if (response.ok && response.status === 200) {
        const projects = await response.json()
        return projects.hits
      }
    } catch (error) {
      console.error(error)
    }
  }

  async function getAbout() {
    try {
      const response = await fetch(
        `https://${appId}-dsn.algolia.net/1/indexes/about/`,
        {
          headers,
        }
      )

      if (response.ok && response.status === 200) {
        const about = await response.json()
        return about.hits[0]
      }
    } catch (error) {
      console.error(error)
    }
  }
}
