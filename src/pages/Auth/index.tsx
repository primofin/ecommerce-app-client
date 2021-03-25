import React, { useState } from 'react'
import { Helmet } from 'react-helmet'

import Header from '../../components/Header/index'
import Footer from '../../components/Footer/index'
import LoginForm from '../../components/LoginForm/index'
import RegisterForm from '../../components/RegisterForm/index'
import './auth.scss'

type AuthProps = {
  title: string
}
const Auth = (props: AuthProps) => {
  const { title } = props
  const [login, setLogin] = useState(true)
  const handleAuthToggle = () => setLogin(!login)
  return (
    <>
      <Helmet>
        <title>{title ? title : 'AMOUR'}</title>
      </Helmet>
      <div className="auth__wrapper">
        <Header />
        <div className="auth__content">
          {login ? (
            <LoginForm />
          ) : (
            <button className="auth__login-btn" onClick={handleAuthToggle}>
              Login
            </button>
          )}
          <div className="divider" />
          {login ? (
            <button className="auth__register-btn" onClick={handleAuthToggle}>
              Register
            </button>
          ) : (
            <RegisterForm />
          )}
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Auth
