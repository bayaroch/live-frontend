import PageWithLayoutType from '@constants/page'
import MainLayout from '@components/Layouts/MainLayout'
import { Container, Grid, Typography } from '@mui/material'
import ESSelect from '@components/Select'
import { useConfirm } from '@components/Confirm'
import i18n from '../src/locales/i18n'
import { useTranslation } from 'react-i18next'

const HomePage: PageWithLayoutType = () => {
  const { t } = useTranslation()

  const confirm = useConfirm()

  const handleChange = () => {
    confirm({
      title: 'title',
      content: <Typography>{'content'}</Typography>,
      cancellationText: 'cancel',
      confirmationText: 'confirm',
    })
  }

  const onChange = (event: any) => {
    i18n.changeLanguage(event.target.value)
  }

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
      <Grid container columnSpacing={{ xs: 0 }}>
        <Grid item xs={12} md={8}>
          Hello Next.Js
        </Grid>
        <Grid xs={12} item>
          <ESSelect
            label="Select"
            helperText="option 1"
            onChange={handleChange}
          >
            <option>option 1</option>
            <option>option 2</option>
          </ESSelect>
        </Grid>
        <Grid item xs={12} md={8}>
          <select onChange={onChange}>
            <option value="mn">Mongolian</option>
            <option value="en">English</option>
          </select>
          {t('hello')}
        </Grid>
      </Grid>
    </Container>
  )
}

export default HomePage

HomePage.Layout = MainLayout
