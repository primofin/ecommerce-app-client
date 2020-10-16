import React from 'react'
import { BrowserRouter as Router, Switch, useLocation } from 'react-router-dom'

import Header from '../../components/Header/index'
import UserAccountNavigation from '../../components/UserAccountNavigation/index'
import UserDataForm from '../../components/UserDataForm/index'
import './userProfile.scss'

function UserProfile() {
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
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserProfile
