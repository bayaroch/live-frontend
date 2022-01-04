const API = process.env.NEXT_PUBLIC_API

export const URI = {
  API,
  LOGIN: '/auth/login',
  LOGOUT: '/auth/signout',
  REGISTER: '/auth/register',
  CONFIRM: '/auth/confirm',
  REFRESH: '/auth/refresh',
}
