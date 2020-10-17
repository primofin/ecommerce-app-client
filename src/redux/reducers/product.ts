import {
  ProductState,
  ProductActions,
  GET_ALL_PRODUCTS,
  CREATE_PRODUCT_SUCCESS,
} from '../../types'

export default function product(
  state: ProductState = {
    items: [],
  },
  action: ProductActions
): ProductState {
  switch (action.type) {
    case GET_ALL_PRODUCTS: {
      const { products } = action.payload
      if (products) {
        return { ...state, items: products }
      }
      return state
    }
    case CREATE_PRODUCT_SUCCESS: {
      const { product } = action.payload
      if (product) {
        return { ...state, items: [...state.items, product] }
      }
      return state
    }
    default:
      return state
  }
}
