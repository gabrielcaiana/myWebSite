import { mount, RouterLinkStub } from '@vue/test-utils'
import Header from '~/components/Header/Header.vue'
import HamburguerMenu from "~/components/HamburguerMenu/HamburguerMenu.vue"
import MenuMobile from "~/components/MenuMobile/MenuMobile.vue"

describe('Header', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Header, {
      stubs: {
        NuxtLink: RouterLinkStub,
        HamburguerMenu,
        MenuMobile
      },
    })
    expect(wrapper.vm).toBeTruthy()
  })
})
