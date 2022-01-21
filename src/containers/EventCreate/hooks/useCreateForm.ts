import { useMemo } from 'react'
import { useForm, Controller } from 'react-hook-form'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
// eslint-disable-next-line @typescript-eslint/no-var-requires

export const initialValues = {
  title: '',
  description: '',
  ticket_limit: 0,
  ticket_price: 0,
  cover_url: '',
  category: 0,
  timezone: 0,
  event_start: new Date(),
  event_end: new Date(),
  sale_start: new Date(),
  sale_end: new Date(),
}

export type FieldsType = keyof typeof initialValues

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const useCreateForm = () => {
  const validationSchema = useMemo(
    () =>
      Yup.object().shape({
        title: Yup.string().required().min(8).max(75),
        description: Yup.string().required(),
        ticket_limit: Yup.number().required(),
        ticket_price: Yup.number().required().max(1000),
        cover_url: Yup.string().nullable(),
        category: Yup.number(),
        timezone: Yup.number(),
        event_start: Yup.string().required(),
        event_end: Yup.string().required(),
        sales_start: Yup.string().required(),
        sale_end: Yup.string().required(),
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

export default useCreateForm
