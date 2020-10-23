import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { ItemInCart, AppState } from '../../types'
import {
  getUserWithItemsPopulate,
  userRemoveItemFromCart,
  userAddItemToCart,
  userDecreaseItemQuantityFromCart,
} from '../../redux/actions/user'
import { getAllItemsFromLocalStorage } from '../../redux/actions/local'
import {
  deleteItemFromLocalStorage,
  saveItemToLocalStorage,
  decreaseItemQuantityFromLocalStorage,
} from '../../localStorage/index'
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
    if (user) dispatch(getUserWithItemsPopulate(user?._id))
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
  const handleIncreaseProductQuantityToCart = () => {
    if (isLoggedIn && user) {
      dispatch(userAddItemToCart(user?._id, cartItem.product._id))
    } else if (!isLoggedIn) {
      saveItemToLocalStorage(cartItem.product)
      dispatch(getAllItemsFromLocalStorage())
    }
  }
  const handleDecreaseProductQuantityToCart = () => {
    if (isLoggedIn && user) {
      dispatch(
        userDecreaseItemQuantityFromCart(user?._id, cartItem.product._id)
      )
    } else if (!isLoggedIn) {
      decreaseItemQuantityFromLocalStorage(cartItem.product._id)
      dispatch(getAllItemsFromLocalStorage())
    }
  }
  return (
    <div className="cart-item__wrapper">
      <img className="cart-item__img" src={cartItem.product.images[0]} alt="cart item"></img>
      <Link
        to={`/products/${cartItem.product._id}`}
        className="cart-item__name"
      >
        {cartItem.product.name}
      </Link>
      <div className="cart-item__quantity">Quantity: {cartItem.quantity}</div>
      <div className="cart-item__util">
        <button
          className="cart-item__util__add"
          aria-label="Increase the item quantity"
          onClick={handleIncreaseProductQuantityToCart}
        >
          +
        </button>
        <button
          className="cart-item__util__sub"
          aria-label="Decrease the item quantity"
          onClick={handleDecreaseProductQuantityToCart}
        >
          -
        </button>
      </div>
      <button
        aria-label="Delete the item"
        className="cart-item__delete-button"
        onClick={handleDeleteProductInCart}
      >
        <img src={trashIcon} alt="delete"/>
      </button>
      <div className="cart-item__price">{cartItem.product.price}</div>
    </div>
  )
}

export default CartItem
