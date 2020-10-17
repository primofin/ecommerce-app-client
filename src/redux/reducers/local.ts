import {
    LocalState,
    LocalActions,
    GET_ALL_ITEMS_FROM_CART_LOCAL,
    // ADD_ITEM_TO_CART_LOCAL,
    // REMOVE_ITEM_FROM_CART_LOCAL,
  } from '../../types'
  
  export default function local(
    state: LocalState = {
      itemsInCart: []
    },
    action: LocalActions
  ): LocalState {
    switch (action.type) {
      case GET_ALL_ITEMS_FROM_CART_LOCAL: {
        const { products } = action.payload
        if (products) {
          return { ...state, itemsInCart: products}
        }
        return state
      }
      // case ADD_ITEM_TO_CART_LOCAL: {
      //   const { product } = action.payload
      //   if (state.itemsInCart.find((p) => p._id === product._id)) {
      //     return state
      //   }
      //   // Always return new state (e.g, new object) if changed
      //   return { ...state, itemsInCart: [...state.itemsInCart, product] }
      // }
      // case REMOVE_ITEM_FROM_CART_LOCAL: {
      //   const { product } = action.payload
      //   const index = state.itemsInCart.findIndex((p) => p._id === product._id)
      //   if (index >= 0) {
      //     state.itemsInCart.splice(index, 1)
      //     return { ...state, itemsInCart: [...state.itemsInCart] }
      //   }
      //   return state
      // }
      default:
        return state
    }
  }
  

  