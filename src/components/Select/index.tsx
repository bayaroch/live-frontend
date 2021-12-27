import {
  Select,
  SelectProps,
  FormControl,
  FormHelperText,
  Box,
  Input as MuiInput,
} from '@mui/material'
import { Colors } from '@theme/colors'
import { styled } from '@mui/styles'

export type ESSelectProps = {
  helperText?: string
  label?: string
  required?: boolean
  size?: 'big' | 'small'
}

const ESSelect: React.FC<SelectProps & ESSelectProps> = ({
  size = 'big',
  helperText,
  label,
  ...rest
}) => {
  const isBig = size === 'big'

  return (
    <FormControl fullWidth={rest.fullWidth} sx={{ paddingTop: 1 }}>
      {label && (
        <Box display="flex" alignItems="center" pb={1}>
          <label
            htmlFor={rest.id}
            style={{
              fontWeight: isBig ? 'bold' : 'normal',
              fontSize: isBig ? 'h3' : 'body1',
            }}
          >
            {label}
          </label>
          {/* {required && (
            <Typography component="span" className={classes.required}>
              {t('common:common.required')}
            </Typography>
          )} */}
        </Box>
      )}
      <Select
        variant="outlined"
        margin="dense"
        native
        input={<Input />}
        {...rest}
        // IconComponent={() => <Icon className="fas fa-chevron-down" />}
      />
      {helperText && (
        <FormHelperText error sx={{ color: `${Colors.black} !important` }}>
          {helperText}
        </FormHelperText>
      )}
    </FormControl>
  )
}

const Input = styled(MuiInput)({
  // backgroundColor: Colors.black,
  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderWidth: 1,
    borderColor: Colors.white,
  },
})

export default ESSelect
