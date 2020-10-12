import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import ProductCard from '../ProductCard/index'
import { fetchProducts } from '../../redux/actions/product'
import { AppState } from '../../types'
import './productList.scss'

const ProductList = () => {
  const dispatch = useDispatch()
  const products = useSelector((state: AppState) => state.product.items)
  if (products.length === 0) {
    dispatch(fetchProducts())
    return <p>Loading...</p>
  }
  console.log('product list', products)
  return <div></div>
}

export default ProductList
