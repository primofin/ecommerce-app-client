import React from 'react'
import { useParams } from 'react-router-dom'

import Header from '../../components/Header/index'
import Footer from '../../components/Footer/index'
import ResetPasswordForm from '../../components/ResetPasswordForm/index'
import './resetPassword.scss'

type ResetPasswordParams = {
  token: string
}
export default function ResetPassword() {
  const {token } = useParams<ResetPasswordParams>()
  return (
    <div className="reset-password__wrapper">
      <Header />
      <div className="reset-password__content">
        <ResetPasswordForm token={token} />
      </div>
      <Footer />
    </div>
  )
}
