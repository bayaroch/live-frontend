import { useAppDispatch, useAppSelector } from '@store/hooks'
import auth from '@store/auth'
import { createMetaSelector } from '@store/metadata/selectors'
import { clearMetaData } from '@store/metadata/actions'
import { Meta } from '@store/metadata/actions/types'
import { UserConfirmParams } from '@services/auth.services'

const { actions } = auth
const _confirmMeta = createMetaSelector(actions.confirm)

const useEmailConfirm = (): {
  confirm: (param: UserConfirmParams) => void
  confirmMeta: Meta
  resetMeta: () => void
} => {
  const dispatch = useAppDispatch()

  const confirmMeta = useAppSelector(_confirmMeta)

  const confirm = (param: UserConfirmParams) => dispatch(actions.confirm(param))

  const resetMeta = () => dispatch(clearMetaData(actions.confirm.typePrefix))

  return { confirm, confirmMeta, resetMeta }
}

export default useEmailConfirm
