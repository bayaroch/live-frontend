import PageWithLayoutType from '@constants/page'
import RegisterForm from '@containers/Register'
import withLogin from '@containers/HOC/withLogin'
import AuthLayout from '@components/Layouts/AuthLayout'

const RegisterPage: PageWithLayoutType = () => {
  return (
    <AuthLayout>
      <RegisterForm />
    </AuthLayout>
  )
}

export default withLogin(RegisterPage)
