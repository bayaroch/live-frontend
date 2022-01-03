import {
  InputBase,
  styled,
  InputProps,
  FormHelperText,
  FormControl,
  Box,
  Typography,
} from '@mui/material'
import { Colors } from '@theme/colors'
import { ReactElement } from 'react'

interface StyledTextFieldProps extends InputProps {
  helperText?: string
  label?: string
  error?: boolean
  labelSecondary?: ReactElement
  required?: boolean
}

const Label = styled('label')({
  padding: '4px 1px',
  fontSize: 14,
  marginRight: '3px',
})

const StyledTextField: React.FC<StyledTextFieldProps> = ({
  helperText,
  label,
  labelSecondary,
  error,
  required = false,
  ...rest
}) => {
  return (
    <FormControl fullWidth={rest.fullWidth ? rest.fullWidth : false}>
      {(label || labelSecondary) && (
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box display="flex" alignItems="center">
            <Label id={rest.id ? rest.id : ''}>{label}</Label>
            {required && (
              <Typography component="span" variant="body1">
                *
              </Typography>
            )}
          </Box>
          {labelSecondary}
        </Box>
      )}
      <InputBase
        sx={{
          '&.MuiInputBase-root': {
            border: error ? `1px solid ${Colors.primary}` : '',
          },
        }}
        margin="dense"
        {...rest}
      />
      {helperText && (
        <FormHelperText sx={{ marginLeft: 0 }} error={error}>
          {helperText}
        </FormHelperText>
      )}
    </FormControl>
  )
}

export default StyledTextField

StyledTextField.defaultProps = {
  error: false,
}
