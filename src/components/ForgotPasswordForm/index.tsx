import React from 'react'
import { useHistory, Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { Formik, Field, Form, FormikHelpers } from 'formik'
import { GoogleLogin } from 'react-google-login'

import { AppState } from '../../types'
import { userLogin } from '../../redux/actions/auth'
import './forgotPasswordForm.scss'
import ForgotPassword from '../../pages/ForgotPassword'

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
          { setSubmitting }: FormikHelpers<Values>
        ) => {
          const { email } = values
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
