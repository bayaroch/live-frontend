import { URI } from '@constants/uri.constants'
import axios, { CancelTokenSource } from 'axios'

const api = axios.create({
  headers: { 'Content-Type': 'application/json' },
  baseURL: URI.API,
})

export const requestSource = function (): CancelTokenSource {
  return axios.CancelToken.source()
}

export default api
