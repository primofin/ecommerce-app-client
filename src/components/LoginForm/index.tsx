import React from 'react'
import { useHistory } from 'react-router-dom'
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
  const user = useSelector((state: AppState) => state.auth.user)
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
          dispatch(userLogin(values.username, values.password))
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
      <div>Login with your social media account</div>
      <GoogleLogin
        clientId={GOOGLE_ID}
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
      />
    </div>
  )
}

export default LoginForm
