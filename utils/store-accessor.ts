/* eslint-disable import/no-mutable-exports */
import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'

import Jobs from '@/store/jobs'
import Projects from '@/store/projects'

let jobs: Jobs
let projects: Projects


const initializeStores = (store: Store<any>): void => {
  jobs = getModule(Jobs, store)
  projects = getModule(Projects, store)
}

export { initializeStores, jobs, projects }