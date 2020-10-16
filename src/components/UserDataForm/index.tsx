import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Formik, Field, Form, FormikHelpers } from 'formik'

import { AppState } from '../../types'
import { userLogin } from '../../redux/actions/auth'
import './userDataForm.scss'

type Values = {
  username: string
  password: string
}
const UserDataForm = () => {
  const dispatch = useDispatch()
  const user = useSelector((state: AppState) => state.auth.user)
  const isLoggedIn = useSelector((state: AppState) => state.auth.isLoggedIn)

  return (
    <div className="personal__form">
      <div className="form__title personal__form__title">my data </div>
      <Formik
        initialValues={{
          username: '',
          password: '',
        }}
        onSubmit={async (
          values: Values,
          { setSubmitting }: FormikHelpers<Values>
        ) => {
          const { username, password } = values
          dispatch(userLogin(username, password))
        }}
      >
        <Form className="form__content personal__form__content">
          <label htmlFor="email" className="form__content__label">
            Email:
          </label>
          <Field
            id="email"
            name="email"
            value={user?.email}
            className="form__content__input"
          />
          <label htmlFor="firstName" className="form__content__label">
            Firstname:
          </label>
          <Field
            id="firstName"
            name="firstName"
            placeholder="first name"
            value={user?.firstName}
            className="form__content__input"
          />
          <label htmlFor="lastName" className="form__content__label">
            Last name:
          </label>
          <Field
            id="lastName"
            name="lastName"
            placeholder="last name"
            value={user?.lastName}
            className="form__content__input"
          />
          <button type="submit" className="form__content__submit-btn">
            Save changes
          </button>
        </Form>
      </Formik>
    </div>
  )
}

export default UserDataForm
