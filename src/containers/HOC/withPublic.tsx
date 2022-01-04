import { getIsAuthenticated } from '@store/auth/selectors'
import { useSelector } from 'react-redux'
import React from 'react'

export function withPublic<T>(Component: React.ComponentType<T>): React.FC {
  const AppWithAuth: React.FC<any> = (props) => {
    const isLoggedIn = useSelector(getIsAuthenticated)

    return <Component isLoggedIn={isLoggedIn} {...props} />
  }

  return AppWithAuth
}

export default withPublic
