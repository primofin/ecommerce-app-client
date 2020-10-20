import React from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Formik, Field, Form, FormikHelpers } from 'formik'

import { userRequestForgotPassword } from '../../redux/actions/auth'
import './forgotPasswordForm.scss'

type Values = {
  email: string
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
        <Form className="form__content">
          <Field
            id="email"
            name="email"
            placeholder="Email"
            className="form__content__input"
          />
          <button type="submit" className="form__content__submit-btn">
            SEND
          </button>
        </Form>
      </Formik>
    </div>
  )
}

export default ForgotPasswordForm
