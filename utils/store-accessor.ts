/* eslint-disable import/no-mutable-exports */
import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'

import Jobs from '@/store/jobs'
import Projects from '@/store/projects'
import About from '@/store/about'

let jobs: Jobs
let projects: Projects
let about: About


const initializeStores = (store: Store<any>): void => {
  jobs = getModule(Jobs, store)
  projects = getModule(Projects, store)
  about = getModule(About, store)
}

export { initializeStores, jobs, projects, about }