import { mount } from '@vue/test-utils'
import Container from '~/components/Container/Container.vue'

describe('Container', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Container)
    expect(wrapper.vm).toBeTruthy()
  })
})
