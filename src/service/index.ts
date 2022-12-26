import { AxiosResponse } from 'axios'
import Service from './request'
import localCache from '@/utils/cache'
import { BASE_URL, TIME_OUT } from './request/config'

// 可以创建多个 Service 可以支持不同的请求路径
const serviceRequest = new Service({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    // 具体的全局请求拦截
    requestInterceptors: (config) => {
      // 携带token
      const token = localCache.getCache('token')
      if (token && config.headers) {
        config.headers.Authorization = `Bearer ${token}`
      }
      return config
    },
    requestInterceptorsCatch: (error: any) => {
      return error
    },
    responseInterceptors: (config: AxiosResponse) => {
      return config
    },
    responseInterceptorsCatch: (error: any) => {
      return error
    }
  },
  showLoading: true
})

export default serviceRequest
