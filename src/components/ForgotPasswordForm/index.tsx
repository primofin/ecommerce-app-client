import React from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Formik, Field, Form, FormikHelpers } from 'formik'

import { userRequestForgotPassword } from '../../redux/actions/auth'
import './forgotPasswordForm.scss'

type Values = {
  email: string
}
function validateEmail(value: string) {
  let error
  if (!value) {
    error = 'Required!'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = 'Invalid email address!'
  }
  return error
}
const ForgotPasswordForm = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  return (
    <div className="form__wrapper">
      <div className="form__title">RECOVER YOUR PASSWORD </div>
      <p>We will send you an e-mail to reset your password: </p>
      <Formik
        initialValues={{
          email: '',
        }}
        onSubmit={async (
          values: Values,
          { setSubmitting, resetForm }: FormikHelpers<Values>
        ) => {
          const { email } = values
          dispatch(userRequestForgotPassword(email))
          alert('The reset link is sent to your email')
          setSubmitting(false)
          resetForm()
          history.push('/auth')
        }}
      >
        {({ errors, touched, isValidating }) => (
          <Form className="form__content">
            <Field
              id="email"
              name="email"
              placeholder="Email"
              className="form__content__input"
              validate={validateEmail}
            />
            {errors.email && touched.email && (
              <div className="form__content__error">{errors.email}</div>
            )}
            <button type="submit" className="form__content__submit-btn">
              SEND
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default ForgotPasswordForm
