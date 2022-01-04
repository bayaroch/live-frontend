import { Box, Alert, Typography } from '@mui/material'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import useEmailConfirm from './useEmailConfirm'

const ConfirmContainer: React.FC = () => {
  const router = useRouter()
  const { confirm, confirmMeta } = useEmailConfirm()
  const urlToken = router.query.token
  const [render, setRender] = useState<boolean>(false)

  useEffect(() => {
    if (urlToken) {
      setRender(true)
      confirm({ token: String(urlToken) })
    }
  }, [urlToken])

  return (
    <>
      {render ? (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            flexDirection: 'column',
          }}
        >
          <Box
            sx={{
              boxSizing: 'border-box',
              margin: '16px 0px 8px',
              textAlign: 'center',
              color: 'rgb(49, 49, 49)',
            }}
          >
            <img
              src="/images/logo-web-small.png"
              style={{ marginBottom: 8 }}
              alt="logo"
            />
            <Typography variant="h2">Баталгаажуулалт</Typography>
          </Box>
          {!confirmMeta.pending && confirmMeta.loaded && !confirmMeta.error ? (
            <Alert sx={{ marginTop: 3 }} variant="outlined" severity="success">
              Имэйл амжилттай баталгаажлаа
            </Alert>
          ) : (
            <Alert sx={{ marginTop: 3 }} variant="outlined" severity="error">
              Имэйл баталгаажуулахад алдаа үүслээ
            </Alert>
          )}

          <Typography mt={2}>
            Та
            <Link href="/login" passHref>
              <Box
                component="a"
                sx={{
                  color: 'primary.main',
                  paddingLeft: 0.5,
                  paddingRight: 0.5,
                }}
              >
                энд
              </Box>
            </Link>
            дарж нэвтрэнэ үү
          </Typography>
        </Box>
      ) : (
        <></>
      )}
    </>
  )
}

export default ConfirmContainer
