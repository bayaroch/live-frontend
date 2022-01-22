import { BoxProps, Box, Typography, Divider } from '@mui/material'
import { Colors } from '@theme/colors'
import { CommonHelper } from '@utils/helpers/CommonHelper'
import moment from 'moment'

interface CostCalculatorProps extends BoxProps {
  duration: number
  viewers: number
  price: number
}

const CostConstants = {
  channel: 2845,
  view: 213,
  delivered: 1, // 100%
  services: 0.25, // 25%
  tax: 0.1, // tax
}

const CostCalculator: React.FC<CostCalculatorProps> = ({
  duration,
  viewers,
  price,
  ...rest
}) => {
  const hours = moment.duration(duration).asHours()
  const liveInput = CommonHelper.currency(hours * CostConstants.channel)
  const liveOutput = CommonHelper.currency(
    hours * CostConstants.view * viewers * CostConstants.delivered
  )

  const total =
    hours * CostConstants.channel +
    hours * CostConstants.view * viewers * CostConstants.delivered

  const profit = price * viewers

  const netProfit =
    profit -
    profit * CostConstants.services -
    profit * CostConstants.tax -
    total

  return (
    <Box {...rest}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <Typography variant="h4" sx={{ color: '#444' }}>
          Лайв оролт зардал
        </Typography>
        <Box>{liveInput}</Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <Typography>Сувгийн асаалттай байсан хугацаагаар тооцно</Typography>
        <Box>{`${CommonHelper.currency(
          CostConstants.channel
        )} * ${hours} цаг`}</Box>
      </Box>
      <Divider sx={{ borderColor: '#eee', margin: '20px 0' }} />

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <Typography variant="h4" sx={{ color: '#444' }}>
          Лайв үзэлт зардал
        </Typography>
        <Box>{liveOutput}</Box>
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <Typography>Үзэгчдийн тоог үргэлжлэх хугацаанд хуваана</Typography>
        <Box>{`${CommonHelper.currency(
          CostConstants.view
        )} * ${hours} цаг * ${viewers} үзэгчид * 100% үзэлт`}</Box>
      </Box>

      <Divider sx={{ borderColor: '#eee', margin: '20px 0' }} />

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <Typography variant="h4" sx={{ color: '#444' }}>
          Нийт зардал
        </Typography>
        <Box>{CommonHelper.currency(total)}</Box>
      </Box>

      <Divider sx={{ borderColor: '#eee', margin: '20px 0' }} />

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <Typography variant="h4" sx={{ color: '#444' }}>
          Ашиг
        </Typography>
        <Box>{CommonHelper.currency(profit)}</Box>
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <Typography>Үзэгчдийн тоог тасалбарын үнэд үржүүлэх</Typography>
        <Box>{`${CommonHelper.currency(
          price
        )} тасалбар * ${viewers} үзэгчид`}</Box>
      </Box>

      <Divider sx={{ borderColor: '#eee', margin: '20px 0' }} />

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <Typography variant="h4" sx={{ color: '#444' }}>
          Цэвэр Ашиг
        </Typography>
        <Box sx={{ fontWeight: 600, color: Colors.primary }}>
          {CommonHelper.currency(netProfit)}
        </Box>
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <Typography>
          Ашгаас үйлчилгээний зардал, серверийн зардал, татвар хасагдана
        </Typography>
        <Box>{`(${CommonHelper.currency(
          profit
        )} -  (Үйлчилгээний суутгал 25%) - (ОАТ 10%) - ${CommonHelper.currency(
          total
        )} Нийт зардал`}</Box>
      </Box>
    </Box>
  )
}

export default CostCalculator
