import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { Product, AppState } from '../../types'
import Header from '../../components/Header/index'
import Footer from '../../components/Footer/index'
import ProductList from '../../components/ProductList/index'
import './home.scss'

export default function Home() {
  // const dispatch = useDispatch()

  return (
    <div className="home__wrapper">
      <Header />
      <div className="home__content">
        <ProductList />
      </div>
      <Footer />
    </div>
  )
}
