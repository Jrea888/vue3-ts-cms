import {Module, MutationTree, ActionTree} from 'vuex'
import router from '@/router'
import {LoginParams, UserInfo, UserMenusInfo} from '@/model'
import {serviceLogin} from '@/service'
import localCache from '@/utils/cache'
import {mapMenusToRoutes} from '@/utils/map-menus'
import {RootState} from '../types'
import {LoginState} from './types'

const SET_TOKEN = 'SET_TOKEN'
const SET_USER_INFO = 'SET_USER_INFO'
const SET_USER_MENUS = 'SET_USER_MENUS'

const state: LoginState = {
    token: '',
    userInfo: {
        cellphone: 0,
        createAt: '',
        department: {
            createAt: '',
            id: 0,
            leader: '',
            name: '',
            parentId: null,
            updateAt: ''
        },
        enable: 0,
        id: 0,
        name: '',
        realname: '',
        role: {
            createAt: '',
            id: 0,
            intro: '',
            name: '',
            updateAt: ''
        },
        updateAt: ''
    },
    userMenus: []
}

const mutations: MutationTree<LoginState> = {
    [SET_TOKEN](state: LoginState, token: string) {
        state.token = token
    },
    [SET_USER_INFO](state: LoginState, userInfo: UserInfo) {
        state.userInfo = userInfo
    },
    [SET_USER_MENUS](state: LoginState, userMenus: Array<UserMenusInfo>) {
        state.userMenus = userMenus
        console.log('注册动态路由~')
        // 1.将userMenus映射到routes中
        const routers = mapMenusToRoutes(userMenus)

        // 2.将routes添加到router.main中
        for (const route of routers) {
            router.addRoute('main', route)
        }
    }
}

const actions: ActionTree<LoginState, RootState> = {
    async accountLogin({commit}, payload: LoginParams) {
        // 1.执行登录
        const {id, token} = await serviceLogin.accountLogin(payload)
        commit(SET_TOKEN, token)
        localCache.setCache('token', token)

        // 2.请求用户信息
        const userInfo = await serviceLogin.userInfoById(id)
        commit(SET_USER_INFO, userInfo)
        localCache.setCache('userInfo', userInfo)

        // 3.请求用户菜单
        const userMenus = await serviceLogin.userMenusByRoleId(userInfo.id)
        commit(SET_USER_MENUS, userMenus)
        localCache.setCache('userMenus', userMenus)

        // 4.跳到首页
        router.push('/main')
    },
    initLoadLogin({commit}) {
        const token = localCache.getCache('token')
        if (token) {
            commit(SET_TOKEN, token)
        }
        const userInfo = localCache.getCache('userInfo')
        if (userInfo) {
            commit(SET_USER_INFO, userInfo)
        }
        const userMenus = localCache.getCache('userMenus')
        if (userMenus) {
            commit(SET_USER_MENUS, userMenus)
        }
    }
}

const loginStore: Module<LoginState, RootState> = {
    namespaced: true,
    state,
    getters: {},
    mutations,
    actions
}

export default loginStore
