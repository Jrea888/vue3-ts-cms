export interface UsersListInfo {
    cellphone: number
    createAt: string
    departmentId: number
    enable: number
    id: number
    name: string
    realname: string
    roleId: number
    updateAt: string
}

export interface ResponseUsersData {
    totalCount: number
    list: Array<UsersListInfo>
}
