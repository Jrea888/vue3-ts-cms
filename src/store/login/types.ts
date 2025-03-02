import {UserInfo, UserMenusInfo} from '@/model'

export interface LoginState {
    token: string
    userInfo: UserInfo
    userMenus: UserMenusInfo
}
