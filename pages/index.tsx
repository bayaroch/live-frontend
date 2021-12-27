import PageWithLayoutType from '@constants/page'
import MainLayout from '@components/Layouts/MainLayout'
import Home from '@containers/Home'

const HomePage: PageWithLayoutType = () => {
  return <Home />
}

export default HomePage

HomePage.Layout = MainLayout
