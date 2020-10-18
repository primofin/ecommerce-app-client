import React from 'react'
import { useParams, useHistory} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons'

import Header from '../../components/Header/index'
import Footer from '../../components/Footer/index'
import UpdateProductForm from '../../components/UpdateProductForm/index'
import { fetchProducts} from '../../redux/actions/product'
import { AppState} from '../../types'
import './updateProduct.scss'

type ProductParams = {
  productId: string
}
function UpdateProduct() {
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
        <UpdateProductForm />
      </section>
      <Footer />
    </div>
  )
}

export default UpdateProduct
