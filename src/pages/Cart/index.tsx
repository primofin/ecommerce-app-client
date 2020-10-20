import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Header from '../../components/Header/index'
import EmptyCart from '../../components/EmptyCart/index'
import CartItem from '../../components/CartItem/index'
import { AppState, Product } from '../../types'
import './cart.scss'

function Cart() {
  const user = useSelector((state: AppState) => state.auth.user)
  const isLoggedIn = useSelector((state: AppState) => state.auth.isLoggedIn)
  const itemsInCartLocal = useSelector(
    (state: AppState) => state.local.itemsInCart
  )
  const itemsInCart = isLoggedIn
    ? user?.itemsInCart
      ? (user?.itemsInCart as Product[])
      : []
    : itemsInCartLocal
  // if (isLoggedIn && user?.itemsInCart) {
  //   const uniqueCartArr = Array.from(
  //     new Set(itemsInCart.map((item: Product) => item))
  //   )
  //   console.log('uniqueCartArr', uniqueCartArr)
  // }
  return (
    <div className="cart__wrapper">
      <Header />
      {itemsInCart.length === 0 && (
        <div className="cart__empty__wrapper">
          <EmptyCart />
        </div>
      )}
      {itemsInCart.length !== 0 && (
        <div className="cart__content__wrapper">
          <div className="cart__list">
            {itemsInCart.map((item: Product, index) => (
              <CartItem key={index} cartItem={item} />
            ))}
          </div>
          <div className="cart__checkout__wrapper"></div>
        </div>
      )}
    </div>
  )
}

export default Cart
