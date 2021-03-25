import React from 'react'
import { Helmet } from 'react-helmet'

import Header from '../../components/Header/index'
import Footer from '../../components/Footer/index'
import ProductList from '../../components/ProductList/index'
import Carousel from '../../components/Carousel/index'
import './home.scss'

type HomeProps = {
  title: string
}
export default function Home(props: HomeProps) {
  const { title } = props

  return (
    <>
      <Helmet>
        <title>{title ? title : 'AMOUR'}</title>
      </Helmet>
      <div className="home__wrapper">
        <Header />
        <div className="home__content">
          <Carousel />
          <ProductList />
        </div>
        <Footer />
      </div>
    </>
  )
}
