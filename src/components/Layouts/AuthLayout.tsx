import { Box, Typography } from '@mui/material'
import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { css } from '@emotion/css'
import { Colors } from '@theme/colors'

const AuthLayout: React.FC = ({ children }) => {
  const router = useRouter()

  const renderButton = () => {
    if (router.pathname === '/register') {
      return (
        <Link href="/login" passHref>
          <Typography
            sx={{
              color: Colors.white,
              textDecoration: 'none',
              '&:hover': {
                transition: 'all 0.3s ease',
              },
            }}
            component="a"
            variant="body1"
            className={css`
              position: relative;
              padding-bottom: 4px;
              display: inline-block;
              ::before {
                content: '';
                position: absolute;
                width: 0;
                height: 2px;
                bottom: 0;
                left: 0;
                background-color: ${Colors.primary};
                visibility: 'hidden';
                transition: all 0.5s ease-in-out;
              }
              :hover::before {
                visibility: visible;
                width: 100%;
              }
              :hover {
                cursor: pointer;
              }
            `}
          >
            Нэвтрэх
          </Typography>
        </Link>
      )
    } else if (router.pathname === '/login') {
      return (
        <Link href="/register" passHref>
          <Typography
            sx={{
              color: Colors.white,
              textDecoration: 'none',
              '&:hover': {
                transition: 'all 0.3s ease',
              },
            }}
            component="a"
            variant="body1"
            className={css`
              position: relative;
              display: inline-block;
              padding-bottom: 4px;
              ::before {
                content: '';
                position: absolute;
                width: 0;
                height: 2px;
                bottom: 0;
                left: 0;
                background-color: ${Colors.primary};
                visibility: 'hidden';
                transition: all 0.5s ease-in-out;
              }
              :hover::before {
                visibility: visible;
                width: 100%;
              }
              :hover {
                cursor: pointer;
              }
            `}
          >
            Бүртгүүлэх
          </Typography>
        </Link>
      )
    }
  }
  return (
    <Box
      component="main"
      id="main"
      sx={{
        display: 'flex',
        minHeight: '100vh',
        overflow: 'hidden',
        height: '100%',
        width: '100%',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          padding: { lg: 0, md: 0, sm: 3, xs: 3 },
          flex: '1 1 100%',
          justifyContent: 'center',
          zIndex: 1,
          position: 'relative',
        }}
      >
        <Box
          className={css`
            width: 100%;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            padding: 10px;
          `}
        >
          <Link href={'/'} passHref>
            <Typography
              variant="body1"
              className={css`
                color: white;
                position: relative;
                display: inline-block;
                padding-bottom: 4px;
                ::before {
                  content: '';
                  position: absolute;
                  width: 0;
                  height: 2px;
                  bottom: 0;
                  left: 0;
                  background-color: ${Colors.primary};
                  visibility: 'hidden';
                  transition: all 0.5s ease-in-out;
                }
                :hover::before {
                  visibility: visible;
                  width: 100%;
                }
                :hover {
                  cursor: pointer;
                }
              `}
            >
              Буцах
            </Typography>
          </Link>
          {renderButton()}
        </Box>
        <Box
          sx={{
            justifyContent: 'center',
            maxWidth: 360,
            width: '100%',
            flexDirection: 'column',
          }}
        >
          <Box sx={{ display: 'block', textAlign: 'center' }}>
            <img src="images/logo-web-small.png" alt="logo" />
          </Box>
          <Box>{children}</Box>
        </Box>
      </Box>
      <Box
        sx={{
          flex: '1 1 100%',
          display: {
            xl: 'block',
            lg: 'block',
            md: 'none',
            sm: 'none',
            xs: 'none',
          },
          backgroundColor: '#fff',
          backgroundSize: 'cover',
        }}
      ></Box>
    </Box>
  )
}

export default AuthLayout
