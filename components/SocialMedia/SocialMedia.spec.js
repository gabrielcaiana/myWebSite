import { mount } from '@vue/test-utils'
import SocialMedia from './SocialMedia.vue'

describe('SocialMedia', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(SocialMedia)
    expect(wrapper.vm).toBeTruthy()
  })
})
