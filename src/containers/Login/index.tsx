import StyledTextField from '@components/StyledTextField'
import { Box, InputAdornment, IconButton, Typography } from '@mui/material'
import { LoadingButton } from '@mui/lab'
import { UserLoginParams } from '@services/auth.services'
import _ from 'lodash'
import { FieldValues } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import useLogin from './useLogin'
import useLoginForm from './useLoginForm'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import { useState } from 'react'
// import Loader from '@components/Preloader/Loader'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline'

const LoginContainer: React.FC = () => {
  const [showPassword, setShowpassword] = useState<boolean>(false)
  const { t } = useTranslation()
  const { Controller, methods } = useLoginForm()
  const { login, loginEmailMeta } = useLogin()

  const {
    control,
    handleSubmit,
    // reset,
    formState: { errors /* , touched */ },
  } = methods

  const isLoading = loginEmailMeta.pending && !loginEmailMeta.loaded

  const onSubmit = (values: UserLoginParams) => {
    if (_.isEmpty(errors)) login(values)
  }

  const handleClickShowPassword = () => {
    setShowpassword(!showPassword)
  }

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault()
  }

  return (
    <Box>
      <Typography variant="h3" align="center">
        Нэвтрэх
      </Typography>
      {!!loginEmailMeta.error ? (
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
            Алдаа үүслээ
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
                label={t('login.email')}
                type="text"
                fullWidth={true}
                placeholder={t('login.email_placeholder')}
                error={errors.email ? true : false}
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
                label={t('login.password')}
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
                placeholder={t('login.password_placeholder')}
                error={errors.password ? true : false}
                helperText={errors.password ? errors.password.message : ''}
              />
            </Box>
          )}
        />
        <Box mt={2}>
          <LoadingButton
            type="submit"
            variant="contained"
            loading={isLoading}
            fullWidth
            disabled={isLoading}
            sx={{ height: '36px' }}
          >
            {t('login.button')}
          </LoadingButton>
        </Box>
      </form>
    </Box>
  )
}

export default LoginContainer
