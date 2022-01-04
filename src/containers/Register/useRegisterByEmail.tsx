import { useAppDispatch, useAppSelector } from '@store/hooks'
import auth from '@store/auth'
import {
  UserLoginParams as UserRegisterParams,
  UserRegisterResponse,
} from '@services/auth.services'
import { createMetaSelector } from '@store/metadata/selectors'
import { Meta } from '@store/metadata/actions/types'

const { actions, selectors } = auth
const _registerMeta = createMetaSelector(actions.registerByEmail)

const useRegisterByEmail = (): {
  registerByEmail: (register: UserRegisterParams) => void
  user: UserRegisterResponse
  registerMeta: Meta
} => {
  const dispatch = useAppDispatch()

  const registerByEmail = (param: UserRegisterParams) =>
    dispatch(actions.registerByEmail(param))

  const user = useAppSelector(selectors.getAuth)

  const registerMeta = useAppSelector(_registerMeta)

  return { registerByEmail, user, registerMeta }
}

export default useRegisterByEmail
