import { createReducer } from '@reduxjs/toolkit'
import * as actions from '../actions'
import { eventListData, EventResponse } from '@services/event.services'

type StateType = {
  detail?: EventResponse | undefined
  update?: EventResponse | undefined
  list?: eventListData[] | undefined
  listCount?: number | undefined
}

const initialState: StateType = {
  detail: undefined,
  update: undefined,
}

export default createReducer(initialState, (builder) => {
  builder.addCase(actions.detail.fulfilled, (state, action) => {
    state.detail = action.payload
  })
  builder.addCase(actions.events.fulfilled, (state, action) => {
    state.list = action.payload.result // pagination later
    state.listCount = action.payload.count
  })
})
