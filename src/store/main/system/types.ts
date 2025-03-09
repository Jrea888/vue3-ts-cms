import {UsersListInfo} from '@/model'

export interface SystemState {
    usersList: Array<UsersListInfo>
    usersCount: number
    roleList: Array<any>
    roleCount: number
}
