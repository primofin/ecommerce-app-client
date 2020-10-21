import React from 'react'
import { useHistory, Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { Formik, Field, Form, FormikHelpers } from 'formik'

import { AppState } from '../../types'
import { userLogin } from '../../redux/actions/auth'
import GoogleLogo from '../../icons/icons8-google.svg'
import LoginSchema from './validate'
import './loginForm.scss'

type Values = {
  username: string
  password: string
}
const LoginForm = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const isLoggedIn = useSelector((state: AppState) => state.auth.isLoggedIn)
  if (isLoggedIn) {
    history.push('/')
  }
  return (
    <div className="form__wrapper">
      <div className="form__title">Are you a user? </div>
      <Formik
        initialValues={{
          username: '',
          password: '',
        }}
        validationSchema={LoginSchema}
        onSubmit={async (
          values: Values,
          { setSubmitting }: FormikHelpers<Values>
        ) => {
          const { username, password } = values
          dispatch(userLogin(username, password))
        }}
      >
        {({ errors, touched }) => (
          <Form className="form__content">
            <Field
              required
              id="username"
              name="username"
              placeholder="Username"
              className="form__content__input"
            />
            {errors.username && touched.username ? (
              <div className="form__content__error">{errors.username}</div>
            ) : null}
            <Field
              required
              id="password"
              name="password"
              type="password"
              placeholder="Password"
              className="form__content__input"
            />
            {errors.password && touched.password ? (
              <div className="form__content__error">{errors.password}</div>
            ) : null}
            <button type="submit" className="form__content__submit-btn">
              Log in to AMOUR
            </button>
          </Form>
        )}
      </Formik>
      <div className="social__login__text">
        Or login with your social media account
      </div>
      <a
        href="http://localhost:3000/api/v1/auth/google"
        className="google__link"
      >
        <img src={GoogleLogo} className="google__link__icon" />
        login
      </a>
      <div className="forgot-password__link">
        <Link to="/auth/forgot-password">I forgot my password</Link>
      </div>
    </div>
  )
}

export default LoginForm
