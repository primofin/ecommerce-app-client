import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './pages/Home/index'
import Auth from './pages/Auth/index'
import ForgotPassword from './pages/ForgotPassword/index'
import ResetPassword from './pages/ResetPassword/index'
import Cart from './pages/Cart/index'
import Product from './pages/Product/index'
import UpdateProduct from './pages/UpdateProduct/index'
import UserProfile from './pages/UserProfile/index'
import AddProduct from './pages/AddProduct/index'
import NoMatch from './pages/NoMatch/index'

const Routes = () => (
  <Switch>
    <Route
      exact
      path="/"
      render={(props) => <Home {...props} title="AMOUR Finland" />}
    />
    <Route
      exact
      path="/newin"
      render={(props) => <Home {...props} title="NEW IN" />}
    />
    <Route
      exact
      path="/women"
      render={(props) => <Home {...props} title="WOMEN" />}
    />
    <Route
      exact
      path="/men"
      render={(props) => <Home {...props} title="MEN" />}
    />
    <Route
      exact
      path="/kids"
      render={(props) => <Home {...props} title="KIDS" />}
    />
    <Route
      exact
      path="/auth"
      render={(props) => <Auth {...props} title="LOGIN/CREATE NEW ACCOUNT" />}
    />
    <Route exact path="/auth/forgot-password" component={ForgotPassword} />
    <Route exact path="/auth/reset-password/:token" component={ResetPassword} />
    <Route
      exact
      path="/checkout/cart"
      render={(props) => <Cart {...props} title="SHOPPING CART" />}
    />
    <Route exact path="/products/:productId" component={Product} />
    <Route exact path="/products/update/:productId" component={UpdateProduct} />
    <Route exact path="/user/:userId" component={UserProfile} />
    <Route exact path="/admin/addnewproduct" component={AddProduct} />
    <Route path="*" component={NoMatch} />
  </Switch>
)
export default Routes
