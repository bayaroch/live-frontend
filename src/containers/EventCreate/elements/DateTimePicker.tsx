import { Box, TextField } from '@mui/material'
import TimePicker from '@mui/lab/TimePicker'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import { DesktopDatePicker } from '@mui/lab'
import { mn } from 'date-fns/locale'

interface DateTimePickerProps {
  onChange: (
    date: string | null,
    keyboardInputValue?: string | undefined
  ) => void
  value: string
  ref: any
  title: string
}

const DateTimePicker: React.FC<DateTimePickerProps> = ({
  title,
  onChange,
  value,
  ref,
}) => {
  return (
    <LocalizationProvider locale={mn} dateAdapter={AdapterDateFns}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          flexDirection: {
            xs: 'column',
            sm: 'column',
            md: 'row',
            lg: 'row',
            xl: 'row',
          },
        }}
      >
        <Box sx={{ paddingRight: 2, paddingTop: 3, fontWeight: 500 }}>
          {title}
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <DesktopDatePicker
            label="Өдөр"
            ref={ref}
            inputFormat="MM/dd/yyyy"
            value={value}
            onChange={onChange}
            renderInput={(params) => (
              <TextField
                variant="standard"
                inputProps={{
                  sx: { color: '#333', padding: 2.2 },
                  placeholder: 'Өдөр',
                }}
                {...params}
              />
            )}
          />
          <TimePicker
            label="Цаг"
            ref={ref}
            value={value}
            ampm={false}
            onChange={onChange}
            renderInput={(params) => (
              <TextField
                variant="standard"
                inputProps={{
                  sx: { color: '#333', padding: 2.2 },
                  placeholder: 'Цаг',
                }}
                {...params}
              />
            )}
          />
        </Box>
      </Box>
    </LocalizationProvider>
  )
}

export default DateTimePicker
