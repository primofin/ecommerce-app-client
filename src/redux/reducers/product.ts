import {
  ProductState,
  ProductActions,
  GET_ALL_PRODUCTS,
  ADD_PRODUCT,
  REMOVE_PRODUCT,
} from '../../types'

export default function product(
  state: ProductState = {
    items: [],
    inCart: [],
  },
  action: ProductActions
): ProductState {
  switch (action.type) {
    case GET_ALL_PRODUCTS: {
      const { products } = action.payload

      return { ...state, items: products, inCart: [] }
    }
    // case ADD_PRODUCT: {
    //   const { product } = action.payload
    //   if (state.inCart.find((p) => p.id === product.id)) {
    //     return state
    //   }
    //   // Always return new state (e.g, new object) if changed
    //   return { ...state, inCart: [...state.inCart, product] }
    // }

    // case REMOVE_PRODUCT: {
    //   const { product } = action.payload
    //   const index = state.inCart.findIndex((p) => p.id === product.id)
    //   if (index >= 0) {
    //     state.inCart.splice(index, 1)
    //     return { ...state, inCart: [...state.inCart] }
    //   }
    //   return state
    // }

    default:
      return state
  }
}
