import { NextPage } from 'next'
import MainLayout from '@components/Layouts/MainLayout'
import UserLayout from '@components/Layouts/UserLayout'
import AuthLayout from '@components/Layouts/AuthLayout'

type PageWithMainLayoutType = NextPage & { Layout?: typeof MainLayout }

type PageWithUserLayoutType = NextPage & { Layout?: typeof UserLayout }

type PageWithAuthLayoutType = NextPage & {
  Layout?: typeof AuthLayout
}

// type PageWithAdminLayoutType = NextPage & {
//   Layout?: typeof AdminLayout
// }

type PageWithLayoutType =
  | PageWithMainLayoutType
  | PageWithUserLayoutType
  | PageWithAuthLayoutType

export default PageWithLayoutType
