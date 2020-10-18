import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Header from '../../components/Header/index'
import EmptyCart from '../../components/EmptyCart/index'
import { AppState } from '../../types'
import './cart.scss'

function Cart() {
  const user = useSelector((state: AppState) => state.auth.user)
  const isLoggedIn = useSelector((state: AppState) => state.auth.isLoggedIn)
  const itemsInCartLocal = useSelector(
    (state: AppState) => state.local.itemsInCart
  )
  const itemsInCart = isLoggedIn
    ? user?.itemsInCart
      ? user?.itemsInCart
      : []
    : itemsInCartLocal
  return (
    <div className="cart__wrapper">
      <Header />
      <div className="cart__content">
        {itemsInCart.length === 0 && <EmptyCart />}
      </div>
    </div>
  )
}

export default Cart
