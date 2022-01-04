import {
  Box,
  Button,
  InputAdornment,
  IconButton,
  Typography,
} from '@mui/material'
import StyledTextField from '@components/StyledTextField'
import { UserLoginParams } from '@services/auth.services'
import { FieldValues } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import _ from 'lodash'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import useRegisterByEmail from './useRegisterByEmail'
import useRegisterForm from './useRegisterForm'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
// import Loader from '@components/Preloader/Loader'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline'

const RegisterContainer: React.FC = () => {
  const [showPassword, setShowpassword] = useState<boolean>(false)
  const [showConfirmPassword, setShowConfirmpassword] = useState<boolean>(false)
  const { t } = useTranslation()
  const { Controller, methods } = useRegisterForm()
  const { registerByEmail, registerMeta } = useRegisterByEmail()

  const {
    control,
    handleSubmit,
    // reset,
    formState: { errors /* , touched  */ },
  } = methods

  const isLoading = registerMeta.pending && !registerMeta.loaded
  const router = useRouter()

  const onSubmit = (values: UserLoginParams) => {
    if (_.isEmpty(errors)) registerByEmail(_.omit(values, 'confirm_password'))
  }

  const handleClickShowPassword = () => {
    setShowpassword(!showPassword)
  }

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault()
  }

  const handleClickShowConfirmPassword = () => {
    setShowConfirmpassword(!showConfirmPassword)
  }

  const handleMouseDownConfirmPassword = (
    event: React.MouseEvent<HTMLElement>
  ) => {
    event.preventDefault()
  }

  useEffect(() => {
    if (registerMeta.loaded && !registerMeta.error && !registerMeta.pending) {
      router.push('/login')
    }
  }, [registerMeta])

  const errorStatusCode = registerMeta.error.statusCode

  return (
    <Box>
      <Typography variant="h3" align="center">
        Бүртгүүлэх
      </Typography>
      {!!registerMeta.error && errorStatusCode ? (
        <Box
          style={{
            height: '30px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <ErrorOutlineIcon color="primary" sx={{ marginRight: 0.5 }} />
          <Typography color="primary" textAlign="center">
            {errorStatusCode === 400
              ? 'Something went wrong'
              : t('error_messages.error_occurred')}
          </Typography>
        </Box>
      ) : (
        <Box style={{ height: '30px' }} />
      )}
      <form onSubmit={handleSubmit(onSubmit)} method="post">
        <Controller
          name="email"
          control={control}
          render={({ field: { ref, ...rest } }: FieldValues) => (
            <Box sx={{ height: '87px' }}>
              <StyledTextField
                {...rest}
                inputRef={ref}
                label={t('register.email')}
                type="text"
                fullWidth={true}
                placeholder={t('register.email_placeholder')}
                error={!_.isEmpty(errors.email)}
                helperText={errors.email ? errors.email.message : ''}
              />
            </Box>
          )}
        />

        <Controller
          name="password"
          control={control}
          render={({ field: { ref, ...rest } }: FieldValues) => (
            <Box sx={{ height: '87px' }}>
              <StyledTextField
                {...rest}
                inputRef={ref}
                label={t('register.password')}
                type={showPassword ? 'text' : 'password'}
                fullWidth={true}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      disableRipple
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? (
                        <VisibilityOff
                          style={{ fontSize: 20, marginRight: 5 }}
                        />
                      ) : (
                        <Visibility style={{ fontSize: 20, marginRight: 5 }} />
                      )}
                    </IconButton>
                  </InputAdornment>
                }
                placeholder={t('register.password_placeholder')}
                error={!_.isEmpty(errors.password)}
                helperText={errors.password ? errors.password.message : ''}
              />
            </Box>
          )}
        />
        <Controller
          name="confirm_password"
          control={control}
          render={({ field: { ref, ...rest } }: FieldValues) => (
            <Box sx={{ height: '87px' }}>
              <StyledTextField
                {...rest}
                inputRef={ref}
                label={t('register.confirm_password')}
                type={showConfirmPassword ? 'text' : 'password'}
                fullWidth={true}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      disableRipple
                      aria-label="toggle password visibility"
                      onClick={handleClickShowConfirmPassword}
                      onMouseDown={handleMouseDownConfirmPassword}
                      edge="end"
                    >
                      {showConfirmPassword ? (
                        <VisibilityOff
                          style={{ fontSize: 20, marginRight: 5 }}
                        />
                      ) : (
                        <Visibility style={{ fontSize: 20, marginRight: 5 }} />
                      )}
                    </IconButton>
                  </InputAdornment>
                }
                placeholder={t('register.confirm_password_placeholder')}
                error={!_.isEmpty(errors.confirm_password)}
                helperText={
                  errors.confirm_password ? errors.confirm_password.message : ''
                }
              />
            </Box>
          )}
        />
        <Box mt={1}>
          <Button
            type="submit"
            variant="contained"
            fullWidth
            disabled={isLoading}
            sx={{ height: '36px' }}
          >
            {isLoading ? (
              <Box sx={{ position: 'absolute', top: '30px' }}>Loading</Box>
            ) : (
              t('register.button')
            )}
          </Button>
        </Box>
      </form>
    </Box>
  )
}

export default RegisterContainer
