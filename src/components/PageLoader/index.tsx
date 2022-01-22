import { Box, BoxProps, CircularProgress } from '@mui/material'
import React from 'react'

const PageLoader: React.FC<BoxProps> = ({ ...rest }) => {
  return (
    <Box
      sx={{
        position: 'absolute',
        left: 0,
        top: 0,
        zIndex: 999999,
        width: '100%',
        color: '#000',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      {...rest}
    >
      <CircularProgress />
    </Box>
  )
}

export default PageLoader
