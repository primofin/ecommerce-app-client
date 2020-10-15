import React from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons'

import Header from '../../components/Header/index'
import Footer from '../../components/Footer/index'
import { fetchProducts } from '../../redux/actions/product'
import { AppState } from '../../types'
import './product.scss'

type ProductParams = {
  productId: string
}
function Product() {
  const { productId } = useParams<ProductParams>()
  const history = useHistory()
  const dispatch = useDispatch()

  const products = useSelector((state: AppState) => state.product.items)
  if (products.length === 0) {
    dispatch(fetchProducts())
    return <p>Loading...</p>
  }
  const product = products.find((product) => product._id === productId)
  if (!product) {
    return <div>Product not found</div>
  }
  console.log('product',product)
  const handleGoBack = () => history.goBack()
  return (
    <div>
      <Header />
      <button className="back-btn" onClick={handleGoBack}>
        <FontAwesomeIcon
          icon={faLongArrowAltLeft}
          arial-label="back to mainpage"
        />
      </button>
        <section className="product__container">
          <div className="product__img__container">
            <img src={product.images[0]} alt={product.name} />
          </div>
          <div className="product__info__container">
            <h2>{product.name}</h2>
            <h3>Price:</h3>
            <p>{product.price}</p>
            <h3>Size:</h3>
            <p>{product.size}</p>
            <p>{product.description}</p>
            <button>Add to shopping bag</button>
            <div><span className="product__span">&#10003;</span>Free delivery to store</div>
          </div>
        </section>
      <Footer/>
    </div>
  )
}

export default Product
