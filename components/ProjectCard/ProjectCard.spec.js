import { mount } from '@vue/test-utils'
import ProjectCard from '~/components/ProjectCard/ProjectCard.vue'

describe('ProjectCard', () => {
  let wrapper

  beforeAll(() => {
    wrapper = mount(ProjectCard, {
      propsData: {
        card: {
          title: 'website',
          cover: '/images/projects/myWebsite.png',
          link: 'https://www.gabrielcaiana.com',
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          technologies: [{ "name": "NuxtJs", "color": "#4EB07F" }],
        },
      },
    })
  })

  it('is a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  })

  it('validate props', () => {
    expect(wrapper.find("h1").text()).toBe("website")
    expect(wrapper.find("a").attributes().href).toBe("https://www.gabrielcaiana.com")
    expect(wrapper.find("p").text()).toBe("Lorem ipsum dolor sit amet consectetur adipisicing elit.")
  })
})
