export default {
  hello: 'hi',
  login: {
    email: 'Имэйл хаяг',
    email_placeholder: 'Имэйл хаягаа оруулна уу',
    password: 'Нууц үг',
    password_placeholder: 'Нууц үгээ оруулна уу',
    button: 'Нэвтрэх',
    validation: {
      string: 'Зөвхөн тэмдэгт оруулна уу',
      email: {
        required: 'Имэйл хоосон байна',
        email: 'Зөвхөн имейл оруулна уу',
      },
      password: {
        required: 'Нууц үг хоосон байна',
        min: 'Хамгийн багадаа 6-н тэмдэгт байна',
        oneNumber: 'Заавал нэг тоо байх ёстой',
        oneUpper: 'Заавал нэг том үсэг байх ёстой',
      },
    },
  },
  register: {
    username: 'Хэрэглэгчийн нэр',
    username_placeholder: 'Хэрэглэгчийн нэрээ оруулна уу',
    email: 'Имэйл хаяг',
    email_placeholder: 'Имэйл хаягаа оруулна уу',
    password: 'Нууц үг',
    password_placeholder: 'Нууц үгээ оруулна уу',
    confirm_password: 'Давтан нууц үг',
    confirm_password_placeholder: 'Давтан нууц үгээ оруулна уу',
    button: 'Бүртгүүлэх',
    validation: {
      string: 'Зөвхөн тэмдэгт оруулна уу',
      email: {
        required: 'Имэйл хоосон байна',
        email: 'Зөвхөн имейл оруулна уу',
      },
      password: {
        required: 'Нууц үг хоосон байна',
        min: 'Хамгийн багадаа 6-н тэмдэгт байна',
        oneNumber: 'Заавал нэг тоо байх ёстой',
        oneUpper: 'Заавал нэг том үсэг байх ёстой',
      },
      confirm_password: {
        required: 'Баталгаажуулах нууц үг хоосон байна',
        must_match: 'Нууц үгтэй таарч байх ёстой',
        min: 'Хамгийн багадаа 6-н тэмдэгт байна',
        oneNumber: 'Заавал нэг тоо байх ёстой',
        oneUpper: 'Заавал нэг том үсэг байх ёстой',
      },
    },
  },
}
