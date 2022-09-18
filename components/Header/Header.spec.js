import { mount, RouterLinkStub } from '@vue/test-utils'
import Header from '~/components/Header/Header.vue'
import HamburguerMenu from '~/components/HamburguerMenu/HamburguerMenu.vue'
import MenuMobile from '~/components/MenuMobile/MenuMobile.vue'

describe('Header', () => {
  let wrapper

  beforeAll(() => {
    wrapper = mount(Header, {
      stubs: {
        NuxtLink: RouterLinkStub,
        HamburguerMenu,
        MenuMobile,
      },
    })
  })

  it('is a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  })
})
