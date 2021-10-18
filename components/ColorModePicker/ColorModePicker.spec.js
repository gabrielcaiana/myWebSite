import { mount } from '@vue/test-utils'
import ColorModePicker from './ColorModePicker.vue'
import IconSystem from '@/assets/icons/system.svg?inline'
import IconLight from '@/assets/icons/light.svg?inline'
import IconDark from '@/assets/icons/dark.svg?inline'
import IconSepia from '@/assets/icons/sepia.svg?inline'

describe('ColorModePicker', () => {
  let wrapper

  beforeAll(() => {
    wrapper = mount(ColorModePicker, {
      stubs: {
        IconSystem,
        IconLight,
        IconDark,
        IconSepia,
      }
    })
  })
  it('is a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  })
})
