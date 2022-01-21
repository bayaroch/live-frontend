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
            background: {
              paper: Colors.white,
            },
            text: {
              primary: Colors.text[900],
            },
          },
          components: {
            ...theme.components,
            MuiButton: {
              styleOverrides: {
                root: {
                  borderRadius: '2px',
                },
              },
            },
            MuiInputBase: {
              styleOverrides: {
                root: {
                  background: Colors.white,
                  color: grey[700],
                  border: `1px solid ${grey[200]}`,
                  fontSize: 16,
                  padding: '4px 8px',
                },
              },
            },
            MuiIconButton: {
              styleOverrides: {
                root: { color: grey[700] },
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
