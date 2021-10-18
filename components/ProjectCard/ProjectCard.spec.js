import { mount } from '@vue/test-utils'
import ProjectCard from '~/components/ProjectCard/ProjectCard.vue'

describe('ProjectCard', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(ProjectCard)
    expect(wrapper.vm).toBeTruthy()
  })
})
