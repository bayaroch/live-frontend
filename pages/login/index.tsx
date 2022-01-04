import AuthLayout from '@components/Layouts/AuthLayout'
import PageWithLayoutType from '@constants/page'
import withLogin from '@containers/HOC/withLogin'
import LoginContainer from '@containers/Login'

const LoginPage: PageWithLayoutType = () => {
  return (
    <AuthLayout>
      <LoginContainer />
    </AuthLayout>
  )
}

export default withLogin(LoginPage)
