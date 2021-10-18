import { mount } from '@vue/test-utils'
import Footer from '~/components/Footer/Footer.vue'

describe('Footer', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Footer)
    expect(wrapper.vm).toBeTruthy()
  })
})
