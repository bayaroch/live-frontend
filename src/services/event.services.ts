import { URI } from '@constants/uri.constants'
import api from './api'

export type EventCreateParams = {
  title: string
  description: string
  ticket_limit: number
  ticket_price: number
  cover_url?: string
  category: number
  timezone: number
  event_start: string
  event_end: string
  sale_start: string
  sale_end: string
}

export type EventCreateResponse = EventCreateParams & {
  organizers: UserItem[]
}

export type EventResponse = EventCreateParams & {
  organizers: UserItem[]
}

export type UserItem = {
  id: string
  name: null | string
  email: string
  phone_number: null | string
  type: number
}

export type PageParams = {
  page?: number
  limit?: number
}

export type eventListData = {
  title: string
  description: string
  ticket_limit: number
  ticket_price: number
  cover_url?: string
  category: number
  timezone: number
  event_start: string
  event_end: string
  sale_start: string
  sale_end: string
  is_deleted: boolean
}

export type EventListResponse = {
  result: eventListData[]
  count: number
}

export const create = async (
  params: EventCreateParams
): Promise<EventCreateResponse> => {
  const { data } = await api.post<EventCreateResponse>(URI.EVENTS, params)
  return data
}

export const event = async (id: string): Promise<EventCreateResponse> => {
  const { data } = await api.get<EventCreateResponse>(
    URI.EVENT.replace(/:id/gi, id)
  )
  return data
}

export const events = async (param: PageParams): Promise<EventListResponse> => {
  const { data } = await api.get<EventListResponse>(URI.EVENTS, {
    params: param,
  })
  return data
}

export const update = async (params: EventCreateParams) => {
  const { data } = await api.patch(URI.EVENTS, params)
  return data
}

export const deleteEvent = async (id: string) => {
  const { data } = await api.delete(URI.EVENT.replace(/:id/gi, id))
  return data
}
