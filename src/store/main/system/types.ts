import {UsersListInfo, RoleListInfo} from '@/model'

export interface SystemState {
    usersList: Array<UsersListInfo>
    usersCount: number
    roleList: Array<RoleListInfo>
    roleCount: number
}

export interface PagePayloadInfo {
    pageName: string
    queryInfo: {
        offset: number
        size: number
    }
}
