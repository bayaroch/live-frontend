export type Dialog = {
  message?: string | null
  title?: string | null
  actionMsg?: string | null
  actionText?: string | null
  actions: ActionButtons[]
}
export interface ActionButtons {
  name: string
  action: string
  type: string
}
