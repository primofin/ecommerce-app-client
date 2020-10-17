import React from 'react'
import { useHistory, Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { Formik, Field, Form, FormikHelpers } from 'formik'
import { GoogleLogin } from 'react-google-login'

import { AppState } from '../../types'
import { userLogin } from '../../redux/actions/auth'
import './loginForm.scss'

type Values = {
  username: string
  password: string
}
const LoginForm = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const isLoggedIn = useSelector((state: AppState) => state.auth.isLoggedIn)
  const GOOGLE_ID =
    '936466011859-tpvqnj6448vmi6ck6m7i78pd90ka2lva.apps.googleusercontent.com'
  const responseGoogle = (response: any) => {
    console.log('responseGoogle', response)
  }
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
        onSubmit={async (
          values: Values,
          { setSubmitting }: FormikHelpers<Values>
        ) => {
          const { username, password } = values
          dispatch(userLogin(username, password))
        }}
      >
        <Form className="form__content">
          <Field
            required
            id="username"
            name="username"
            placeholder="Username"
            className="form__content__input"
          />
          <Field
            required
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            className="form__content__input"
          />
          <button type="submit" className="form__content__submit-btn">
            Log in to AMOUR
          </button>
        </Form>
      </Formik>
      <div className="social__login__text">
        Or login with your social media account
      </div>
      <GoogleLogin
        clientId={GOOGLE_ID}
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
      />
      <div className="forgot-password__link">
        <Link to="/auth/forgot-password">I forgot my password</Link>
      </div>
    </div>
  )
}

export default LoginForm
