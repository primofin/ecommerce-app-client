import { Dispatch } from 'redux'

import {
  GET_ALL_ITEMS_FROM_CART_LOCAL,
  LocalActions,
  Product,
} from '../../types'

export function getAllItemsFromCartLocal(products: Product[]): LocalActions {
  return {
    type: GET_ALL_ITEMS_FROM_CART_LOCAL,
    payload: {
      products,
    },
  }
}

// Async action processed by redux-thunk middleware
export function getAllItemsFromLocalStorage() {
  return async (dispatch: Dispatch) => {
    try {
      let allItemsInCart: Product[] = []
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

