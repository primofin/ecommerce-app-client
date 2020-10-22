import {
  ProductState,
  ProductActions,
  GET_ALL_PRODUCTS,
  FIND_PRODUCT_BY_CATEGORY_SUCCESS,
  CREATE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_SUCCESS,
  UPDATE_PRODUCT_SUCCESS,
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
    case FIND_PRODUCT_BY_CATEGORY_SUCCESS: {
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
    case UPDATE_PRODUCT_SUCCESS: {
      const { product } = action.payload
      const copyItems = [...state.items]
      const filterItems = copyItems.filter((p) => p._id !== product._id)
      if (product) {
        return { ...state, items: [...filterItems, product] }
      }
      return state
    }
    case DELETE_PRODUCT_SUCCESS: {
      const { product } = action.payload
      const index = state.items.findIndex((p) => p._id === product._id)
      if (index >= 0) {
        state.items.splice(index, 1)
        return { ...state, items: [...state.items] }
      }
      return state
    }
    default:
      return state
  }
}
