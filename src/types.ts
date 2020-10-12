// Action types
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
  description?: string
  category: string
  variants?: string[]
  sizes: string[] | number[]
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

export type ToggleDialogAction = {
  type: typeof TOGGLE_DIALOG
  payload: {
    dialog: DialogType
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

// Using dynamic keys from an enum
export type UiState = {
  dialogOpen: {
    [key in DialogType]?: boolean
  }
}

export type AppState = {
  product: ProductState
  ui: UiState
}
