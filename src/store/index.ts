import { createStore } from 'vuex'
import { RootState } from './types'
import login from './login/login'

const store = createStore<RootState>({
  state: {
    count: 100
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    login
  }
})

export function setupStore(): void {
  store.dispatch('login/initLoadLogin')
}

export default store
