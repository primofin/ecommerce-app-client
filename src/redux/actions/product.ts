import { Dispatch } from 'redux'

import {
  GET_ALL_PRODUCTS,
  CREATE_PRODUCT_SUCCESS,
  UPDATE_PRODUCT_SUCCESS,
  ProductActions,
  Product,
} from '../../types'
import { fetchAllProducts, createProduct } from '../../api/product'

export function getAllProducts(products: Product[]): ProductActions {
  return {
    type: GET_ALL_PRODUCTS,
    payload: {
      products,
    },
  }
}

export function createProductSuccess(product: Product): ProductActions {
  return {
    type: CREATE_PRODUCT_SUCCESS,
    payload: {
      product,
    },
  }
}

// Async action processed by redux-thunk middleware
export function fetchProducts() {
  return async (dispatch: Dispatch) => {
    try {
      const response = await fetchAllProducts()
      // handle success
      dispatch(getAllProducts(response.data))
    } catch (error) {
      // handle error
      console.log(error)
      return error
    }
  }
}

export function adminCreateProduct(
  name: string,
  price: number,
  images: string[],
  description: string,
  category: string,
  variants: string[],
  size: string | number
) {
  return async (dispatch: Dispatch) => {
    try {
      const response = await createProduct(
        name,
        price,
        images,
        description,
        category,
        variants,
        size
      )
      // handle success
      dispatch(createProductSuccess(response.data))
    } catch (error) {
      // handle error
      console.log(error)
      return error
    }
  }
}
