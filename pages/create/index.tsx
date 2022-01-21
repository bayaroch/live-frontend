import PageWithLayoutType from '@constants/page'
import withAuth from '@containers/HOC/withAuth'
import UserLayout from '@components/Layouts/UserLayout'
import { Container } from '@mui/material'

const CreatePage: PageWithLayoutType = () => {
  return (
    <UserLayout>
      <Container maxWidth="md">EventCreate</Container>
    </UserLayout>
  )
}

export default withAuth(CreatePage)
