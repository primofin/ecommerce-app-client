// Action types
/**
 * User authentication actions
 */
export const REGISTER_SUCCESSED = 'REGISTER_SUCCESS'
export const REGISTER_FAILED = 'REGISTER_FAIL'
export const LOGIN_SUCCESSED = 'LOGIN_SUCCESS'
export const LOGIN_FAILED = 'LOGIN_FAIL'
/**
 * Product actions
 */
export const GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS'
export const ADD_PRODUCT = 'ADD_PRODUCT'
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT'
export const TOGGLE_DIALOG = 'TOGGLE_DIALOG'

// Enum
export enum DialogType {
  SignIn = 'signIn',
  SignUp = 'signUp',
}

export type Google = {
  id: string
  token: string
  name: string
}

/**
 *  --------------PRODUCT --------------
 */

export type Product = {
  _id: string
  name: string
  price: number
  images: string[]
  description?: string
  category: string
  variants?: string[]
  // sizes: string[] | number[]
  size: string | number
  orderBy?: User
}
export type GetAllProductAction = {
  type: typeof GET_ALL_PRODUCTS
  payload: {
    products: Product[]
  }
}

export type AddProductAction = {
  type: typeof ADD_PRODUCT
  payload: {
    product: Product
  }
}

export type RemoveProductAction = {
  type: typeof REMOVE_PRODUCT
  payload: {
    product: Product
  }
}

// Use this union in reducer
export type ProductActions =
  | GetAllProductAction
  | AddProductAction
  | RemoveProductAction

export type ProductState = {
  items: Product[]
  inCart: Product[]
}

export type ToggleDialogAction = {
  type: typeof TOGGLE_DIALOG
  payload: {
    dialog: DialogType
  }
}
/**
 *  -------------USER--------------------
 */
export type User = {
  _id: string
  username: string
  firstName?: string
  lastName?: string
  email: string
  password: string
  avatar?: string
  google?: Google
  isAdmin?: boolean
  isBan?: boolean
  itemsInCart?: Product[]
}
export type AuthState = {
  isLoggedIn: boolean
  user: User | null
  error: string | null
}
export type RegisterSuccessed = {
  type: typeof REGISTER_SUCCESSED
  payload: {
    user: User
  }
}
export type RegisterFailed = {
  type: typeof REGISTER_FAILED
  payload: {
    error: string
  }
}
export type LoginSuccessed = {
  type: typeof LOGIN_SUCCESSED
  payload: {
    user: User
  }
}
export type LoginFailed = {
  type: typeof LOGIN_FAILED
  payload: {
    error: string
  }
}
// Use this union in reducer
export type UserActions =
  | RegisterSuccessed
  | RegisterFailed
  | LoginSuccessed
  | LoginFailed

/**
 * -----------------UI----------------
 */
export type UiActions = ToggleDialogAction

// Using dynamic keys from an enum
export type UiState = {
  dialogOpen: {
    [key in DialogType]?: boolean
  }
}

export type AppState = {
  auth: AuthState
  product: ProductState
  ui: UiState
}
