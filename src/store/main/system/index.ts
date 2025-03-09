import {Module} from 'vuex'
import {RootState} from '@/store/types'
import {serviceSystem} from '@/service'
import {UsersListInfo} from '@/model'
import {SystemState} from './types'

const systemModule: Module<SystemState, RootState> = {
    namespaced: true,
    state() {
        return {
            usersList: [],
            usersCount: 0,
            roleList: [],
            roleCount: 0
        }
    },
    getters: {
        pageListData(state) {
            return (pageName: string) => {
                return (state as any)[`${pageName}List`]
            }
        },
        pageListCount(state) {
            return (pageName: string) => {
                return (state as any)[`${pageName}Count`]
            }
        }
    },
    mutations: {
        changeUsersList(state, usersList: Array<UsersListInfo>) {
            state.usersList = usersList
        },
        changeUsersCount(state, usersCount: number) {
            state.usersCount = usersCount
        }
    },
    actions: {
        async getPageListAction({commit}, payload): Promise<void> {
            const pageUrl = `${payload.pageName}/list`
            const result = await serviceSystem.getPageListData(pageUrl, payload.queryInfo)

            commit('changeUsersList', result.list)
            commit('changeUsersCount', result.totalCount)
        }
    }
}

export default systemModule
