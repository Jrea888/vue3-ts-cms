import {serviceRequest} from '../service-instance-request'
import {IDataType, LoginResult, LoginParams, UserInfo, UserMenusInfo} from '@/model'

enum LoginAPI {
    ACCOUNTLOGIN = '/login',
    USERINFO = '/users',
    USERMENUS = '/role'
}

class ServiceLogin {
    /**
     * 账号登录
     * @param params
     * @returns
     */
    public async accountLogin(params: LoginParams): Promise<LoginResult> {
        const result = await serviceRequest.post<IDataType<LoginResult>>({
            url: LoginAPI.ACCOUNTLOGIN,
            data: params
        })

        return result.data
    }

    /**
     * 通过用户ID请求用户信息
     * @param id
     * @returns
     */
    public async userInfoById(id: number): Promise<UserInfo> {
        const result = await serviceRequest.get<IDataType<UserInfo>>({
            url: `${LoginAPI.USERINFO}/${id}`
        })
        return result.data
    }

    public async userMenusByRoleId(roleId: number): Promise<UserMenusInfo> {
        const result = await serviceRequest.get<IDataType<UserMenusInfo>>({
            url: `${LoginAPI.USERMENUS}/${roleId}/menu`
        })
        return result.data
    }
}

export default new ServiceLogin()
