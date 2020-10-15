import React from 'react'

import Header from '../../components/Header/index'
import Footer from '../../components/Footer/index'
import ForgotPasswordForm from '../../components/ForgotPasswordForm/index'
import './forgotPassword.scss'

export default function ForgotPassword() {
  return (
    <div className="forgot-password__wrapper">
      <Header />
      <div className="forgot-password__content">
        <ForgotPasswordForm />
      </div>
      <Footer />
    </div>
  )
}
