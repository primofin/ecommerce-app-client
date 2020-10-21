import * as Yup from 'yup'

const AddProductSchema = Yup.object().shape({
  productName: Yup.string()
    .min(4, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required!'),
  price: Yup.number().min(1, 'Minimum 1 characters').required('Required!'),
  images: Yup.array()
    .of(Yup.string().min(4, 'Too Short!').required('Required'))
    .required('Must have at least one product image'),
  description: Yup.string().min(10, 'Too Short!').max(400, 'Too Long!'),
  category: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required!'),
  variants: Yup.array().of(Yup.string().min(4, 'Too Short!')),
  size: Yup.mixed().required('Required!'),
})

export default AddProductSchema
