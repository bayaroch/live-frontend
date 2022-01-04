import PageWithLayoutType from '@constants/page'
import MainLayout from '@components/Layouts/MainLayout'
import Home from '@containers/Home'
import withPublic from '@containers/HOC/withPublic'

const HomePage: PageWithLayoutType = (props) => {
  return (
    <MainLayout {...props}>
      <Home />
    </MainLayout>
  )
}

export default withPublic(HomePage)
