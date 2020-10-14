import { Dispatch } from 'redux'

import {
  GET_ALL_PRODUCTS,
  ADD_PRODUCT,
  REMOVE_PRODUCT,
  ProductActions,
  Product,
} from '../../types'
import ProductApi from '../../api/productApi'

export function getAllProducts(products: Product[]): ProductActions {
  return {
    type: GET_ALL_PRODUCTS,
    payload: {
      products,
    },
  }
}

export function addProduct(product: Product): ProductActions {
  return {
    type: ADD_PRODUCT,
    payload: {
      product,
    },
  }
}

export function removeProduct(product: Product): ProductActions {
  return {
    type: REMOVE_PRODUCT,
    payload: {
      product,
    },
  }
}

// Async action processed by redux-thunk middleware
export function fetchProduct(productId: string) {
  return async (dispatch: Dispatch) => {
    const resp = await fetch(`products/${productId}`)
    const product = await resp.json()
    dispatch(addProduct(product))
  }
}

// Async action processed by redux-thunk middleware
export function fetchProducts() {
  return async (dispatch: Dispatch) => {
    try {
      const response = await ProductApi.getAllProducts()
      // handle success
      dispatch(getAllProducts(response.data))
    } catch (error) {
      // handle error
      console.log(error)
      return error
    }
  }
}
