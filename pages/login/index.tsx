import PageWithLayoutType from '@constants/page'
import withLogin from '@containers/HOC/withLogin'
import LoginContainer from '@containers/Login'

const LoginPage: PageWithLayoutType = () => {
  return <LoginContainer />
}

export default withLogin(LoginPage)
