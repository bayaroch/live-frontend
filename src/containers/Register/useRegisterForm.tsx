import { useMemo } from 'react'
import { useForm, Controller } from 'react-hook-form'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useTranslation } from 'react-i18next'

export const initialValues = {
  email: '',
  password: '',
  confirm_password: '',
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const useRegisterForm = () => {
  const { t } = useTranslation()
  const validationSchema = useMemo(
    () =>
      Yup.object().shape({
        email: Yup.string().required(t('register.validation.email.required')),
        password: Yup.string()
          .required(t('register.validation.password.required'))
          .min(6, t('register.validation.password.min'))
          .matches(/\d/, t('register.validation.password.oneNumber'))
          .matches(/[A-Z]/, t('register.validation.password.oneUpper')),

        confirm_password: Yup.string()
          .required(t('register.validation.confirm_password.required'))
          .min(6, t('register.validation.confirm_password.min'))
          .matches(/\d/, t('register.validation.confirm_password.oneNumber'))
          .matches(/[A-Z]/, t('register.validation.confirm_password.oneUpper'))
          .oneOf(
            [Yup.ref('password'), null],
            t('register.validation.confirm_password.must_match')
          ),
      }),
    []
  )

  const methods = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: initialValues,
    mode: 'onBlur',
  })

  return { Controller, methods, initialValues }
}

export default useRegisterForm
