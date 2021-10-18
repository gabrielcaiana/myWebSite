import { mount, RouterLinkStub } from "@vue/test-utils"
import Author from "./Author.vue"

describe("Author", () => {

  let wrapper

  beforeAll(() => {
    wrapper = mount(Author, {
      stubs: {
        NuxtLink: RouterLinkStub
      },
      propsData: {
        author: {
          name: "Gabriel Caiana",
          bio: "I`am front-end developer",
          image: "images/me.jpg"
        }
      }
    })
  })

  it("is a Vue instance", () => {
    expect(wrapper.vm).toBeTruthy()
  })

  it("create Snapshot", () => {
    expect(wrapper.element).toMatchSnapshot()
  })

  it("should render the text", () => {
    expect(wrapper.find(".author-name").text()).toBe("Gabriel Caiana")
    expect(wrapper.find(".author-bio").text()).toBe("I`am front-end developer")
  })  
})
