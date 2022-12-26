import axios from 'axios'
import type { AxiosInstance } from 'axios'
import { ElLoading } from 'element-plus'
import { ServiceInterceptors, RequestConfig } from './type'

const DEFAULT_LOADING = true

class Service {
  instance: AxiosInstance
  interceptors?: ServiceInterceptors
  isShowLoading?: boolean
  loading?: any

  constructor(config: RequestConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors
    this.isShowLoading = config.showLoading ?? DEFAULT_LOADING

    // 拦截实例中的请求
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptors,
      this.interceptors?.requestInterceptorsCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptors,
      this.interceptors?.responseInterceptorsCatch
    )

    // 所有实例都有的拦截器
    this.instance.interceptors.request.use(
      (config) => {
        if (this.isShowLoading) {
          this.loading = ElLoading.service({
            lock: true,
            text: 'Loading',
            background: 'rgba(0, 0, 0, 0.7)'
          })
        }
        return config
      },
      (error) => {
        this.loading.close()
        return error
      }
    )
    this.instance.interceptors.response.use(
      (res) => {
        this.loading.close()

        return res.data
      },
      (error) => {
        this.loading.close()
        return error
      }
    )
  }

  // 给每一个请求方式也做拦截
  request<T>(config: RequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      // 单个请求对请求config的处理
      if (config.interceptors?.requestInterceptors) {
        config = config.interceptors?.requestInterceptors(config)
      }

      // 是否显示loading加载
      if (config.showLoading === false) {
        this.isShowLoading = config.showLoading
      }

      this.instance
        .request<any, T>(config)
        .then((data) => {
          if (config.interceptors?.responseInterceptors) {
            data = config.interceptors.responseInterceptors(data)
          }
          // 设置回默认值
          this.isShowLoading = DEFAULT_LOADING
          resolve(data)
        })
        .catch((error) => {
          this.isShowLoading = DEFAULT_LOADING
          reject(error)
        })
    })
  }

  get<T>(config: RequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'GET' })
  }

  post<T>(config: RequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'POST' })
  }

  delete<T>(config: RequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'DELETE' })
  }

  patch<T>(config: RequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'PATCH' })
  }
}

export default Service
