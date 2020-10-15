import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { AppState } from '../../types'
import shoppingCart from '../../icons/shopping-cart.svg'
import userProfile from '../../icons//user-profile.svg'
import './header.scss'

const Header = () => {
  const user = useSelector((state: AppState) => state.auth.user)
  const isLoggedIn = useSelector((state: AppState) => state.auth.isLoggedIn)
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
        <Link to="/auth" className="tool__link">
          <img src={userProfile} className="tool__link__img tool__link__img--user" />
          <div className="tool__link__text">
            {user?.username ? user.username : 'account'}
          </div>
        </Link>
        <Link to="/checkout/cart" className="tool__link">
          <span className="tool__link__badge">0</span>
          <img src={shoppingCart} className="tool__link__img" />
          <div className="tool__link__text">cart</div>
        </Link>
      </div>
    </div>
  )
}

export default Header
