import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import { Me } from '@/models'

@Module({ name: 'about', stateFactory: true, namespaced: true })
export default class About extends VuexModule {
  private about = {} as Me

  public get me() {
    return this.about
  }

  @Mutation
  private SET_ALL(about = {} as Me) {
    this.about = about  
  }

  @Action
  public async index(about = {} as Me) {
    await this.context.commit('SET_ALL', about)
  }
}