import {Module} from 'vuex'
import {RootState} from '@/store/types'
import {SystemState} from './types'

const systemModule: Module<SystemState, RootState> = {
    namespaced: true,
    state() {
        return {
            count: 0
        }
    },
    getters: {},
    mutations: {},
    actions: {}
}

export default systemModule
