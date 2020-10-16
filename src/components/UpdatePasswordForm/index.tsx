import React from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Formik, Field, Form, FormikHelpers } from 'formik'

import { updateUserPassword } from '../../redux/actions/user'
import './updatePasswordForm.scss'

type Values = {
  oldPassword: string
  newPassword: string
}
type Params = {
  userId: string
}
const UpdatePasswordForm = () => {
  const { userId } = useParams<Params>()
  const dispatch = useDispatch()

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
          dispatch(updateUserPassword(userId, oldPassword, newPassword))
          alert('Your password is updated')
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
