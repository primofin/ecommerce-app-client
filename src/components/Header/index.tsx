import React from 'react'
import { Link } from 'react-router-dom'

import './header.scss'

const Header = () => {
  return (
    <div className="header">
      <div className="header__title">
        <a href="http://localhost:3000/">AMOUR</a>
      </div>
      <div className="nav">
        <ul className="nav__list">
          <li className="nav__item">NEW IN</li>
          <li className="nav__item">WOMAN</li>
          <li className="nav__item">MEN</li>
          <li className="nav__item">ABOUT US</li>
        </ul>
      </div>
      <div className="tool">
        <button className="btn btn__search">
          <div className="btn__text">search</div>
        </button>
        <Link to="/auth" className="btn">
          <button className="btn btn__account">
            <div className="btn__text">account</div>
          </button>
        </Link>
        <Link to="/checkout/cart" className="btn">
          <button className="btn btn__cart">
            <div className="btn__text">cart</div>
            <span className="btn__cart__badge"></span>
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Header
