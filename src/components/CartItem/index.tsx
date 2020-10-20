import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { ItemInCart, AppState } from '../../types'
import { userRemoveItemFromCart } from '../../redux/actions/user'
import { getAllItemsFromLocalStorage } from '../../redux/actions/local'
import { deleteItemFromLocalStorage } from '../../localStorage/index'
import trashIcon from '../../icons/icons8-trash.svg'
import './cartItem.scss'

type CartItemProps = {
  cartItem: ItemInCart
}
function CartItem(props: CartItemProps) {
  const { cartItem } = props
  const dispatch = useDispatch()
  const isLoggedIn = useSelector((state: AppState) => state.auth.isLoggedIn)
  const user = useSelector((state: AppState) => state.auth.user)
  if (!cartItem.product.images) {
    return <div>Loading...</div>
  }
  const handleDeleteProductInCart = () => {
    if (isLoggedIn && user) {
      dispatch(userRemoveItemFromCart(user?._id, cartItem.product._id))
    } else if (!isLoggedIn) {
      deleteItemFromLocalStorage(cartItem.product._id)
      dispatch(getAllItemsFromLocalStorage())
    }
  }
  return (
    <div className="cart-item__wrapper">
      <img className="cart-item__img" src={cartItem.product.images[0]}></img>
      <a className="cart__item__name">{cartItem.product.name}</a>
      <div className="cart-item__quantity">Quantity: {cartItem.quantity}</div>
      <button className="cart-item__button" onClick={handleDeleteProductInCart}>
        <img src={trashIcon} />
      </button>
      <div className="cart-item__price">{cartItem.product.price}</div>
    </div>
  )
}

export default CartItem
