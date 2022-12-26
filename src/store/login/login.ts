import { Module } from 'vuex'
import router from '@/router'
import { RootState } from '../types'
import { LoginState } from './types'
import { LoginParams, UserInfo, UserMenusInfo } from '@/model'
import serviceLogin from '@/service/service-login'
import localCache from '@/utils/cache'

const loginStore: Module<LoginState, RootState> = {
  namespaced: true,
  state: {
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
    userMenus: {
      children: [],
      icon: '',
      id: 0,
      name: '',
      sort: 0,
      type: 0,
      url: ''
    }
  },
  getters: {},
  mutations: {
    changeToken(state, token: string) {
      state.token = token
    },
    changeUserInfo(state, userInfo: UserInfo) {
      state.userInfo = userInfo
    },
    changeUserMenus(state, userMenus: UserMenusInfo) {
      state.userMenus = userMenus
    }
  },
  actions: {
    async accountLogin({ commit }, payload: LoginParams) {
      // 1.执行登录
      const { id, token } = await serviceLogin.accountLogin(payload)
      commit('changeToken', token)
      localCache.setCache('token', token)

      // 2.请求用户信息
      const userInfo = await serviceLogin.userInfoById(id)
      commit('changeUserInfo', userInfo)
      localCache.setCache('userInfo', userInfo)

      // 3.请求用户菜单
      const userMenus = await serviceLogin.userMenusByRoleId(userInfo.id)
      commit('changeUserMenus', userMenus)
      localCache.setCache('userMenus', userMenus)

      // 4.跳到首页
      router.push('/main')
    },
    initLoadLogin({ commit }) {
      const token = localCache.getCache('token')
      if (token) {
        commit('changeToken', token)
      }
      const userInfo = localCache.getCache('userInfo')
      if (userInfo) {
        commit('changeUserInfo', userInfo)
      }
      const userMenus = localCache.getCache('userMenus')
      if (userMenus) {
        commit('changeUserMenus', userMenus)
      }
    }
  }
}

export default loginStore
