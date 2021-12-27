import * as React from 'react'

import { ButtonProps, DialogProps } from '@mui/material'

export interface ConfirmOptions {
  title?: React.ReactNode
  description?: React.ReactNode
  content?: React.ReactNode | null
  confirmationText?: React.ReactNode
  cancellationText?: React.ReactNode
  dialogProps?: Omit<DialogProps, 'open'>
  confirmationButtonProps?: ButtonProps
  cancellationButtonProps?: ButtonProps
  additionalText?: React.ReactNode
  backDropClose?: boolean
}

export interface ConfirmProviderProps {
  defaultOptions?: ConfirmOptions
}

export const ConfirmProvider: React.ComponentType<ConfirmProviderProps>

export const useConfirm: () => (options?: ConfirmOptions) => Promise<void>
