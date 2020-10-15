import { Dispatch } from 'redux'

import {
  REGISTER_SUCCESSED,
  REGISTER_FAILED,
  LOGIN_SUCCESSED,
  LOGIN_FAILED,
  User,
  UserActions,
  AUTHENTICATED_SUCCESSED,
} from '../../types'
import { register, login, isAuthenticated } from '../../api/auth'

export function registerSuccessed(user: User): UserActions {
  return {
    type: REGISTER_SUCCESSED,
    payload: {
      user,
    },
  }
}

export function loginSuccessed(user: User): UserActions {
  return {
    type: LOGIN_SUCCESSED,
    payload: {
      user,
    },
  }
}

export function authenticatedSuccessed(user: User): UserActions {
  return {
    type: AUTHENTICATED_SUCCESSED,
    payload: {
      user,
    }
  }
}

// Async action processed by redux-thunk middleware
export function userRegister(
  username: string,
  email: string,
  password: string,
  firstName?: string,
  lastName?: string
) {
  return async (dispatch: Dispatch) => {
    try {
      const response = await register(
        username,
        email,
        password,
        firstName,
        lastName
      )
      // handle success
      dispatch(registerSuccessed(response.data))
    } catch (error) {
      // handle error
      console.log(error)
      return error
    }
  }
}

export function userLogin(username: string, password: string) {
  return async (dispatch: Dispatch) => {
    try {
      const response = await login(username, password)
      // handle success
      dispatch(loginSuccessed(response.data))
    } catch (error) {
      // handle error
      console.log(error)
      return error
    }
  }
}
export function userAuthenticate() {
  return async (dispatch: Dispatch) => {
    try {
      const response = await isAuthenticated()
      // handle success
      dispatch(authenticatedSuccessed(response.data))
    } catch (error) {
      // handle error
      console.log(error)
      return error
    }
  }
}