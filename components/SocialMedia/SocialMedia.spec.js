import { shallowMount } from '@vue/test-utils'
import SocialMedia from '~/components/SocialCard/SocialMedia.vue'

describe('SocialMedia', () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(SocialMedia)
    expect(wrapper.vm).toBeTruthy()
  })
})
