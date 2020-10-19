import React from 'react'
import { useSelector } from 'react-redux'

import { AppState } from '../../types'
import Header from '../../components/Header/index'
import UserAccountNavigation from '../../components/UserAccountNavigation/index'
import UserDataForm from '../../components/UserDataForm/index'
import UpdatePasswordForm from '../../components/UpdatePasswordForm/index'
import './userProfile.scss'

function UserProfile() {
  const user = useSelector((state: AppState) => state.auth.user)

  return (
    <div className="profile__wrapper">
      <Header />
      <div className="profile__content">
        <h1>MY ACCOUNT</h1>
        <hr />
        <div className="account__container">
          <UserAccountNavigation />
          <div className="account__form-wrapper">
            <UserDataForm />
            {!user?.google && <UpdatePasswordForm />}
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserProfile
