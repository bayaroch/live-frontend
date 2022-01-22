import { Card, Box, CardHeader, CardProps } from '@mui/material'
import { ReactElement } from 'react'

interface FormSectionProps extends CardProps {
  icon: ReactElement
  title: string
  subTitle?: string
  action?: ReactElement
}

const FormSection: React.FC<FormSectionProps> = ({
  icon,
  title,
  subTitle,
  children,
  action,
  ...rest
}) => {
  return (
    <Card sx={{ marginBottom: 4 }} {...rest}>
      <CardHeader
        titleTypographyProps={{
          sx: {
            fontSize: 20,
          },
        }}
        avatar={icon}
        title={title}
        subheader={subTitle ? subTitle : ''}
        action={action ? action : ''}
      />
      <Box
        sx={{
          paddingLeft: { lg: 7, xl: 7, md: 7, sm: 2, xs: 1 },
          paddingRight: { lg: 7, xl: 7, md: 7, sm: 2, xs: 1 },
          paddingBottom: { lg: 7, xl: 7, md: 7, sm: 2, xs: 1 },
        }}
      >
        {children}
      </Box>
    </Card>
  )
}

export default FormSection
