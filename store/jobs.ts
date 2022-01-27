import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import { Job } from '@/models'

@Module({ name: 'jobs', stateFactory: true, namespaced: true })
export default class Jobs extends VuexModule {
  private jobs = [] as Job[]

  public get all() {
    return this.jobs
  }

  @Mutation
  private SET_ALL(jobs: Job[]) {
    this.jobs = jobs  
  }

  @Action
  public async index(jobs: []) {
    await this.context.commit('SET_ALL', jobs)
  }
}