import { mount } from '@vue/test-utils'
import Pagination from '~/components/Pagination/Pagination.vue'

describe('Pagination', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Pagination)
    expect(wrapper.vm).toBeTruthy()
  })
})
