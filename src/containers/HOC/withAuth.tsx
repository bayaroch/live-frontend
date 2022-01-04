import { getIsAuthenticated } from '@store/auth/selectors'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import React, { useState, useEffect } from 'react'

export function withAuth<T>(Component: React.ComponentType<T>): React.FC {
  const AppWithAuth: React.FC<any> = (props) => {
    const isLoggedIn = useSelector(getIsAuthenticated)
    const router = useRouter()
    const [render, setRender] = useState(false)

    useEffect(() => {
      if (isLoggedIn) {
        setRender(true)
      } else {
        setRender(false)
        router.push('/')
      }
    }, [isLoggedIn])

    if (!render) {
      return <></>
    }
    return <Component isLoggedIn={isLoggedIn} {...props} />
  }

  return AppWithAuth
}

export default withAuth
