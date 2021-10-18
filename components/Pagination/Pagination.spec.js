import { mount, RouterLinkStub } from '@vue/test-utils'
import Pagination from '~/components/Pagination/Pagination.vue'

describe('Pagination', () => {
  let wrapper

  beforeAll(() => {
    wrapper = mount(Pagination, {
      stubs: {
        NuxtLink: RouterLinkStub
      },
      mocks: {
        $route: {
          params: {
            page: 1
          }
        }
      }
    })
  })

  test('is a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  })
})
