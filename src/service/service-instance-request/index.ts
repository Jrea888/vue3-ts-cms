import {AxiosResponse} from 'axios'
import ServiceRequest from '../service-base-request'
import {BASE_URL, TIME_OUT} from '../service-base-request/config'

// 可以创建多个 Service 可以支持不同的请求路径的服务实例
export const serviceRequest = new ServiceRequest({
    baseURL: BASE_URL,
    timeout: TIME_OUT,
    // 配置每个实例的 请求拦截和响应拦截器
    interceptors: {
        requestInterceptors: config => {
            //  携带token：通过全局拦截器去携带配置
            // const token = localCache.getCache('token')
            // if (token && config.headers) {
            //     config.headers.Authorization = `Bearer ${token}`
            // }
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
