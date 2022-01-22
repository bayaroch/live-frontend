import * as moment from 'moment-timezone'

export type SelectOption = {
  label: string
  value: string
}

export const getTimeZoneOptions = (
  showTimezoneOffset?: boolean
): SelectOption[] => {
  const timeZones = moment.tz.names()
  const offsetTmz = []

  for (const i in timeZones) {
    const tz = timeZones[i]
    const tzOffset = moment.tz(tz).format('Z')
    const value: string = parseInt(
      tzOffset
        .replace(':00', '.00')
        .replace(':15', '.25')
        .replace(':30', '.50')
        .replace(':45', '.75')
    ).toFixed(2)

    const timeZoneOption: SelectOption = {
      label: showTimezoneOffset ? `${tz} (GMT${tzOffset})` : tz,
      value,
    }
    offsetTmz.push(timeZoneOption)
  }

  return offsetTmz
}
