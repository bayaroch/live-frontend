import { createAction } from '@reduxjs/toolkit'
import { Dialog } from './types'

export const showDialog = createAction<Dialog>('dialog/addDialog')
export const actionDialog = createAction<string>('dialog/actionDialog')
export const removeDialog = createAction('dialog/removeDialog')

export const addToast = createAction<string>('toast/addToast')
export const removeToast = createAction<string>('toast/removeToast')
export const cleanToasts = createAction('toast/cleanToasts')
