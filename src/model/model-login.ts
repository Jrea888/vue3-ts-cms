export interface LoginResult {
  id: number
  name: string
  token: string
}

export interface LoginParams {
  name: string
  password: string
}

export interface UserInfo {
  cellphone: number
  createAt: string
  department: {
    createAt: string
    id: number
    leader: string
    name: string
    parentId: null
    updateAt: string
  }
  enable: number
  id: number
  name: string
  realname: string
  role: {
    createAt: string
    id: number
    intro: string
    name: string
    updateAt: string
  }
  updateAt: string
}

export interface childrenInfo {
  children: Array<{
    id: number
    name: string
    parentId: number
    permission: string
    sort: null
    type: number
    url: null
  }>
  id: number
  name: string
  parentId: number
  sort: number
  type: number
  url: string
}

export interface UserMenusInfo {
  children: Array<childrenInfo>
  icon: string
  id: number
  name: string
  sort: number
  type: number
  url: string
}
