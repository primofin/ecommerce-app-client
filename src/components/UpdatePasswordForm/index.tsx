import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Formik, Field, Form, FormikHelpers } from 'formik'

import { AppState } from '../../types'
import { userLogin } from '../../redux/actions/auth'
import './updatePasswordForm.scss'

type Values = {
  oldPassword: string
  newPassword: string
}
const UpdatePasswordForm = () => {
  const dispatch = useDispatch()
  const user = useSelector((state: AppState) => state.auth.user)

  return (
    <div className="personal__form">
      <div className="form__title personal__form__title">change password </div>
      <Formik
        initialValues={{
          oldPassword: '',
          newPassword: '',
        }}
        onSubmit={async (
          values: Values,
          { setSubmitting }: FormikHelpers<Values>
        ) => {
          const { oldPassword, newPassword } = values
          //   dispatch(userLogin(username, password))
          setSubmitting(false)
        }}
      >
        {({ isSubmitting }) => (
          <Form className="form__content personal__form__content">
            <label htmlFor="oldPassword" className="form__content__label">
              Current password
            </label>
            <Field
              type="password"
              id="oldPassword"
              name="oldPassword"
              placeholder="Your current password"
              className="form__content__input"
            />
            <label htmlFor="newPassword" className="form__content__label">
              New password
            </label>
            <Field
              type="password"
              id="newPassword"
              name="newPassword"
              placeholder="Your new password"
              className="form__content__input"
            />
            <button
              type="submit"
              className="form__content__submit-btn"
              disabled={isSubmitting}
            >
              Update your password
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default UpdatePasswordForm
