import PageWithLayoutType from '@constants/page'
import MainLayout from '@components/Layouts/MainLayout'
import { Container, Paper, Typography } from '@mui/material'

const Theme: PageWithLayoutType = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        padding: {
          xs: '0',
          sm: '0',
        },
      }}
    >
      <Typography variant="h1">Видео лайв стрийм</Typography>
      <Typography variant="h2">Видео лайв стрийм</Typography>
      <Typography variant="h3">Видео лайв стрийм</Typography>
      <Typography variant="h4">Видео лайв стрийм</Typography>
      <Typography variant="h5">Видео лайв стрийм</Typography>
      <Typography variant="h6">Видео лайв стрийм</Typography>
      <Typography variant="body1">
        блокчэйн, хиймэл оюунд суурилсан эрүүл мэндийн онлайн систем юм. Уг
        системийн анхны бүрдэл хэсэг болох лабораторийн систем нь 2008 оноос
        хойш хөгжүүлэгдэж, 60 гаруй лабораторид ашиглагдаж байна.
      </Typography>
      <Paper sx={{ padding: 3 }}>
        <Typography variant="body2">
          блокчэйн, хиймэл оюунд суурилсан эрүүл мэндийн онлайн систем юм. Уг
          системийн анхны бүрдэл хэсэг болох лабораторийн систем нь 2008 оноос
          хойш хөгжүүлэгдэж, 60 гаруй лабораторид ашиглагдаж байна.
        </Typography>
      </Paper>
    </Container>
  )
}

export default Theme

Theme.Layout = MainLayout
