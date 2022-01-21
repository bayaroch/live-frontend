import { createSelector } from '@reduxjs/toolkit'
import { RootState } from '@store/store'

const getRoot = (state: RootState) => state.event

export const eventDetail = createSelector(getRoot, (state) => state.detail)

export const eventList = createSelector(getRoot, (state) => state.list)
