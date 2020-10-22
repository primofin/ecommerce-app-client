import { Dispatch } from 'redux'

import {
  GET_ALL_PRODUCTS,
  FIND_PRODUCT_BY_CATEGORY_SUCCESS,
  CREATE_PRODUCT_SUCCESS,
  UPDATE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_SUCCESS,
  ProductActions,
  Product,
} from '../../types'
import {
  fetchAllProducts,
  findProductByCategory,
  createProduct,
  deleteProduct,
  updateProduct,
} from '../../api/product'

export function getAllProducts(products: Product[]): ProductActions {
  return {
    type: GET_ALL_PRODUCTS,
    payload: {
      products,
    },
  }
}

export function findProductByCategorySuccess(
  products: Product[]
): ProductActions {
  return {
    type: FIND_PRODUCT_BY_CATEGORY_SUCCESS,
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

export function updateProductSuccess(product: Product): ProductActions {
  return {
    type: UPDATE_PRODUCT_SUCCESS,
    payload: {
      product,
    },
  }
}

export function deleteProductSuccess(product: Product): ProductActions {
  return {
    type: DELETE_PRODUCT_SUCCESS,
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

export function fetchProductsByCategorySuccess(productCategory: string) {
  return async (dispatch: Dispatch) => {
    try {
      const response = await findProductByCategory(productCategory)
      // handle success
      dispatch(findProductByCategorySuccess(response.data))
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

export function adminUpdateProduct(
  productId: string,
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
      const response = await updateProduct(
        productId,
        name,
        price,
        images,
        description,
        category,
        variants,
        size
      )
      // handle success
      dispatch(updateProductSuccess(response.data))
    } catch (error) {
      // handle error
      console.log(error)
      return error
    }
  }
}

export function adminDeleteProduct(productId: string) {
  return async (dispatch: Dispatch) => {
    try {
      const response = await deleteProduct(productId)
      // handle success
      dispatch(deleteProductSuccess(response.data))
    } catch (error) {
      // handle error
      console.log(error)
      return error
    }
  }
}
