import { Dispatch } from 'redux'

import {
  GET_ALL_ITEMS_FROM_CART_LOCAL,
  LocalActions,
  ItemInCart
} from '../../types'

export function getAllItemsFromCartLocal(itemsInCart: ItemInCart[]): LocalActions {
  return {
    type: GET_ALL_ITEMS_FROM_CART_LOCAL,
    payload: {
      itemsInCart,
    },
  }
}

// Async action processed by redux-thunk middleware
export function getAllItemsFromLocalStorage() {
  return async (dispatch: Dispatch) => {
    try {
      let allItemsInCart: ItemInCart[] = []
      const serializedItems = localStorage.getItem('itemsInCartLocal')
      if (serializedItems) {
        allItemsInCart = JSON.parse(serializedItems)
      }
      dispatch(getAllItemsFromCartLocal(allItemsInCart))
    } catch (error) {
      // handle error
      console.log(error)
      return error
    }
  }
}

