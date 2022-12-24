import { AxiosRequestConfig, AxiosResponse } from 'axios'

// 全局
interface ServiceInterceptors<T = AxiosResponse> {
  requestInterceptors?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorsCatch?: (error: any) => any
  responseInterceptors?: (config: T) => T
  responseInterceptorsCatch?: (error: any) => any
}

// 各自请求的拦截
interface RequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: ServiceInterceptors<T>
  showLoading?: boolean
}

export { ServiceInterceptors, RequestConfig }
