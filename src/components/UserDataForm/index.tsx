import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Formik, Field, Form, FormikHelpers } from 'formik'

import { AppState } from '../../types'
import { userLogin } from '../../redux/actions/auth'
import './userDataForm.scss'

type Values = {
  email: string
  firstName: string
  lastName: string
}
const UserDataForm = () => {
  const dispatch = useDispatch()
  const user = useSelector((state: AppState) => state.auth.user)

  const isLoggedIn = useSelector((state: AppState) => state.auth.isLoggedIn)

  return (
    <div className="personal__form">
      <div className="form__title personal__form__title">my data </div>
      {isLoggedIn && (
        <Formik
          initialValues={{
            email: user?.email ? user.email : '',
            firstName: user?.firstName ? user.firstName : '',
            lastName: user?.firstName ? user.firstName : '',
          }}
          onSubmit={async (
            values: Values,
            { setSubmitting }: FormikHelpers<Values>
          ) => {
            // const { email, firstName, lastName } = values
            // // dispatch(userLogin(username, password))
            // setSubmitting(false)
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2))
              setSubmitting(false)
            }, 500)
          }}
        >
          {({ isSubmitting }) => (
            <Form className="form__content personal__form__content">
              <label htmlFor="email" className="form__content__label">
                Email:
              </label>
              <Field id="email" name="email" className="form__content__input" />
              <label htmlFor="firstName" className="form__content__label">
                Firstname:
              </label>
              <Field
                id="firstName"
                name="firstName"
                placeholder="first name"
                className="form__content__input"
              />
              <label htmlFor="lastName" className="form__content__label">
                Last name:
              </label>
              <Field
                id="lastName"
                name="lastName"
                placeholder="last name"
                className="form__content__input"
              />
              <button
                type="submit"
                className="form__content__submit-btn"
                disabled={isSubmitting}
              >
                Save changes
              </button>
            </Form>
          )}
        </Formik>
      )}
    </div>
  )
}

export default UserDataForm
