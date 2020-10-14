// Action types
/**
 * User authentication actions
 */
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
export const REGISTER_FAIL = 'REGISTER_FAIL'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAIL = 'LOGIN_FAIL'
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

// A user
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

// A product
export type Product = {
  _id: string
  name: string
  price: number
  images: string[]
  description?: string
  category: string
  variants?: string[]
  sizes: string[] | number[]
  orderBy?: User
}

/**
 *  PRODUCT ACTION TYPES
 */
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

export type ToggleDialogAction = {
  type: typeof TOGGLE_DIALOG
  payload: {
    dialog: DialogType
  }
}
/**
 *  USER ACTION TYPES
 */
export type RegisterSuccess = {
  type: typeof REGISTER_SUCCESS
  payload: {
    products: Product[]
  }
}
export type UiActions = ToggleDialogAction

// Use this union in reducer
export type ProductActions =
  | GetAllProductAction
  | AddProductAction
  | RemoveProductAction

export type ProductState = {
  items: Product[]
  inCart: Product[]
}

export type UserState = {
  isLoggedIn: boolean
  user: User | null
}
// Using dynamic keys from an enum
export type UiState = {
  dialogOpen: {
    [key in DialogType]?: boolean
  }
}

export type AppState = {
  user: UserState
  product: ProductState
  ui: UiState
}
