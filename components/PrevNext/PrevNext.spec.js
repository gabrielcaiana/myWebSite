import { mount } from '@vue/test-utils'
import PrevNext from '~/components/PrevNext/PrevNext.vue'

describe('PrevNext', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(PrevNext)
    expect(wrapper.vm).toBeTruthy()
  })
})
