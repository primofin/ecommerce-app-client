import React from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Formik, Field, Form, FormikHelpers } from 'formik'

import { userResetPassword } from '../../redux/actions/auth'
import './resetPasswordForm.scss'
type ResetPasswordFormParams = {
  token: string
}
type Values = {
  newPassword: string
}
const ResetPasswordForm = (props: ResetPasswordFormParams) => {
  const { token } = props
  const history = useHistory()
  const dispatch = useDispatch()
  return (
    <div className="form__wrapper">
      <div className="form__title">enter your new password </div>
      <Formik
        initialValues={{
          newPassword: '',
        }}
        onSubmit={async (
          values: Values,
          { setSubmitting, resetForm }: FormikHelpers<Values>
        ) => {
          const { newPassword } = values
          dispatch(userResetPassword(newPassword, token))
          alert('Reset password successfully')
          setSubmitting(false)
          resetForm()
          history.push('/auth')
        }}
      >
        <Form className="form__content">
          <Field
            type="password"
            id="newPassword"
            name="newPassword"
            placeholder="new password"
            className="form__content__input"
          />
          <button type="submit" className="form__content__submit-btn">
            reset
          </button>
        </Form>
      </Formik>
    </div>
  )
}

export default ResetPasswordForm
