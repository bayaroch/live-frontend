import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import MenuItem, { MenuItemProps } from '@mui/material/MenuItem'
import Menu from '@mui/material/Menu'
import AccountCircle from '@mui/icons-material/AccountCircle'
import MoreIcon from '@mui/icons-material/MoreVert'
import React, { useState } from 'react'
import { Colors } from '@theme/colors'
import { Button, Divider, ListItemIcon, ListItemText } from '@mui/material'
import {
  Publish,
  KeyboardArrowDown,
  List,
  Settings,
  Logout,
} from '@mui/icons-material'
import Link from 'next/link'
import { grey } from '@mui/material/colors'

const SubItem = ({ children, ...rest }: MenuItemProps) => {
  return (
    <MenuItem
      sx={{
        color: Colors.grey[400],
        padding: '10px 16px',
        '&:hover': {
          background: grey[200],
          transition: 'all 0.3s ease',
        },
      }}
      {...rest}
    >
      {children}
    </MenuItem>
  )
}

const AppNavigation: React.FC<AppNavigationProps> = () => {
  const [anchorEl, setAnchorEl] = useState(null)
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null)

  const isMenuOpen = Boolean(anchorEl)
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl)

  const handleProfileMenuOpen = (event: React.MouseEvent<any>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
    handleMobileMenuClose()
  }

  const handleMobileMenuOpen = (event: React.MouseEvent<any>) => {
    setMobileMoreAnchorEl(event.currentTarget)
  }

  const menuId = 'primary-search-account-menu'
  const renderMenu = (
    <Menu
      PaperProps={{
        sx: { background: Colors.white, minWidth: 160, borderRadius: 1 },
      }}
      MenuListProps={{ sx: { padding: 0 } }}
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <SubItem onClick={handleMenuClose}>
        <ListItemIcon>
          <List fontSize="small" sx={{ color: '#333' }} />
        </ListItemIcon>
        <ListItemText>Миний эвентүүд</ListItemText>
      </SubItem>
      <SubItem onClick={handleMenuClose}>
        <ListItemIcon>
          <Settings fontSize="small" sx={{ color: '#333' }} />
        </ListItemIcon>
        <ListItemText> Тохиргоо</ListItemText>
      </SubItem>
      <Divider sx={{ margin: '0 !important', borderColor: '#eee' }} />
      <SubItem onClick={handleMenuClose}>
        <ListItemIcon>
          <Logout fontSize="small" sx={{ color: '#333' }} />
        </ListItemIcon>
        <ListItemText>Гарах</ListItemText>
      </SubItem>
    </Menu>
  )

  const mobileMenuId = 'primary-search-account-menu-mobile'
  const renderMobileMenu = (
    <Menu
      PaperProps={{
        sx: { background: Colors.white, minWidth: 160, borderRadius: 1 },
      }}
      MenuListProps={{ sx: { padding: 0 } }}
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <Link href="/create" passHref>
        <SubItem>
          <ListItemIcon>
            <Publish fontSize="small" sx={{ color: '#333' }} />
          </ListItemIcon>
          <ListItemText> Эвент үүсгэх</ListItemText>
        </SubItem>
      </Link>
    </Menu>
  )

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          boxShadow: 'none',
          background: Colors.light,
          '& .MuiToolbar-root': {
            minHeight: 56,
          },
        }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { sm: 'block' } }}
          >
            <img
              style={{ height: 24, width: 'auto' }}
              src="/images/logo-web-small.png"
            />
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { md: 'flex', xs: 'none' } }}>
            <Link href="/create" passHref>
              <Button
                startIcon={<Publish />}
                sx={{
                  minHeight: 55,
                  paddingLeft: 2,
                  paddingRight: 2,
                  textTransform: 'unset',
                  fontSize: 16,
                }}
                color="inherit"
                disableRipple
              >
                Эвент үүсгэх
              </Button>
            </Link>
          </Box>
          <Box sx={{ display: { md: 'flex' } }}>
            <Button
              sx={{ minHeight: 55 }}
              disableRipple
              aria-controls={menuId}
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <>
                <AccountCircle sx={{ color: Colors.white }} />
                <KeyboardArrowDown sx={{ color: Colors.white }} />
              </>
            </Button>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon sx={{ color: Colors.white }} />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  )
}

export default AppNavigation
