import moment from 'moment'

const staticSmartTime = (time: string | number): string => {
  const timestamp = time
  const currentDate = moment().startOf('day')
  const given = moment(timestamp).format('YYYY-MM-DD')
  const diff = currentDate.diff(given, 'days', false)
  if (diff > 30) {
    return moment(timestamp).format('LL')
  } else {
    return moment(timestamp).fromNow()
  }
}

const currency = (data: number): string => {
  const formatter = Number(data).toLocaleString('mn-MN', {
    style: 'decimal',
    minimumFractionDigits: 0,
  })
  return `${formatter} ₮`
}

export const CommonHelper = {
  staticSmartTime,
  currency,
}
