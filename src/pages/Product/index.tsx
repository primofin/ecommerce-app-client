import React from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons'

import Header from '../../components/Header/index'
import Footer from '../../components/Footer/index'
import { fetchProducts, adminDeleteProduct } from '../../redux/actions/product'
import {
  userAddItemToCart,
  userRemoveItemFromCart,
} from '../../redux/actions/user'
import { getAllItemsFromLocalStorage } from '../../redux/actions/local'
import {
  removeItemFromLocalStorage,
  saveItemToLocalStorage,
} from '../../localStorage/index'
import { AppState, Product as ProductType } from '../../types'
import './product.scss'

type ProductParams = {
  productId: string
}
function Product() {
  const { productId } = useParams<ProductParams>()
  const history = useHistory()
  const dispatch = useDispatch()
  const isLoggedIn = useSelector((state: AppState) => state.auth.isLoggedIn)
  const user = useSelector((state: AppState) => state.auth.user)
  const isAdmin = user?.isAdmin
  const products = useSelector((state: AppState) => state.product.items)
  const itemsInCartLocal = useSelector(
    (state: AppState) => state.local.itemsInCart
  )

  const isItemAdded = (item: ProductType) => {
    // if user doesnt login yet, check item in Local storage
    if (!isLoggedIn) {
      if (
        itemsInCartLocal.find(
          (cartItem: ProductType) => cartItem._id === item._id
        )
      ) {
        return true
      }
      return false
    } else {
      if (user?.itemsInCart) {
        return user?.itemsInCart.includes(item._id)
      }
    }
  }
  if (products.length === 0) {
    dispatch(fetchProducts())
    return <p>Loading...</p>
  }
  const product = products.find((product) => product._id === productId)
  if (!product) {
    return <div>Product not found</div>
  }
  /**
   * Add product to cart
   */
  const addProductToCart = () => {
    // if user doesnt login yet, save item to localStorage
    if (product && !isLoggedIn) {
      saveItemToLocalStorage(product)
      dispatch(getAllItemsFromLocalStorage())
    }
    if (user) {
      if (product && isLoggedIn) {
        dispatch(userAddItemToCart(user?._id, productId))
      }
    }
  }
  const handleGoBack = () => history.goBack()
  const handleDeleteProduct = () => {
    if (user && isAdmin) {
      removeItemFromLocalStorage(productId)
      dispatch(userRemoveItemFromCart(user?._id, productId))
      dispatch(adminDeleteProduct(productId))
      history.push('/')
    }
  }
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
          <button
            disabled={isItemAdded(product)}
            onClick={addProductToCart}
            className={`product__add-btn  product__add-btn--disable-${isItemAdded(
              product
            )}`}
          >
            Add to shopping bag
          </button>
          <div>
            <span className="product__span">&#10003;</span>Free delivery to
            store
          </div>
          {isAdmin && (
            <div className="product__settings">
              <button className="product__settings__update">
                Update the product info
              </button>
              <button
                className="product__settings__delete"
                onClick={handleDeleteProduct}
              >
                Delete this product
              </button>
            </div>
          )}
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Product
