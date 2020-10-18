import { Dispatch } from 'redux'

import {
  User,
  UserActions,
  UPATE_PROFILE_SUCCESS,
  UPDATE_PASSWORD_SUCCESS,
  ADD_ITEM_TO_CART_SUCCESS,
  REMOVE_ITEM_FROM_CART_SUCCESS,
} from '../../types'
import {
  updateProfile,
  updatePassword,
  addItemToCart,
  removeItemFromCart,
} from '../../api/user'

export function updateProfileSuccess(user: User): UserActions {
  return {
    type: UPATE_PROFILE_SUCCESS,
    payload: {
      user,
    },
  }
}

export function updatePasswordSuccess(): UserActions {
  return {
    type: UPDATE_PASSWORD_SUCCESS,
  }
}

export function addItemtoCartSuccess(user: User): UserActions {
  return {
    type: ADD_ITEM_TO_CART_SUCCESS,
    payload: {
      user,
    },
  }
}
export function removeItemFromCartSuccess(user: User): UserActions {
  return {
    type: REMOVE_ITEM_FROM_CART_SUCCESS,
    payload: {
      user,
    },
  }
}
// Async action processed by redux-thunk middleware
export function updateUserProfile(
  userId: string,
  email: string,
  firstName?: string,
  lastName?: string
) {
  return async (dispatch: Dispatch) => {
    try {
      const response = await updateProfile(userId, email, firstName, lastName)
      // handle success
      dispatch(updateProfileSuccess(response.data))
    } catch (error) {
      // handle error
      console.log(error)
      return error
    }
  }
}
export function updateUserPassword(
  userId: string,
  oldPassword: string,
  newPassword: string
) {
  return async (dispatch: Dispatch) => {
    try {
      await updatePassword(userId, oldPassword, newPassword)
      dispatch(updatePasswordSuccess())
    } catch (error) {
      // handle error
      console.log(error)
      return error
    }
  }
}
export function userAddItemToCart(userId: string, productId: string) {
  return async (dispatch: Dispatch) => {
    try {
      const response = await addItemToCart(userId, productId)
      dispatch(addItemtoCartSuccess(response.data))
    } catch (error) {
      // handle error
      console.log(error)
      return error
    }
  }
}
export function userRemoveItemFromCart(userId: string, productId: string) {
  return async (dispatch: Dispatch) => {
    try {
      const response = await removeItemFromCart(userId, productId)
      dispatch(removeItemFromCartSuccess(response.data))
    } catch (error) {
      // handle error
      console.log(error)
      return error
    }
  }
}
