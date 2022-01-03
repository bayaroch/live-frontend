import {
  Button,
  Paper,
  Container,
  Typography,
  Box,
  ButtonGroup,
} from '@mui/material'

const Home: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ padding: { sm: 0, xs: 0 } }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          flex: 1,
          flexDirection: 'column',
          background: "url('/images/gradient.png') top center",
          paddingRight: 1,
          paddingLeft: 1,
          minHeight: 900,
        }}
      >
        <Typography pt={10} align="center" variant="h1">
          Орчин үеийн дэвшилтэд лайв стрийм
        </Typography>
        <Typography p={4} sx={{ maxWidth: 700 }} align="center" variant="body1">
          Хамгийн хурдтай, чанартай, төрөл бүрийнүзэгчидтэйгээ харицах
          интерактив боломжуудыг ашиглан дэвшилтэд виртиул лайв стрийм эвент
          зохион байгуулаарай
        </Typography>
        <ButtonGroup>
          <Button sx={{ marginBottom: 4 }} variant="contained" color="primary">
            Эвент үүсгэх
          </Button>
          <Button
            sx={{ marginBottom: 4 }}
            variant="contained"
            color="secondary"
          >
            Дэлгэрэнгүй
          </Button>
        </ButtonGroup>
        <Paper
          sx={{
            borderRadius: 2,
            background: "url('/images/demo.png') center center",
            backgroundSize: 'cover',
            maxWidth: 750,
            width: '100%',
            boxShadow: 6,
            overflow: 'hidden',
          }}
        >
          <img
            style={{ maxWidth: '100%', height: 'auto' }}
            src={'/images/demo.png'}
          />
        </Paper>
      </Box>
    </Container>
  )
}

export default Home
