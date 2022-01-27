export default function ({ $config }, inject) {
  const appId = $config.algolia.appId
  const apiKey = $config.algolia.apiKey

  const headers = {
    'X-Algolia-API-Key': apiKey,
    'X-Algolia-Application-Id': appId,
  }

  inject('algoliaApi', {
      getJobs,
      getProjects
  });

  async function getJobs () {
    try {
        const response = await fetch(`https://${appId}-dsn.algolia.net/1/indexes/jobs/`,  {
        headers,
      })

      if(response.ok && response.status === 200) {
        const jobs = await response.json()
        return jobs.hits
      } 
  
    } catch(error) {
      console.log(error)
    }
  };

  async function getProjects () {
    try {
        const response = await fetch(`https://${appId}-dsn.algolia.net/1/indexes/projects/`,  {
        headers,
      })

      if(response.ok && response.status === 200) {
        const projects = await response.json()
        return projects.hits
      } 
  
    } catch(error) {
      console.log(error)
    }
  }
}
