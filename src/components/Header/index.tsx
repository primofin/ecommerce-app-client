import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { AppState } from '../../types'
import { getUserWithItemsPopulate } from '../../redux/actions/user'
import shoppingCart from '../../icons/shopping-cart.svg'
import userProfile from '../../icons//user-profile.svg'
import './header.scss'

const Header = () => {
  const dispatch = useDispatch()
  const user = useSelector((state: AppState) => state.auth.user)
  const itemsInCartLocal = useSelector(
    (state: AppState) => state.local.itemsInCart
  )

  let numberOfItemsInCartLocal = 0
  if (itemsInCartLocal) {
    itemsInCartLocal.forEach(
      (item) => (numberOfItemsInCartLocal += item.quantity)
    )
  }
  const isLoggedIn = useSelector((state: AppState) => state.auth.isLoggedIn)
  let itemsInCart = user?.itemsInCart
  let numberOfItemsInCart = 0
  if (user?.itemsInCart) {
    user?.itemsInCart?.forEach((item) => (numberOfItemsInCart += item.quantity))
  }
  const username = user?.google
    ? user.google.name
    : user?.username
    ? user.username
    : 'account'

  // if user logged in, populate items in cart of that user
  const handleCartClick = () => {
    if (user) {
      dispatch(getUserWithItemsPopulate(user._id))
    }
  }
  return (
    <div className="header">
      <div className="header__title">
        <Link to="/">AMOUR</Link>
      </div>
      <div className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <Link to="#">NEW IN</Link>
          </li>
          <li className="nav__item">
            <Link to="#">WOMAN</Link>
          </li>
          <li className="nav__item">
            <Link to="#">MEN</Link>
          </li>
          <li className="nav__item">
            <Link to="#">KIDS</Link>
          </li>
          <li className="nav__item">
            <Link to="#">ABOUT US</Link>
          </li>
        </ul>
      </div>
      <div className="tool">
        <div className="tool__search-container">
          <input type="text" placeholder="Search.." name="search" />
          <button>
            <div className="tool__search-container__text">search</div>
          </button>
        </div>
        <Link
          to={isLoggedIn ? `/user/${user?._id}` : '/auth'}
          className="tool__link"
        >
          <img
            src={userProfile}
            className="tool__link__img tool__link__img--user"
          />
          <div className="tool__link__text">{username}</div>
        </Link>
        <Link
          to="/checkout/cart"
          className="tool__link"
          onClick={handleCartClick}
        >
          <span className="tool__link__badge">
            {isLoggedIn
              ? itemsInCart
                ? numberOfItemsInCart
                : '0'
              : numberOfItemsInCartLocal}
          </span>
          <img src={shoppingCart} className="tool__link__img" />
          <div className="tool__link__text">cart</div>
        </Link>
      </div>
    </div>
  )
}

export default Header
