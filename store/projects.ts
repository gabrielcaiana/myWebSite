import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import { Project } from '@/models'
import { $axios } from '@/utils/nuxt-instance'

@Module({ name: 'projects', stateFactory: true, namespaced: true })
export default class Projects extends VuexModule {
  private projects = [] as Project[]

  public get all() {
    return this.projects
  }

  @Mutation
  private SET_ALL(projects: Project[]) {
    this.projects = projects 
  }

  @Action
  public async index() {
    const projects = await $axios.$get('/api/projects.json')
    this.context.commit('SET_ALL', projects)
  }
}