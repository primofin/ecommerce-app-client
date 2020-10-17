import React from 'react'
import { BrowserRouter as Router, Switch, useLocation } from 'react-router-dom'

import Header from '../../components/Header/index'
import UserAccountNavigation from '../../components/UserAccountNavigation/index'
import AddProductForm from '../../components/AddProductForm/index'
import './addProduct.scss'

function AddProduct() {
  return (
    <div className="profile__wrapper">
      <Header />
      <div className="profile__content">
        <h1>ADD NEW PRODUCT</h1>
        <hr />
        <div className="account__container">
          <UserAccountNavigation />
          <div className="account__form-wrapper">
            <AddProductForm />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddProduct
