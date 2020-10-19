import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { AppState } from '../../types'
import shoppingCart from '../../icons/shopping-cart.svg'
import userProfile from '../../icons//user-profile.svg'
import './header.scss'

const Header = () => {
  const user = useSelector((state: AppState) => state.auth.user)
  const itemsInCartLocal = useSelector(
    (state: AppState) => state.local.itemsInCart
  )
  const isLoggedIn = useSelector((state: AppState) => state.auth.isLoggedIn)
  let itemsInCart = user?.itemsInCart
  const username = user?.google
    ? user.google.name
    : user?.username
    ? user.username
    : 'account'
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
          <div className="tool__link__text">
            {username}
          </div>
        </Link>
        <Link to="/checkout/cart" className="tool__link">
          <span className="tool__link__badge">
            {/* {isLoggedIn ? (itemsInCart ? itemsInCart.length : '0') : '0'} */}
            {isLoggedIn
              ? itemsInCart
                ? itemsInCart.length
                : '0'
              : itemsInCartLocal.length}
          </span>
          <img src={shoppingCart} className="tool__link__img" />
          <div className="tool__link__text">cart</div>
        </Link>
      </div>
    </div>
  )
}

export default Header
