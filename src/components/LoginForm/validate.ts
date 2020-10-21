import * as Yup from 'yup'

const LoginSchema = Yup.object().shape({
  username: Yup.string()
    .min(8, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required!'),
  password: Yup.string()
    .min(8, 'Minimum 8 characters')
    .required('Required!'),
})

export default LoginSchema