import { Box } from '@mui/material'
import { grey } from '@mui/material/colors'
import { createTheme, Theme, ThemeProvider } from '@mui/material/styles'
import { Colors } from '@theme/colors'
import React from 'react'
import AppNavigation from './elements/AppNavigation'

export type UserLayoutType = {
  isLoggedIn?: boolean
}

const UserLayout: React.FC<UserLayoutType> = ({ children }) => {
  return (
    <ThemeProvider
      theme={(theme: Theme) =>
        createTheme({
          ...theme,
          palette: {
            ...theme.palette,
            mode: 'light',
          },
          components: {
            ...theme.components,
            // Name of the component
            MuiButton: {
              styleOverrides: {
                // Name of the slot
                root: {
                  // Some CSS
                  color: Colors.white,
                  borderRadius: '2px',
                },
              },
            },
            MuiInputBase: {
              styleOverrides: {
                root: {
                  background: Colors.white,
                  color: grey[500],
                  border: `1px solid ${grey[200]}`,
                  fontSize: 16,
                  padding: '4px 8px',
                },
              },
            },
          },
        })
      }
    >
      <Box
        sx={{
          minHeight: '100vh',
          background: Colors.white,
        }}
      >
        <AppNavigation />
        <Box>{children}</Box>
      </Box>
    </ThemeProvider>
  )
}

export default UserLayout
