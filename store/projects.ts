import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import { Project } from '@/models'

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
  public index(projects: []) {
    this.context.commit('SET_ALL', projects)
  }
}