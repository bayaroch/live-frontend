const API = process.env.NEXT_PUBLIC_API

export const URI = {
  API,
  LOGIN: API + 'auth/login',
  LOGOUT: API + 'auth/signout',
  REGISTER: API + 'auth/signup',
  CONFIRM: API + 'auth/confirm',
  REFRESH: API + 'auth/refresh',
}
