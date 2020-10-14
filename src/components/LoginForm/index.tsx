import React from 'react'
import { Formik, Field, Form, FormikHelpers } from 'formik'
import axios from 'axios'

import './loginForm.scss'

type Values = {
  username: string
  password: string
}
const LoginForm = () => {
  return (
    <div className="login form__wrapper">
      <div className="form__title">Are you a user? </div>
      <Formik
        initialValues={{
          username: '',
          password: '',
        }}
        onSubmit={async (
          values: Values,
          { setSubmitting }: FormikHelpers<Values>
        ) => {
          const res = await axios.post(
            'http://localhost:3000/api/v1/auth/login',
            values,
            { withCredentials: true }
          )
          return res
        }}
      >
        <Form>
          <label htmlFor="username">Username</label>
          <Field id="username" name="username" placeholder="john123" />
          <label htmlFor="password">Password</label>
          <Field id="password" name="password" type="password" />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  )
}

export default LoginForm
