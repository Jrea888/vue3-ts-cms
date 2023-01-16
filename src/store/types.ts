import { LoginState } from './login/types'

export interface RootState {
  count: number
}

export interface IRootInfo {
  login: LoginState
}
export type IStoreType = IRootInfo & RootState
