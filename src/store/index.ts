import { createStore, Store, useStore as useVuexStore } from 'vuex'
import { RootState, IStoreType } from './types'
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

export function useStore(): Store<IStoreType> {
  return useVuexStore()
}

export default store
