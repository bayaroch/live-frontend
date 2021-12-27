import { resources } from './i18n'

declare module 'react-i18next' {
  type DefaultResources = typeof resources['mn']
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface Resources extends DefaultResources {}
}
