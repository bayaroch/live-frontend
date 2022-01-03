import { useAppDispatch, useAppSelector } from '@store/hooks'
import { loginByEmail } from '@store/auth/actions'
import { UserLoginParams, UserLoginResponse } from '@services/auth.services'
import { createMetaSelector } from '@store/metadata/selectors'
import { Meta } from '@store/metadata/actions/types'
import { getAuth } from '@store/auth/selectors'

const _loginMeta = createMetaSelector(loginByEmail)

const useLogin = (): {
  user: UserLoginResponse
  login: (login: UserLoginParams) => void
  loginEmailMeta: Meta
} => {
  const dispatch = useAppDispatch()

  const login = (param: UserLoginParams) => dispatch(loginByEmail(param))

  const user = useAppSelector(getAuth)

  const loginEmailMeta = useAppSelector(_loginMeta)

  return {
    user,
    login,
    loginEmailMeta,
  }
}

export default useLogin
