import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './pages/Home/index'
// import Product from './pages/Product'
import Auth from './pages/Auth/index'
import Cart from './pages/Cart/index'
import Product from './pages/Product/index'

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/auth" component={Auth} />
    <Route exact path="/checkout/cart" component={Cart} />
    <Route exact path="/products/:id" component={Product} />
  </Switch>
)

export default Routes
