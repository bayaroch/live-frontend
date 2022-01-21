import { createAsyncThunk } from '@reduxjs/toolkit'
import * as services from '@services/event.services'
import { EVENT_ACTION_TYPE } from './actionType'

export const create = createAsyncThunk<
  services.EventCreateResponse,
  services.EventCreateParams
>(EVENT_ACTION_TYPE.CREATE, async (confirmParams, { rejectWithValue }) => {
  try {
    const res = await services.create(confirmParams)
    return res
  } catch (err) {
    const error: any = err
    if (!error.response) {
      throw error
    }
    return rejectWithValue(error.response.data)
  }
})

export const update = createAsyncThunk<void, services.EventCreateParams>(
  EVENT_ACTION_TYPE.UPDATE,
  async (confirmParams, { rejectWithValue }) => {
    try {
      const res = await services.update(confirmParams)
      return res
    } catch (err) {
      const error: any = err
      if (!error.response) {
        throw error
      }
      return rejectWithValue(error.response.data)
    }
  }
)

export const detail = createAsyncThunk<services.EventCreateResponse, string>(
  EVENT_ACTION_TYPE.DETAIL,
  async (id, { rejectWithValue }) => {
    try {
      const res = await services.event(id)
      return res
    } catch (err) {
      const error: any = err
      if (!error.response) {
        throw error
      }
      return rejectWithValue(error.response.data)
    }
  }
)

export const events = createAsyncThunk<
  services.EventListResponse,
  services.PageParams
>(EVENT_ACTION_TYPE.LIST, async (params, { rejectWithValue }) => {
  try {
    const res = await services.events(params)
    return res
  } catch (err) {
    const error: any = err
    if (!error.response) {
      throw error
    }
    return rejectWithValue(error.response.data)
  }
})

export const deleteEvent = createAsyncThunk<void, string>(
  EVENT_ACTION_TYPE.DELETE,
  async (confirmParams, { rejectWithValue }) => {
    try {
      const res = await services.deleteEvent(confirmParams)
      return res
    } catch (err) {
      const error: any = err
      if (!error.response) {
        throw error
      }
      return rejectWithValue(error.response.data)
    }
  }
)
