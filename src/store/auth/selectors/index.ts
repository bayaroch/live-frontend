import { createSelector } from '@reduxjs/toolkit'
import { RootState } from '@store/store'

const getRoot = (state: RootState) => state.auth

export const getAuth = createSelector(getRoot, (state) => state.user)

export const getStatus = createSelector(getRoot, (state) => state.status)

export const currentUserId = createSelector(
  getRoot,
  (state) => state.user?.user.id
)

export const getIsAuthenticated = createSelector(
  getRoot,
  (state) => !!state.user?.payload?.access_token
)
