import { Middleware } from 'redux'

export const routerMiddleware: Middleware = (/* store */) => (next) => (
  action
) => {
  return next(action)
}
