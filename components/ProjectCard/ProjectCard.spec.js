import { mount } from '@vue/test-utils'
import ProjectCard from '~/components/ProjectCard/ProjectCard.vue'

describe('ProjectCard', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(ProjectCard, {
      propsData: {
        card: {
          title: "website",
          cover: "/images/projects/myWebsite.png",
          link: "https://www.gabrielcaiana.com"
        }
      }
    })
    expect(wrapper.vm).toBeTruthy()
  })
})
