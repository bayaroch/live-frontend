import PageWithLayoutType from '@constants/page'
import withAuth from '@containers/HOC/withAuth'
import UserLayout from '@components/Layouts/UserLayout'
import { Box, Container } from '@mui/material'
import EventCreate from '@containers/EventCreate'

const CreatePage: PageWithLayoutType = () => {
  return (
    <UserLayout>
      <Container maxWidth="md">
        <Box sx={{ marginTop: 4, marginBottom: 4 }}>
          <EventCreate />
        </Box>
      </Container>
    </UserLayout>
  )
}

export default withAuth(CreatePage)
