import { Dispatch } from 'redux'

import {
  ADD_ITEM_TO_CART_LOCAL,
  REMOVE_ITEM_FROM_CART_LOCAL,
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

// export function addItemToCartLocal(product: Product): LocalActions {
//   return {
//     type: ADD_ITEM_TO_CART_LOCAL,
//     payload: {
//       product,
//     },
//   }
// }
// export function removeItemFromCartLocal(product: Product): LocalActions {
//   return {
//     type: REMOVE_ITEM_FROM_CART_LOCAL,
//     payload: {
//       product,
//     },
//   }
// }

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

