import React, { useState } from 'react'

import Header from '../../components/Header/index'
import Footer from '../../components/Footer/index'
import LoginForm from '../../components/LoginForm/index'
import RegisterForm from '../../components/RegisterForm/index'
import './auth.scss'

const Auth = () => {
  const [login, setLogin] = useState(false)
  const handleAuthToggle = () => setLogin(!login)
  return (
    <div className="auth__wrapper">
      <Header />
      <div className="auth__content">
        {login ? (
          <LoginForm />
        ) : (
          <button onClick={handleAuthToggle}>Login</button>
        )}
        <div className="divider" />
        {login ? (
          <button onClick={handleAuthToggle}>Register</button>
        ) : (
          <RegisterForm />
        )}
      </div>
      <Footer />
    </div>
  )
}

export default Auth
