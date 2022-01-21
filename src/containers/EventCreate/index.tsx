import StyledTextField from '@components/StyledTextField'
import { Backup, CalendarToday, ShortText } from '@mui/icons-material'
import { Avatar, Box, IconButton } from '@mui/material'
import _ from 'lodash'
import moment from 'moment'
import { FieldValues } from 'react-hook-form'
import DateTimePicker from './elements/DateTimePicker'
import FormSection from './elements/FormSection'
import useCreateForm from './hooks/useCreateForm'

const EventCreate: React.FC = () => {
  const { Controller, methods } = useCreateForm()

  const {
    control,
    watch,
    formState: { errors },
  } = methods

  const start = moment(watch('event_start'))
  const end = moment(watch('event_end'))
  const duration = end.diff(start)
  const f = moment.utc(duration).format('HH:mm:ss.SSS')

  return (
    <Box component="form">
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
                  labelPrimary="Зураг холбоос"
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
            render={({
              field: { ref, value, onChange, ...rest },
            }: FieldValues) => {
              return (
                <DateTimePicker
                  title="Эвент эхлэх"
                  value={value}
                  ref={ref}
                  onChange={onChange}
                  {...rest}
                />
              )
            }}
          />
        </Box>
        <Box sx={{ mb: 2 }}>
          <Controller
            name="event_end"
            control={control}
            render={({
              field: { ref, value, onChange, ...rest },
            }: FieldValues) => {
              return (
                <DateTimePicker
                  title="Эвент дуусах"
                  value={value}
                  ref={ref}
                  onChange={onChange}
                  {...rest}
                />
              )
            }}
          />
        </Box>
        <Box sx={{ mb: 2 }}>
          <Controller
            name="sale_start"
            control={control}
            render={({
              field: { ref, value, onChange, ...rest },
            }: FieldValues) => {
              return (
                <DateTimePicker
                  title="Тасалбар зарагдаж эхлэх"
                  value={value}
                  ref={ref}
                  onChange={onChange}
                  {...rest}
                />
              )
            }}
          />
        </Box>
        <Box sx={{ mb: 2 }}>
          <Controller
            name="sale_start"
            control={control}
            render={({
              field: { ref, value, onChange, ...rest },
            }: FieldValues) => {
              return (
                <DateTimePicker
                  title="Тасалбар зарагдаж дуусах"
                  value={value}
                  ref={ref}
                  onChange={onChange}
                  {...rest}
                />
              )
            }}
          />
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Box sx={{ fontWeight: 600 }}>Үргэлжлэх хугацаа:</Box>
          <Box sx={{ paddingLeft: 1 }}>{f}</Box>
        </Box>
      </FormSection>
    </Box>
  )
}

export default EventCreate
