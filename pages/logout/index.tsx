import PageWithLayoutType from '@constants/page'

import withAuth from '@containers/HOC/withAuth'
import { logOut } from '@store/auth/actions'
import { useAppDispatch } from '@store/hooks'
import { useEffect } from 'react'

const HomePage: PageWithLayoutType = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(logOut())
  }, [])
  return <></>
}

export default withAuth(HomePage)
