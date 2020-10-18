import {
    LocalState,
    LocalActions,
    GET_ALL_ITEMS_FROM_CART_LOCAL,
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
      default:
        return state
    }
  }
  

  