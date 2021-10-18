import { mount } from '@vue/test-utils'
import MenuMobile from '~/components/MenuMobile/MenuMobile.vue'

describe('MenuMobile', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(MenuMobile)
    expect(wrapper.vm).toBeTruthy()
  })
})
