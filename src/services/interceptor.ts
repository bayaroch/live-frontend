/* eslint-disable @typescript-eslint/ban-types */
import api from './api'
import { StoreType } from '../store/store'

export const authorizationProvider = (store: StoreType): void => {
  api.interceptors.request.use(
    (config) => {
      const { auth } = store.getState()
      const user = auth.user
      if (user) {
        const token = `Bearer ${user.payload.accessToken}`
        if (token) {
          config.headers.common.Authorization = `${token}`
        }
      }
      return config
    },
    (error) => Promise.reject(error)
  )
  api.interceptors.response.use(
    (response) => {
      return response
    },
    (error) => {
      return Promise.reject(error)
    }
  )
}
