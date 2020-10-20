import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Header from '../../components/Header/index'
import EmptyCart from '../../components/EmptyCart/index'
import CartItem from '../../components/CartItem/index'
import CheckoutSidebar from '../../components/CheckoutSidebar/index'
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
  let totalPriceOfAllItemsInCartLocal = 0
  if (itemsInCartLocal) {
    itemsInCartLocal.forEach((item) => {
      numberOfItemsInCartLocal += item.quantity
      totalPriceOfAllItemsInCartLocal += item.product.price * item.quantity
    })
  }

  // database
  let numberOfItemsInCart = 0
  let totalPriceOfAllItemsInCart = 0
  if (user?.itemsInCart) {
    user?.itemsInCart?.forEach((item) => {
      numberOfItemsInCart += item.quantity
      totalPriceOfAllItemsInCart += item.product.price * item.quantity
    })
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
            <h1>
              Cart <small>{itemsInCart.length} QTY</small>
            </h1>
            <p>
              ! Do not delay with the purchase, adding items to the cart does
              not mean their reservation.
            </p>
            {itemsInCart.map((item: ItemInCart, index) => (
              <CartItem key={index} cartItem={item} />
            ))}
          </div>
          <div className="cart__checkout-wrapper">
            <CheckoutSidebar
              totalPrice={
                isLoggedIn
                  ? totalPriceOfAllItemsInCart
                  : totalPriceOfAllItemsInCartLocal
              }
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default Cart
