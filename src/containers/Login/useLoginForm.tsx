import { useMemo } from 'react'
import { useForm, Controller } from 'react-hook-form'
import * as Yup from 'yup'
import { useTranslation } from 'react-i18next'
import { yupResolver } from '@hookform/resolvers/yup'

export const initialValues = {
  email: '',
  password: '',
}

const useLoginForm = () => {
  const { t } = useTranslation()
  const validationSchema = useMemo(
    () =>
      Yup.object().shape({
        email: Yup.string()
          .email(t('login.validation.email.email'))
          .required(t('login.validation.email.required')),
        password: Yup.string().required(
          t('login.validation.password.required')
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

export default useLoginForm
