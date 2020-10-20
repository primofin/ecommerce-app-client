import React from 'react'

import { ItemInCart } from '../../types'
import trashIcon from '../../icons/icons8-trash.svg'
import './cartItem.scss'

type CartItemProps = {
  cartItem: ItemInCart
}
function CartItem(props: CartItemProps) {
  const { cartItem } = props;
  console.log('cartItem',cartItem)
  return (
    <div className="cart-item__wrapper">
      <img className="cart-item__img"></img>
      <a className="cart__item__name">name</a>
      <div className="cart-item__quantity">quantity</div>
      <img src={trashIcon} className="cart-item__icon" />
      <div className="cart-item__price">price</div>
    </div>
  )
}

export default CartItem
