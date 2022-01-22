import StyledTextField from '@components/StyledTextField'
import {
  Backup,
  Calculate,
  CalendarToday,
  LocalAtm,
  OpenInNew,
  ShortText,
} from '@mui/icons-material'
import {
  Avatar,
  Box,
  Button,
  IconButton,
  InputBase,
  MenuItem,
  Select,
  Stack,
} from '@mui/material'
import _ from 'lodash'
import moment from 'moment'
import { FieldValues } from 'react-hook-form'
import DateTimePicker from './elements/DateTimePicker'
import FormSection from './elements/FormSection'
import useCreateForm from './hooks/useCreateForm'
import { EVENT_CATEGORY } from '@constants/event.constants'
import React from 'react'
import { useConfirm } from 'material-ui-confirm'
import CostCalculator from './elements/CostCalculator'
import Link from 'next/link'
import { EventCreateParams } from '@services/event.services'
import useEventUpsert from './hooks/useEventUpsert'
import { LoadingButton } from '@mui/lab'
import FormHelperText from '@mui/material/FormHelperText'

const EventCreate: React.FC = () => {
  const { Controller, methods } = useCreateForm()
  const confirm = useConfirm()

  const { create, createMeta } = useEventUpsert()

  const {
    control,
    watch,
    handleSubmit,
    formState: { errors },
  } = methods

  const start = moment(watch('event_start'))
  const end = moment(watch('event_end'))
  const duration = end.diff(start)
  const f = moment.utc(duration).format('HH:mm:ss.SSS')

  const handleCalculate = () => {
    confirm({
      title: '',
      dialogProps: {
        PaperProps: {
          sx: { backgroundColor: '#fff' },
        },
      },
      titleProps: {
        sx: { color: '#333' },
      },
      contentProps: {
        sx: { color: '#333' },
      },
      content: (
        <CostCalculator
          duration={duration}
          viewers={watch('ticket_limit')}
          price={watch('ticket_price')}
        />
      ),
      confirmationButtonProps: {
        sx: {},
        variant: 'contained',
        color: 'primary',
      },
      confirmationText: 'Зөвшөөрөх',
      cancellationButtonProps: {
        sx: {
          display: 'none',
        },
      },
    })
      .then(() => null)
      .catch(() => null)
  }

  const onSubmit = (data: EventCreateParams) => {
    if (data) {
      confirm({
        title: '',
        dialogProps: {
          PaperProps: {
            sx: { backgroundColor: '#fff' },
          },
        },
        titleProps: {
          sx: { color: '#333' },
        },
        contentProps: {
          sx: { color: '#333' },
        },
        content: (
          <CostCalculator
            duration={duration}
            viewers={watch('ticket_limit')}
            price={watch('ticket_price')}
          />
        ),
        confirmationButtonProps: {
          sx: {},
          variant: 'contained',
          color: 'primary',
        },
        confirmationText: 'Зөвшөөрөх',
        cancellationButtonProps: {
          sx: {
            display: 'none',
          },
        },
      })
        .then(() => {
          create(data)
        })
        .catch(() => null)
    }
  }

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)}>
      <FormSection
        icon={<ShortText />}
        title="Үндсэн мэдээлэл"
        subTitle="Дэлгэрэнгүй мэдээлэл онцлох зүйлсээ оруулаарай"
      >
        <Box sx={{ marginBottom: 2 }}>
          <Controller
            name="title"
            control={control}
            render={({ field: { ref, value, ...rest } }) => (
              <StyledTextField
                {...rest}
                inputRef={ref}
                required={true}
                placeholder={'Гарчиг'}
                value={value}
                label="Гарчиг"
                fullWidth={true}
                error={!!errors.title}
                endAdornment={<Box>{value.length}/75</Box>}
                helperText={
                  errors.title ? _.get(errors.title, 'message', '') : ''
                }
              />
            )}
          />
        </Box>
        <Box sx={{ marginBottom: 2 }}>
          <Controller
            name="description"
            control={control}
            render={({ field: { ref, ...rest } }) => (
              <StyledTextField
                {...rest}
                inputRef={ref}
                label="Дэлгэрэнгүй мэдээлэл"
                placeholder={'Дэлгэрэнгүй мэдээлэл'}
                multiline
                minRows={5}
                maxRows={15}
                fullWidth={true}
              />
            )}
          />
        </Box>
        <Box sx={{ marginBottom: 2 }}>
          <Controller
            name="category"
            control={control}
            render={({ field: { ref, value, onChange, ...rest } }) => (
              <Select
                id="category-selector"
                sx={{
                  '& .MuiSvgIcon-root': {
                    color: '#333',
                  },
                }}
                fullWidth
                value={value}
                onChange={onChange}
                input={<InputBase inputRef={ref} {...rest} />}
              >
                {EVENT_CATEGORY.map((c) => (
                  <MenuItem key={c.id} value={c.id}>
                    {c.title}
                  </MenuItem>
                ))}
              </Select>
            )}
          />
        </Box>
        <Box>
          <Controller
            name="cover_url"
            control={control}
            render={({ field: { ref, value, ...rest } }: FieldValues) => {
              return (
                <StyledTextField
                  {...rest}
                  required={false}
                  startAdornment={
                    <Avatar
                      src={value}
                      sx={{
                        width: 30,
                        height: 30,
                        borderRadius: 1,
                        marginRight: 1,
                      }}
                    />
                  }
                  value={value}
                  inputRef={ref}
                  fullWidth={true}
                  disabled
                  label="Зураг холбоос"
                  placeholder="https://example.com/example.jpg"
                  type="text"
                  error={!!errors.cover_url}
                  endAdornment={
                    <IconButton>
                      <Backup sx={{ color: '#333' }} />
                    </IconButton>
                  }
                  helperText={
                    errors.cover_url
                      ? _.get(errors.cover_url, 'message', '')
                      : ''
                  }
                />
              )
            }}
          />
        </Box>
      </FormSection>
      <FormSection
        icon={<CalendarToday />}
        title="Огноо"
        subTitle="Эхлэх болон Тасалбар зарагдах өдрөө тодорхой зөв оруулах"
      >
        <Box sx={{ mb: 2 }}>
          <Controller
            name="event_start"
            control={control}
            render={({ field: { value, onChange } }: FieldValues) => {
              return (
                <>
                  <DateTimePicker
                    title="Эвент эхлэх"
                    value={value}
                    onChange={onChange}
                  />
                  <Box>
                    {errors.event_start ? (
                      <FormHelperText error={true}>
                        {_.get(errors.event_start, 'message', '')}
                      </FormHelperText>
                    ) : (
                      ''
                    )}
                  </Box>
                </>
              )
            }}
          />
        </Box>
        <Box sx={{ mb: 2 }}>
          <Controller
            name="event_end"
            control={control}
            render={({ field: { value, onChange } }: FieldValues) => {
              return (
                <>
                  <DateTimePicker
                    title="Эвент дуусах"
                    value={value}
                    onChange={onChange}
                  />

                  {errors.event_end ? (
                    <FormHelperText error={true}>
                      Эхлэх цаг өдрөөс дараа байх
                    </FormHelperText>
                  ) : (
                    ''
                  )}
                </>
              )
            }}
          />
        </Box>
        <Box sx={{ mb: 2 }}>
          <Controller
            name="sale_start"
            control={control}
            render={({ field: { value, onChange } }: FieldValues) => {
              return (
                <>
                  <DateTimePicker
                    title="Тасалбар зарагдаж эхлэх"
                    value={value}
                    onChange={onChange}
                  />
                  <Box>
                    {errors.sale_start ? (
                      <FormHelperText error={true}>
                        Эхлэх цаг өдрөөс өмнө байх.Мөн ирээдүй цаг дээр байх
                      </FormHelperText>
                    ) : (
                      ''
                    )}
                  </Box>
                </>
              )
            }}
          />
        </Box>
        <Box sx={{ mb: 2 }}>
          <Controller
            name="sale_end"
            control={control}
            render={({ field: { value, onChange } }: FieldValues) => {
              return (
                <>
                  <DateTimePicker
                    title="Тасалбар зарагдаж дуусах"
                    value={value}
                    onChange={onChange}
                  />
                  <Box>
                    {errors.sale_end ? (
                      <FormHelperText error={true}>
                        Тасалбар эхлэх цагаас дараа байх. Эвент эхлэхээс өмнө
                        дуусах
                      </FormHelperText>
                    ) : (
                      ''
                    )}
                  </Box>
                </>
              )
            }}
          />
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Box sx={{ fontWeight: 600 }}>Үргэлжлэх хугацаа:</Box>
          <Box sx={{ paddingLeft: 1 }}>{f}</Box>
        </Box>
      </FormSection>
      <FormSection
        sx={{ pb: 2 }}
        icon={<LocalAtm />}
        title="Тасалбар"
        subTitle="Тоо ширхэг нэгжийн үнэ"
        action={
          <Button
            startIcon={<Calculate />}
            color="primary"
            onClick={handleCalculate}
            variant="outlined"
            endIcon={<OpenInNew />}
          >
            Зардал
          </Button>
        }
      >
        <Box sx={{ mb: 2 }}>
          <Controller
            name="ticket_limit"
            control={control}
            render={({ field: { ref, value, ...rest } }) => (
              <StyledTextField
                {...rest}
                inputRef={ref}
                required={true}
                placeholder={'Тоо ширхэг'}
                value={value}
                inputProps={{ min: 0 }}
                label="Тоо ширхэг"
                type="number"
                fullWidth={true}
                error={!!errors.ticket_limit}
                helperText={
                  errors.ticket_limit
                    ? _.get(errors.ticket_limit, 'message', '')
                    : ''
                }
              />
            )}
          />
        </Box>
        <Box sx={{ mb: 2 }}>
          <Controller
            name="ticket_price"
            control={control}
            render={({ field: { ref, value, ...rest } }) => (
              <StyledTextField
                {...rest}
                inputRef={ref}
                required={true}
                placeholder={'Тасалбарын үнэ'}
                value={value}
                inputProps={{ min: 0 }}
                label="Үнэ"
                labelSecondary={<>MNT</>}
                type="number"
                fullWidth={true}
                error={!!errors.ticket_price}
                helperText={
                  errors.ticket_price
                    ? _.get(errors.ticket_price, 'message', '')
                    : ''
                }
              />
            )}
          />
        </Box>
      </FormSection>
      <Stack
        sx={{ mt: 2 }}
        direction="row"
        justifyContent="flex-end"
        alignItems="center"
        spacing={4}
      >
        <Link href="/" passHref>
          <Button variant="outlined" color="inherit">
            Цуцлах
          </Button>
        </Link>
        <LoadingButton
          loading={createMeta.pending}
          type="submit"
          variant="contained"
          disabled={createMeta.pending}
          color="secondary"
        >
          Үүсгэх
        </LoadingButton>
      </Stack>
    </Box>
  )
}

export default EventCreate
