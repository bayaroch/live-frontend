import PageWithLayoutType from '@constants/page'
import { withLogin } from '@containers/HOC/withLogin'
import ConfirmContainer from '@containers/Confirm'
import { Box } from '@mui/material'

const ConfirmPage: PageWithLayoutType = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box sx={{ maxWidth: 360, width: '100%' }}>
        <ConfirmContainer />
      </Box>
    </Box>
  )
}

export default withLogin(ConfirmPage)
