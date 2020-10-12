import React from 'react'

import Header from '../../components/Header/index'
import Footer from '../../components/Footer/index'
import LoginForm from '../../components/LoginForm/index'
import RegisterForm from '../../components/RegisterForm/index'
import './auth.scss'

const Auth = () => {
  return (
    <div className="auth__wrapper">
      <Header />
      <div className="auth__content">
        <LoginForm />
        <div className="divider"/>
        <RegisterForm />
      </div>
      <Footer />
    </div>
  )
}

export default Auth
