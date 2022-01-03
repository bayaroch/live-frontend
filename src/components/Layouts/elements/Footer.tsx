import {
  Box,
  Container,
  Link as MuiLink,
  List,
  ListItem,
  Typography,
} from '@mui/material'
import Link from 'next/link'
import React from 'react'
import { styled } from '@mui/system'
import { Colors } from '@theme/colors'

const MenuItem = styled(ListItem)({
  padding: '16px 20px',
  width: 'auto',
  '& a': {
    textDecoration: 'none',
    fontSize: 14,
    fontWeight: 600,
    display: 'inline-block',
    width: 'auto',
    color: Colors.text[400],
  },
  '& a:hover': {
    transition: 'all ease 0.5s',
    color: Colors.white,
  },
})

const Footer: React.FC = () => {
  return (
    <Box sx={{ background: Colors.dark, marginTop: 5 }}>
      <Container maxWidth="lg">
        <Box
          component="header"
          sx={{
            alignItems: 'center',
            display: 'flex',
            zIndex: 1000,
            flexDirection: 'row',
            width: 'auto',
            justifyContent: 'space-between',
            minHeight: 66,
            padding: {
              sm: 0,
              md: 0,
              lg: '10px 0',
              xl: '10px 0',
            },
          }}
        >
          <MuiLink
            component="a"
            href="/"
            sx={{
              paddingRight: 2,
              paddingLeft: 2,
              display: {
                xs: 'none',
                sm: 'none',
                md: 'flex',
              },
            }}
          >
            <img
              style={{ height: 42, width: 92 }}
              src="/images/logo-web-small.png"
            />
          </MuiLink>
          <Box
            component="nav"
            sx={{
              display: {
                xs: 'none',
                sm: 'none',
                md: 'none',
                lg: 'flex',
                xl: 'flex',
              },
              flexDirection: 'row',
              width: 'auto',
            }}
          >
            <List
              sx={{
                alignItems: 'center',
                display: 'flex',
                flexDirection: 'row',
              }}
            >
              <MenuItem>
                <Link href="/features">Үйлчилгээ</Link>
              </MenuItem>
              <MenuItem>
                <Link href="/create">Заавар</Link>
              </MenuItem>
              <MenuItem>
                <Link href="/events">Холбоо барих</Link>
              </MenuItem>
            </List>
          </Box>
          <Typography variant="body2">© Copyright 2022, Ideo</Typography>
        </Box>
      </Container>
    </Box>
  )
}

export default Footer
