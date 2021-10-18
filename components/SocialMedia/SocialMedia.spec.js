import { mount } from '@vue/test-utils'
import SocialMedia from './SocialMedia.vue'

describe('SocialMedia', () => {
  let wrapper

  beforeAll(() => {
    wrapper = mount(SocialMedia, {})
  })
  test('is a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  })
})
