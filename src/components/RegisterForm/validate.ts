import * as Yup from 'yup'

const RegisterSchema = Yup.object().shape({
  username: Yup.string()
    .min(8, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required!'),
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required!'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required!'),
  email: Yup.string().email('Invalid email!').required('Required!'),
  password: Yup.string()
    .min(8, 'Minimum 8 characters')
    .required('Required!'),
})

export default RegisterSchema
