import { mount } from '@vue/test-utils'
import HamburguerMenu from '~/components/HamburguerMenu/HamburguerMenu.vue'

describe('HamburguerMenu', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(HamburguerMenu)
    expect(wrapper.vm).toBeTruthy()
  })
})
