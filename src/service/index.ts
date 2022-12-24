import { AxiosRequestConfig, AxiosResponse } from 'axios'
import Service from './request'
import { BASE_URL, TIME_OUT } from './request/config'

// 可以创建多个 Service 可以支持不同的请求路径
const serviceRequest = new Service({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    // 具体的全局请求拦截
    requestInterceptors: (config: AxiosRequestConfig) => {
      console.log('1号实例--请求成功的拦截')
      return config
    },
    requestInterceptorsCatch: (error: any) => {
      console.log('1号实例--请求失败的拦截')
      return error
    },
    responseInterceptors: (config: AxiosResponse) => {
      console.log('1号实例--响应成功的拦截')
      return config
    },
    responseInterceptorsCatch: (error: any) => {
      console.log('1号实例--响应失败的拦截')
      return error
    }
  },
  showLoading: true
})

export default serviceRequest
