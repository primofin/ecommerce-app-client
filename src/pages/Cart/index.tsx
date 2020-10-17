import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Header from '../../components/Header/index'
import EmptyCart from '../../components/EmptyCart/index'
import { AppState } from '../../types'
import './cart.scss'

function Cart() {
  const user = useSelector((state: AppState) => state.auth.user)
  const itemsInCart = user?.itemsInCart
  return (
    <div className="cart__wrapper">
      <Header />
      <div className="cart__content">{<EmptyCart />}</div>
    </div>
  )
}

export default Cart
