import PageWithLayoutType from '@constants/page'
import { withLogin } from '@containers/HOC/withLogin'
import ConfirmContainer from '@containers/Confirm'

const ConfirmPage: PageWithLayoutType = () => {
  return (
    <>
      <ConfirmContainer />
    </>
  )
}

export default withLogin(ConfirmPage)
