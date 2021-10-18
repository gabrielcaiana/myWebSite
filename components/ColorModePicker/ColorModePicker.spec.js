import { mount } from '@vue/test-utils'
import ColorModePicker from './ColorModePicker.vue'

describe('ColorModePicker', () => {
  let wrapper

  beforeAll(() => {
    wrapper = mount(ColorModePicker, {
      mocks: {
        $colorMode: {
          preference: 'dark',
          value: 'dark'
        }
      }
    })
  })
  test('is a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  })
})
