import { combineReducers, Reducer } from 'redux'
import metadata from '@store/metadata'
import { HYDRATE } from 'next-redux-wrapper'
import common from './common'
import auth from './auth'
import event from './event'

export interface AppState {
  metadata: any
  event: any
  auth: any
  common: any
}

const combinedReducers = combineReducers({
  metadata: metadata.reducer,
  common: common.reducers,
  auth: auth.reducers,
  event: event.reducers,
})

const reducer: Reducer<any> = (state, action) => {
  if (action.type === HYDRATE) {
    /* client state will be overwritten
     * by server or static state hydation.
     * Implement state preservation as needed.
     * see: https://github.com/kirill-konshin/next-redux-wrapper#server-and-client-state-separation
     */
    const nextState = {
      ...state,
      ...action.payload,
    }
    return nextState
  }
  return combinedReducers(state, action)
}

export default reducer

export type RootState = ReturnType<typeof reducer>
