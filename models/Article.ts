
interface Author {
  bio: string,
  image: string,
  name: string
}
export interface Article {
  title: string
  description: string,
  alt: string,
  createdAt: string
  updatedAt: string
  img: string,
  toc: [],
  slug: string,
  path: string,
  extension: string
  author: Author
}