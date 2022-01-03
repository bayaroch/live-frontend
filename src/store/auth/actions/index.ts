import { createAsyncThunk } from '@reduxjs/toolkit'
import * as services from '@services/auth.services'
import { AUTH_ACTION_TYPE } from './types'

export const loginByEmail = createAsyncThunk<
  services.UserLoginResponse,
  services.UserRegisterParams
>(AUTH_ACTION_TYPE.LOGIN_BY_EMAIL, async (loginParam, { rejectWithValue }) => {
  try {
    const res = await services.login(loginParam)
    return res
  } catch (err) {
    const error: any = err
    if (!error.response) {
      throw error
    }
    return rejectWithValue(error.response.data)
  }
})

export const registerByEmail = createAsyncThunk<
  services.UserLoginResponse,
  services.UserRegisterParams
>(
  AUTH_ACTION_TYPE.REGISTER_BY_EMAIL,
  async (registerParam, { rejectWithValue }) => {
    try {
      const res = await services.register(registerParam)
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

// export const confirm = createAsyncThunk<void, services.UserConfirmParams>(
//   AUTH_ACTION_TYPE.CONFIRM,
//   async (confirmParams, { rejectWithValue }) => {
//     try {
//       const res = await services.confirm(confirmParams)
//       return res
//     } catch (err) {
//       const error: any = err
//       if (!error.response) {
//         throw error
//       }
//       return rejectWithValue(error.response.data)
//     }
//   }
// )

// export const changePassword = createAsyncThunk<
//   void,
//   services.UserChangePasswordParams
// >(
//   AUTH_ACTION_TYPE.CHANGE_PASSWORD,
//   async (changeParam, { rejectWithValue }) => {
//     try {
//       const res = await services.changePassword(changeParam)
//       return res
//     } catch (err) {
//       const error: any = err
//       if (!error.response) {
//         throw error
//       }
//       return rejectWithValue(error.response.data)
//     }
//   }
// )
