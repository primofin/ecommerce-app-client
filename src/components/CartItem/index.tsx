import React from 'react'

import { ItemInCart } from '../../types'
import trashIcon from '../../icons/icons8-trash.svg'
import './cartItem.scss'

type CartItemProps = {
  cartItem: ItemInCart
}
function CartItem(props: CartItemProps) {
  const { cartItem } = props
  console.log('cartItem', cartItem)
  if (!cartItem.product.images) {
    return <div>Loading...</div>
  }
  return (
    <div className="cart-item__wrapper">
      <img className="cart-item__img" src={cartItem.product.images[0]}></img>
      <a className="cart__item__name">{cartItem.product.name}</a>
      <div className="cart-item__quantity">{cartItem.quantity}</div>
      <img src={trashIcon} className="cart-item__icon" />
      <div className="cart-item__price">{cartItem.product.price}</div>
    </div>
  )
}

export default CartItem
