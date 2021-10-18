import { mount } from '@vue/test-utils'
import ArticleList from '~/components/ArticleList/ArticleList.vue'

describe('ArticleList', () => {
  let wrapper

  beforeAll(() => {
    wrapper = mount(ArticleList, {})
  })

  it('is a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  })

  it('create Snapshot', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
})
