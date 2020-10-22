import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import ProductCard from '../ProductCard/index'
import {
  fetchProducts,
  fetchProductsByCategorySuccess,
} from '../../redux/actions/product'
import { AppState } from '../../types'
import './productList.scss'

const ProductList = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const products = useSelector((state: AppState) => state.product.items)
  useEffect(() => {
    if (history.location.pathname === '/') {
      dispatch(fetchProducts())
    }
    if (history.location.pathname === '/women') {
      dispatch(fetchProductsByCategorySuccess('women'))
    }
    if (history.location.pathname === '/men') {
      dispatch(fetchProductsByCategorySuccess('men'))
    }
    if (history.location.pathname === '/kids') {
      dispatch(fetchProductsByCategorySuccess('kids'))
    }
  }, [])
  return (
    <>
      <div className="product__list">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </>
  )
}

export default ProductList
