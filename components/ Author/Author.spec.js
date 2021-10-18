import { mount, RouterLinkStub } from "@vue/test-utils"
import Author from "~/components/ Author/Author.vue"

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
})
