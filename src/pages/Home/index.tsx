import React from 'react'

import Header from '../../components/Header/index'
import Footer from '../../components/Footer/index'
import ProductList from '../../components/ProductList/index'
import Carousel from '../../components/Carousel/index'
import './home.scss'

export default function Home() {
  return (
    <div className="home__wrapper">
      <Header />
      <div className="home__content">
        <Carousel/>
        <ProductList />
      </div>
      <Footer />
    </div>
  )
}
