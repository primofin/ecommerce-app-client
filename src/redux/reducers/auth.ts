import {
  AuthState,
  UserActions,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  AUTHENTICATE_SUCCESS,
  AUTHENTICATE_FAILURE,
  LOGOUT_SUCCESS,
  UPATE_PROFILE_SUCCESS,
  UPDATE_PASSWORD_SUCCESS,
  ADD_ITEM_TO_CART_SUCCESS,
  REMOVE_ITEM_FROM_CART_SUCCESS,
  GET_USER_WITH_ITEMS_POPULATE_SUCCESS,
} from '../../types'

export default function auth(
  state: AuthState = {
    isLoggedIn: false,
    user: null,
    error: null,
  },
  action: UserActions
): AuthState {
  switch (action.type) {
    case REGISTER_SUCCESS: {
      const { user } = action.payload
      return { ...state, isLoggedIn: true, user: user }
    }
    case LOGIN_SUCCESS: {
      const { user } = action.payload
      return { ...state, isLoggedIn: true, user: user }
    }
    case AUTHENTICATE_SUCCESS: {
      const { user } = action.payload
      return { ...state, isLoggedIn: true, user: user }
    }
    case AUTHENTICATE_FAILURE: {
      const { error } = action.payload
      return { ...state, isLoggedIn: false, error: error }
    }
    case LOGOUT_SUCCESS: {
      return { ...state, isLoggedIn: false, user: null, error: null }
    }
    case UPATE_PROFILE_SUCCESS: {
      const { user } = action.payload
      return { ...state, user: user }
    }
    case UPDATE_PASSWORD_SUCCESS: {
      return { ...state }
    }
    case ADD_ITEM_TO_CART_SUCCESS: {
      const { user } = action.payload
      if (user) {
        return { ...state, user: user }
      }
      return state
    }
    case REMOVE_ITEM_FROM_CART_SUCCESS: {
      const { user } = action.payload
      if (user) {
        return { ...state, user: user }
      }
      return state
    }
    case GET_USER_WITH_ITEMS_POPULATE_SUCCESS: {
      const { user } = action.payload
      if (user) {
        return { ...state, user: user }
      }
      return state
    }
    default:
      return state
  }
}
