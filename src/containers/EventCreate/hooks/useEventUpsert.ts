import { useAppDispatch, useAppSelector } from '@store/hooks'
import { Meta } from '@store/metadata/actions/types'
import { createMetaSelector } from '@store/metadata/selectors'
import event from '@store/event'
import { EventCreateParams } from '@services/event.services'

const { actions } = event

const _createMeta = createMetaSelector(actions.create)

const _updateMeta = createMetaSelector(actions.update)

export interface UpsertReturn {
  create: (param: EventCreateParams) => void
  update: (param: EventCreateParams) => void
  createMeta: Meta
  updateMeta: Meta
}

const useEventUpsert = (): UpsertReturn => {
  const dispatch = useAppDispatch()
  const create = (param: EventCreateParams) => dispatch(actions.create(param))
  const update = (param: EventCreateParams) => dispatch(actions.create(param))
  const createMeta = useAppSelector(_createMeta)
  const updateMeta = useAppSelector(_updateMeta)

  return { create, update, createMeta, updateMeta }
}

export default useEventUpsert
