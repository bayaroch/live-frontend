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
  timezone: '8.00',
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
        title: Yup.string().required('Гарчиг оруулах').min(8).max(75),
        description: Yup.string().required('Тайлбар оруулах'),
        ticket_limit: Yup.number().required('Тоо ширхэг'),
        ticket_price: Yup.number()
          .required('Тасалбарын үнээ оруул')
          .max(1000000),
        cover_url: Yup.string().nullable(),
        category: Yup.number().required('Ангилал сонгох'),
        timezone: Yup.string(),
        event_start: Yup.date().min(new Date(), 'Ирээдүй цаг дээр байх'),
        event_end: Yup.date().when(
          'event_start',
          (event_start, schema) => event_start && schema.min(event_start)
        ),
        sale_start: Yup.date()
          .min(new Date(), 'Ирээдүй цаг дээр байх')
          .when(
            'event_start',
            (event_start, schema) => event_start && schema.max(event_start)
          ),
        sale_end: Yup.date().when(
          'sale_start',
          (event_start, schema) => event_start && schema.min(event_start)
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

export default useCreateForm
