import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './pages/Home/index'
import Auth from './pages/Auth/index'
import ForgotPassword from './pages/ForgotPassword/index'
import Cart from './pages/Cart/index'
import Product from './pages/Product/index'
import UserProfile from './pages/UserProfile/index'
import AddProduct from './pages/AddProduct/index'

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/auth" component={Auth} />
    <Route exact path="/auth/forgot-password" component={ForgotPassword} />
    <Route exact path="/checkout/cart" component={Cart} />
    <Route exact path="/products/:productId" component={Product} />
    <Route exact path="/user/:userId" component={UserProfile} />
    <Route exact path="/admin/addnewproduct" component={AddProduct} />
  </Switch>
)

export default Routes
