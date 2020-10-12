import React from 'react'

import Header from '../../components/Header/index'
import EmptyCart from '../../components/EmptyCart/index'
import './cart.scss'

function Cart() {
  return (
    <div className="cart__wrapper">
      <Header />
      <div className="cart__content">
        <EmptyCart />
      </div>
    </div>
  )
}

export default Cart
