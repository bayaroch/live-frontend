import PageWithLayoutType from '@constants/page'
import withAuth from '@containers/HOC/withAuth'
import UserLayout from '@components/Layouts/UserLayout'
import { Box, Container } from '@mui/material'
import dynamic from 'next/dynamic'
import PageLoader from '@components/PageLoader'

const EventCreate = dynamic(() => import('@containers/EventCreate'), {
  loading: () => <PageLoader />,
})

const CreatePage: PageWithLayoutType = () => {
  return (
    <UserLayout>
      <Container maxWidth="md">
        <Box sx={{ paddingTop: 4, paddingBottom: 4 }}>
          <EventCreate />
        </Box>
      </Container>
    </UserLayout>
  )
}

export default withAuth(CreatePage)
