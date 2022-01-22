import { ConfirmOptions } from 'material-ui-confirm'

export const defaultConfirmationOptions: ConfirmOptions = {
  confirmationButtonProps: {
    fullWidth: true,
  },
  cancellationButtonProps: {
    variant: 'outlined',
    fullWidth: true,
    size: 'large',
  },
  dialogProps: {
    maxWidth: 'md',
    BackdropProps: {
      onTouchMove: (e: React.TouchEvent<HTMLDivElement>): void => {
        e.preventDefault()
      },
      onTouchStart: (e: React.TouchEvent<HTMLDivElement>): void => {
        e.preventDefault()
      },
      onTouchEnd: (e: React.TouchEvent<HTMLDivElement>): void => {
        e.preventDefault()
      },
    },
  },
}
