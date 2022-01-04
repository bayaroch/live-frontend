import { URI } from '@constants/uri.constants'
import api from './api'

export type UserLoginParams = {
  email: string
  password: string
}

export type UserLoginResponse = {
  user: {
    id: string
    name: string
    email: string
    phone_number: string
  }
  metadata: {
    accessToken: string
    expiresIn: number
  }
}

export type LoginSocialParams = {
  access_token: string
  provider: 'google' | 'facebook'
}

export type UserRegisterParams = {
  email: string
  password: string
}

export type UserRegisterResponse = {
  email: string
  id: string
  name?: null | string
  phone_number?: null | string
}

export type UserConfirmParams = {
  token: string
}

export type UserChangePasswordParams = {
  password: string
  new_password: string
}

export const login = async (
  params: UserLoginParams
): Promise<UserLoginResponse> => {
  const { data } = await api.post<UserLoginResponse>(URI.LOGIN, params)
  return data
}

// export const loginSocial = async (
//   params: LoginSocialParams
// ): Promise<UserLoginResponse> => {
//   const { data } = await api.post<UserLoginResponse>(URI.LOGIN_SOCIAL, params)
//   return data
// }

export const register = async (
  params: UserLoginParams
): Promise<UserLoginResponse> => {
  const { data } = await api.post<UserLoginResponse>(URI.REGISTER, params)
  return data
}

export const confirm = async (params: UserConfirmParams): Promise<any> => {
  const { data } = await api.get<any>(URI.CONFIRM, { params })
  return data
}

// export const changePassword = async (
//   params: UserChangePasswordParams
// ): Promise<any> => {
//   const { data } = await api.post<any>(URI.CHANGE_PASSWORD, params)
//   return data
// }
