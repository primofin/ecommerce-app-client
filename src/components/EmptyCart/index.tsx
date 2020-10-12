import React from 'react'
import { Link } from 'react-router-dom'

import './emptyCart.scss'

function EmptyCart() {
  return (
    <section className="empty-cart">
      <h1 className="empty-cart__header">Your cart is empty</h1>
      <p>
        If you have added products to your cart during previous visit, try
        logging into your account.
      </p>
      <p className="empty-cart__break"> OR CONTINUE SHOPPING</p>
      <div className="empty-cart__redirect">
        <Link to="#" className="empty-cart__redirect__item">
          women
        </Link>
        <Link to="#" className="empty-cart__redirect__item">
          men
        </Link>
        <Link to="#" className="empty-cart__redirect__item">
          kid
        </Link>
      </div>
    </section>
  )
}

export default EmptyCart
