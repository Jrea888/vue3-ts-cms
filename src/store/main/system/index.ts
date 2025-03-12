import {Module} from 'vuex'
import {RootState} from '@/store/types'
import {serviceSystem} from '@/service'
import {UsersListInfo, RoleListInfo} from '@/model'
import {SystemState, PagePayloadInfo} from './types'

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
        },
        changeRoleList(state, roleList: Array<RoleListInfo>) {
            state.roleList = roleList
        },
        changeRoleCount(state, roleCount: number) {
            state.roleCount = roleCount
        }
    },
    actions: {
        async getPageListAction({commit}, payload: PagePayloadInfo): Promise<void> {
            // 1.获取路径，并请求数据
            const pageName = payload.pageName
            const pageUrl = `${pageName}/list`

            // 2.发送请求
            const {list, totalCount} = await serviceSystem.getPageListData(pageUrl, payload.queryInfo)

            // 3.保存数据
            const changePageName = pageName.charAt(0).toUpperCase() + pageName.slice(1)
            console.log(changePageName, '-----请求的页面数据----changePageName')
            commit(`change${changePageName}List`, list)
            commit(`change${changePageName}Count`, totalCount)
        }
    }
}

export default systemModule
