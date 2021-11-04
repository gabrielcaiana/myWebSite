import { mount } from '@vue/test-utils'
import HamburguerMenu from '~/components/HamburguerMenu/HamburguerMenu.vue'
import MenuMobile from "~/components/MenuMobile/MenuMobile.vue"

describe('HamburguerMenu', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(HamburguerMenu, {
      stubs: { MenuMobile},
    })
    expect(wrapper.vm).toBeTruthy()
  })
})
