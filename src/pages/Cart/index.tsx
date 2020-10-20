import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Header from '../../components/Header/index'
import EmptyCart from '../../components/EmptyCart/index'
import CartItem from '../../components/CartItem/index'
import { AppState, ItemInCart } from '../../types'
import './cart.scss'

function Cart() {
  const user = useSelector((state: AppState) => state.auth.user)
  const isLoggedIn = useSelector((state: AppState) => state.auth.isLoggedIn)
  const itemsInCartLocal = useSelector(
    (state: AppState) => state.local.itemsInCart
  )
  // local storage
  let numberOfItemsInCartLocal = 0
  if (itemsInCartLocal) {
    itemsInCartLocal.forEach(
      (item) => (numberOfItemsInCartLocal += item.quantity)
    )
  }
  // database
  let numberOfItemsInCart = 0
  if (user?.itemsInCart) {
    user?.itemsInCart?.forEach((item) => (numberOfItemsInCart += item.quantity))
  }
  // check if user logged in
  // if yes get data from database, if no get from localstorage
  const itemsInCart = isLoggedIn
    ? user?.itemsInCart
      ? user?.itemsInCart
      : []
    : itemsInCartLocal
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
            {itemsInCart.map((item: ItemInCart, index) => (
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
