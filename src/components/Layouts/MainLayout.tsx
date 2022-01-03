import { Box } from '@mui/material'
import React from 'react'
import Footer from './elements/Footer'
import Header from './elements/Header'

const MainLayout: React.FC = ({ children }) => {
  return (
    <Box>
      <Header isLogged={false} />
      {children}
      <Footer />
    </Box>
  )
}

export default MainLayout
