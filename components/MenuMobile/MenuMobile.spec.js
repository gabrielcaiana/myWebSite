import { mount, RouterLinkStub } from '@vue/test-utils'
import MenuMobile from '~/components/MenuMobile/MenuMobile.vue'

describe('MenuMobile', () => {
  const path = "/"
  let wrapper 
  beforeAll(() => {
    wrapper = mount(MenuMobile, {
      propsData: {
        show: true
      },
      stubs: {
        NuxtLink: RouterLinkStub
      },

      computed: {
        currentPage() {
          return path
        },
      },
    })
  })

  it('is a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  })
})
