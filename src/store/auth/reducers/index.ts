import { createReducer } from '@reduxjs/toolkit'
import * as actions from '../actions'
import { UserLoginResponse } from '@services/auth.services'

type StateType = {
  user?: UserLoginResponse
  confirmType?: 'register' | 'forgot'
  status?: number | undefined
}

const initialState: StateType = {}

export default createReducer(initialState, (builder) => {
  builder
    .addCase(actions.loginByEmail.fulfilled, (state, action) => {
      state.user = action.payload
    })
    .addCase(actions.logOut, (state) => {
      state.user = undefined
    })
})
