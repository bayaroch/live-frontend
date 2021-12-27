import { Box } from '@mui/material'
import React from 'react'
import Header from './elements/Header'

const MainLayout: React.FC = ({ children }) => {
  return (
    <Box>
      <Header isLogged={false} />
      {children}
    </Box>
  )
}

export default MainLayout
