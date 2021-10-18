import { mount } from '@vue/test-utils'
import ColorModePicker from '~/components/ColorModePicker/ColorModePicker.vue'

describe('ColorModePicker', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(ColorModePicker)
    expect(wrapper.vm).toBeTruthy()
  })
})
