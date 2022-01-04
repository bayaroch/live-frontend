import PageWithLayoutType from '@constants/page'
import RegisterForm from '@containers/Register'
import withLogin from '@containers/HOC/withLogin'

const RegisterPage: PageWithLayoutType = () => {
  return (
    <>
      <RegisterForm />
    </>
  )
}

export default withLogin(RegisterPage)
