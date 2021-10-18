import { mount, RouterLinkStub } from '@vue/test-utils'
import ArticleList from '~/components/ArticleList/ArticleList.vue'
import Container from '~/components/Container/Container.vue'

describe('ArticleList', () => {
  let wrapper

  beforeAll(() => {
    wrapper = mount(ArticleList, {
      stubs: {
        NuxtLink: RouterLinkStub,
        Container
      },
      propsData: {
        articles: [
          {
            title: 'My jest test',
            description: 'Testing vue component',
            slug: 'jest-test',
            path: '/articles/heuristic-nielsen',
            img: 'https://miro.medium.com/max/1400/1*qel9XXYWGOh-bcewpFsu8w.png',
            extension: '.md',
          },
          {
            title: 'My jest test 2',
            description: 'Testing vue component 2',
            slug: 'jest-test-2',
            path: '/articles/heuristic-nielsen',
            img: 'https://miro.medium.com/max/1400/1*qel9XXYWGOh-bcewpFsu8w.png',
            extension: '.md',
          },
        ],
        total: 1,
      },
    })
  })

  it('shold render the list', () => {
    expect(wrapper.findAll('li').length).toBe(2)
  })


  it('shold render the extension', () => {
    const articles = wrapper.props().articles
    articles.forEach(article => {
      expect(article.extension).toBe(".md")
    })
  })

  it('shold render the total', () => {
    expect(wrapper.props().total).toBe(1)
  })

  it('create Snapshot', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
})
