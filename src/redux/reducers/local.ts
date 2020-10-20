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
        const { itemsInCart } = action.payload
        if (itemsInCart) {
          return { ...state, itemsInCart: itemsInCart}
        }
        return state
      }
      default:
        return state
    }
  }
  

  