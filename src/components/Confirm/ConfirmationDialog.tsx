/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react'
import { ConfirmOptions } from './types'
import {
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
} from '@mui/material'
import { WarningRounded } from '@mui/icons-material'

interface ConfirmationDialogProps {
  open: boolean
  options: ConfirmOptions
  onCancel: () => void
  onConfirm: () => void
  onClose: (event: Event, reason: string) => void
}

const ConfirmationDialog = ({
  open,
  options,
  onCancel,
  onConfirm,
  onClose,
}: ConfirmationDialogProps) => {
  const {
    title,
    description,
    content,
    confirmationText,
    cancellationText,
    dialogProps,
    confirmationButtonProps,
    cancellationButtonProps,
    additionalText,
  } = options

  return (
    <Dialog fullWidth {...dialogProps} open={open} onClose={onClose}>
      <Container maxWidth={false}>
        {title && <DialogTitle>{title}</DialogTitle>}
        {content ? (
          <DialogContent>{content}</DialogContent>
        ) : (
          <DialogContent>
            {description && (
              <DialogContentText>{description}</DialogContentText>
            )}
          </DialogContent>
        )}
        <DialogActions>
          <Button {...cancellationButtonProps} onClick={onCancel}>
            {cancellationText}
          </Button>
          <Button {...confirmationButtonProps} onClick={onConfirm}>
            {confirmationText}
          </Button>
        </DialogActions>
        {additionalText && (
          <Typography variant="body1" component="p">
            <WarningRounded fontSize="small" />
            {additionalText}
          </Typography>
        )}
      </Container>
    </Dialog>
  )
}

export default ConfirmationDialog
