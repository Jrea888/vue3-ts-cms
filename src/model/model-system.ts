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

export interface MenuListInfo {
    icon: string
    id: number
    name: string
    sort: number | null
    type: number
    url: string | null
    children: Array<MenuListInfo>
}
export interface RoleListInfo {
    id: number
    name: string
    createAt: string
    updateAt: string

    intro: string
    menuList: Array<MenuListInfo>
}

export interface ResponseTableListData<T> {
    totalCount: number
    list: Array<T>
}
