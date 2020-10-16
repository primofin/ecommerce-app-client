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
    // case ADD_PRODUCT: {
    //   const { product } = action.payload
    //   if (state.inCart.find((p) => p.id === product.id)) {
    //     return state
    //   }
    //   // Always return new state (e.g, new object) if changed
    //   return { ...state, inCart: [...state.inCart, product] }
    // }

    // case REMOVE_PRODUCT: {
    //   const { product } = action.payload
    //   const index = state.inCart.findIndex((p) => p.id === product.id)
    //   if (index >= 0) {
    //     state.inCart.splice(index, 1)
    //     return { ...state, inCart: [...state.inCart] }
    //   }
    //   return state
    // }
    default:
      return state
  }
}
