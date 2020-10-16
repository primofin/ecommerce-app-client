import { Dispatch } from 'redux'

import {
  User,
  UserActions,
  UPATE_PROFILE_SUCCESS,
  UPDATE_PASSWORD_SUCCESS,
} from '../../types'
import { updateProfile, updatePassword } from '../../api/user'

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
