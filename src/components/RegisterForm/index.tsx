import React from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { Formik, Field, Form, FormikHelpers } from 'formik'

import { AppState } from '../../types'
import { userRegister } from '../../redux/actions/auth'
import './registerForm.scss'

type Values = {
  username: string
  firstName: string
  lastName: string
  email: string
  password: string
}
const RegisterForm = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const isLoggedIn = useSelector((state: AppState) => state.auth.isLoggedIn)
  if (isLoggedIn) {
    history.push('/')
  }
  return (
    <div className="register form__wrapper">
      <div className="form__title">Is this your first visit?</div>
      <Formik
        initialValues={{
          username: '',
          firstName: '',
          lastName: '',
          email: '',
          password: '',
        }}
        onSubmit={(
          values: Values,
          { setSubmitting }: FormikHelpers<Values>
        ) => {
          const { username, firstName, lastName, email, password } = values
          dispatch(userRegister(username, email, password, firstName, lastName))
        }}
      >
        <Form className="form__content">
          <label htmlFor="username" className="form__content__label">
            Username:
          </label>
          <Field
            required
            id="username"
            name="username"
            placeholder="john123"
            className="form__content__input"
          />
          <label htmlFor="password" className="form__content__label">
            Password:
          </label>
          <Field
            required
            id="password"
            name="password"
            type="password"
            placeholder="your password"
            className="form__content__input"
          />

          <label htmlFor="firstName" className="form__content__label">
            First Name:
          </label>
          <Field
            id="firstName"
            name="firstName"
            placeholder="John"
            className="form__content__input"
          />

          <label htmlFor="lastName" className="form__content__label">
            Last Name:
          </label>
          <Field
            id="lastName"
            name="lastName"
            placeholder="Doe"
            className="form__content__input"
          />

          <label htmlFor="email" className="form__content__label">
            Email:
          </label>
          <Field
            required
            id="email"
            name="email"
            placeholder="john@acme.com"
            type="email"
            className="form__content__input"
          />
          <button type="submit" className="form__content__submit-btn">
            Register
          </button>
        </Form>
      </Formik>
    </div>
  )
}

export default RegisterForm
