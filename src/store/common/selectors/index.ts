import { createSelector } from '@reduxjs/toolkit'
import { RootState } from '@store/store'

const getRoot = (state: RootState) => state.common

export const getToasts = createSelector(getRoot, (state) => state.toasts)

export const getDialog = createSelector(getRoot, (state) => state.dialog)

export const getAction = createSelector(getRoot, (state) => state.action)
