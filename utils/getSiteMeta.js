const type = 'website'
const url = 'https://gabrielcaiana.com'
const title = "Gabriel Caiana"
const description =
  "Sou um desenvolvedor de software de 25 anos, trabalho com JavaScript | TypeScript | Node | Vue e Nuxt. Apaixonado por tecnologia, inovação e UX | UI design. Atualmente estou cursando tecnólogo em análise e desenvolvimento de sistemas e me especializando no desenvolvimento de softwares com foco em usabilidade e acessibilidade, além de proporcionar uma boa experiência para os usuários."
const mainImage = '/images/me.jpeg'


export default (meta) => {
  debugger
  return [
    {
      hid: "description",
      name: "description",
      content: (meta && meta.description) || description,
    },
    {
      hid: "og:type",
      property: "og:type",
      content: (meta && meta.type) || type,
    },
    {
      hid: "og:url",
      property: "og:url",
      content: (meta && meta.url) || url,
    },
    {
      hid: "og:title",
      property: "og:title",
      content: (meta && meta.title) || title,
    },
    {
      hid: "og:description",
      property: "og:description",
      content: (meta && meta.description) || description,
    },
    {
      hid: "og:image",
      property: "og:image",
      content: (meta && meta.mainImage) || mainImage,
    },
    {
      hid: "twitter:url",
      name: "twitter:url",
      content: (meta && meta.url) || url,
    },
    {
      hid: "twitter:title",
      name: "twitter:title",
      content: (meta && meta.title) || title,
    },
    {
      hid: "twitter:description",
      name: "twitter:description",
      content: (meta && meta.description) || description,
    },
    {
      hid: "twitter:image",
      name: "twitter:image",
      content: (meta && meta.mainImage) || mainImage,
    },
  ]
}
