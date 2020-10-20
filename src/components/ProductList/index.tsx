import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'

import ProductCard from '../ProductCard/index'
import { fetchProducts } from '../../redux/actions/product'
import { AppState } from '../../types'
import './productList.scss'

const ProductList = () => {
  const dispatch = useDispatch()
  const products = useSelector((state: AppState) => state.product.items)
  // if (products.length === 0) {
  //   dispatch(fetchProducts())
  //   return <p>Loading...</p>
  // }
  useEffect(()=>{
    dispatch(fetchProducts())
  },[])
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
