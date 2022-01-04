import { Box } from '@mui/material'
import React from 'react'
import Footer from './elements/Footer'
import Header from './elements/Header'

export type MainLayoutType = {
  isLoggedIn?: boolean
}

const MainLayout: React.FC<MainLayoutType> = ({ isLoggedIn, children }) => {
  return (
    <Box>
      <Header isLogged={isLoggedIn} />
      {children}
      <Footer />
    </Box>
  )
}

export default MainLayout
