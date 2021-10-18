import { mount } from '@vue/test-utils'
import Pagination from '~/components/Pagination/Pagination.vue'

describe('Pagination', () => {
  let wrapper

  beforeAll(() => {
    wrapper = mount(Pagination, {})
  })

  test('is a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  })
})
