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
    <Container maxWidth="lg">
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          flex: 1,
          flexDirection: 'column',
          background: "url('/images/gradient.png') top center",
          minHeight: 1000,
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
            width: 750,
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
