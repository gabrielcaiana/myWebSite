import { mount } from '@vue/test-utils'
import Container from './Container.vue'

describe('Container', () => {
  const wrapper = mount(Container, {
    slots: {
      default: '<i/>'
    }
  })
  
  it('should render the slot content', () => {
    expect(wrapper.find('i').exists()).toBe(true)
  })

  it('should have self component class name', () => {
    expect(wrapper.classes()).toContain("container")
  })
})
