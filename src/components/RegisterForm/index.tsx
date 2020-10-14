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
        <Form>
          <label htmlFor="username">Username</label>
          <Field id="username" name="username" placeholder="john123" />

          <label htmlFor="password">Password</label>
          <Field id="password" name="password" type="password" />

          <label htmlFor="firstName">First Name</label>
          <Field id="firstName" name="firstName" placeholder="John" />

          <label htmlFor="lastName">Last Name</label>
          <Field id="lastName" name="lastName" placeholder="Doe" />

          <label htmlFor="email">Email</label>
          <Field
            id="email"
            name="email"
            placeholder="john@acme.com"
            type="email"
          />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  )
}

export default RegisterForm
