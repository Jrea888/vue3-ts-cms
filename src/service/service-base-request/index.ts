import axios from 'axios'
import {ElLoading} from 'element-plus/lib'
import type {AxiosInstance} from 'axios'
import type {ServiceInterceptors, RequestConfig} from './type'
import localCache from '@/utils/cache'

// 默认每个请求都显示loading
const DEFAULT_LOADING = true

class ServiceRequest {
    // axios实例对象
    public instance: AxiosInstance
    // 实例对象对象拦截器
    public interceptors?: ServiceInterceptors
    // 是否显示loading
    public isShowLoading?: boolean
    public loading?: any

    constructor(config: RequestConfig) {
        this.instance = axios.create(config)
        this.interceptors = config.interceptors
        this.isShowLoading = config.showLoading ?? DEFAULT_LOADING

        // 对实例的请求和响应拦截器进行处理
        this.instance.interceptors.request.use(
            this.interceptors?.requestInterceptors,
            this.interceptors?.requestInterceptorsCatch
        )
        this.instance.interceptors.response.use(
            this.interceptors?.responseInterceptors,
            this.interceptors?.responseInterceptorsCatch
        )

        // 拦截axios实例中的请求，全局的请求拦截和响应拦截器
        this.instance.interceptors.request.use(
            config => {
                const token = localCache.getCache('token')
                if (token && config.headers) {
                    config.headers.Authorization = `Bearer ${token}`
                }

                // 是否显示loading加载动画
                if (this.isShowLoading) {
                    this.loading = ElLoading.service({lock: true, text: 'Loading', background: 'rgba(0, 0, 0, 0.7)'})
                }
                return config
            },
            error => {
                this.loading.close()
                return error
            }
        )
        this.instance.interceptors.response.use(
            res => {
                // 响应拦截后关闭loading
                this.loading.close()
                // 返回服务端定义数据结构中的data数据
                return res.data
            },
            error => {
                this.loading.close()
                return error
            }
        )
    }

    // 定义通用的请求方式，给每一个请求也配置拦截器
    private request<T>(config: RequestConfig<T>): Promise<T> {
        return new Promise((resolve, reject) => {
            // 对单个请求进行拦截
            if (config.interceptors?.requestInterceptors) {
                config = config.interceptors?.requestInterceptors(config)
            }

            // 如果配置的showLoading为false，就不显示loading加载动画
            if (config.showLoading === false) {
                this.isShowLoading = config.showLoading
            }

            this.instance
                .request<any, T>(config)
                .then(data => {
                    // 对单个响应进行拦截，就对响应数据进行处理
                    if (config.interceptors?.responseInterceptors) {
                        data = config.interceptors.responseInterceptors(data)
                    }
                    // 设置回默认值
                    this.isShowLoading = DEFAULT_LOADING
                    resolve(data)
                })
                .catch(error => {
                    this.isShowLoading = DEFAULT_LOADING
                    reject(error)
                })
        })
    }

    public get<T>(config: RequestConfig<T>): Promise<T> {
        return this.request<T>({...config, method: 'GET'})
    }

    public post<T>(config: RequestConfig<T>): Promise<T> {
        return this.request<T>({...config, method: 'POST'})
    }

    public delete<T>(config: RequestConfig<T>): Promise<T> {
        return this.request<T>({...config, method: 'DELETE'})
    }

    public patch<T>(config: RequestConfig<T>): Promise<T> {
        return this.request<T>({...config, method: 'PATCH'})
    }
}

export default ServiceRequest
