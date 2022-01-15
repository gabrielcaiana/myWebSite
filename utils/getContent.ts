export default async ($content: any, params: any, error: any) => {
  const currentPage = parseInt(params.page)

  const perPage = 4

  const allArticles = await $content('articles').fetch()

  const totalArticles = allArticles.length

  const lastPage = Math.ceil(totalArticles / perPage)

  const lastPageCount = totalArticles % perPage

  const skipNumber = () => {
    if (currentPage === 1) {
      return 0
    }
    if (currentPage === lastPage) {
      return totalArticles - lastPageCount
    }
    return (currentPage - 1) * perPage
  }

  const paginatedArticles = await $content('articles')
    .only(['title', 'description', 'img', 'slug', 'published'])
    .sortBy('published', 'desc')
    .limit(perPage)
    .skip(skipNumber())
    .fetch()

  if (currentPage === 0 || !paginatedArticles.length) {
    return error({ statusCode: 404, message: 'No articles found!' })
  }

  return {
    allArticles,
    paginatedArticles
  }
}
