import { mount } from '@vue/test-utils'
import AppSearchInput from '@/components/AppSearchInput.vue'

describe('AppSearchInput', () => {
  const wrapper = mount(AppSearchInput)

  it('is a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  })

  it("create Snapshot", () => {
    expect(wrapper.element).toMatchSnapshot()
  })
})
