// Action types
/**
 * User authentication actions
 */
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
export const REGISTER_FAILURE = 'REGISTER_FAIL'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'
export const AUTHENTICATE_SUCCESS = 'AUTHENTICATE_SUCCESS'
export const AUTHENTICATE_FAILURE = 'AUTHENTICATE_FAILURE'
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'
export const UPATE_PROFILE_SUCCESS = 'UPATE_PROFILE_SUCCESS'
export const UPDATE_PASSWORD_SUCCESS = 'UPDATE_PASSWORD_SUCCESS'
export const ADD_ITEM_TO_CART_SUCCESS = 'ADD_ITEM_TO_CART_SUCCESS'
export const REMOVE_ITEM_FROM_CART_SUCCESS = 'REMOVE_ITEM_FROM_CART_SUCCESS'
export const DECREASE_ITEM_QUANTITY_FROM_CART_SUCCESS =
  'DECREASE_ITEM_QUANTITY_FROM_CART_SUCCESS'
export const GET_USER_WITH_ITEMS_POPULATE_SUCCESS =
  'GET_USER_WITH_ITEM_POPULATE_SUCCESS'
export const REQUEST_FORGOT_PASSWORD_SUCCESS = 'REQUEST_FORGOT_PASSWORD_SUCCESS'
export const RESET_PASSWORD_SUCCESS = 'RESET_PASSWORD_SUCCESS'
/**
 * Product actions
 */
export const GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS'
export const CREATE_PRODUCT_SUCCESS = 'CREATE_PRODUCT_SUCCESS'
export const UPDATE_PRODUCT_SUCCESS = 'UPDATE_PRODUCT_SUCCESS'
export const DELETE_PRODUCT_SUCCESS = 'DELETE_PRODUCT_SUCCESS'
export const TOGGLE_DIALOG = 'TOGGLE_DIALOG'
/**
 * Local actions
 */
export const GET_ALL_ITEMS_FROM_CART_LOCAL = 'GET_ALL_ITEMS_FROM_CART_LOCAL'

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
export type ItemInCart = {
  product: Product
  quantity: number
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

export type CreateProductSuccessAction = {
  type: typeof CREATE_PRODUCT_SUCCESS
  payload: {
    product: Product
  }
}
export type UpdateProductSuccessAction = {
  type: typeof UPDATE_PRODUCT_SUCCESS
  payload: {
    product: Product
  }
}
export type DeleteProductSuccessAction = {
  type: typeof DELETE_PRODUCT_SUCCESS
  payload: {
    product: Product
  }
}

// Use this union in reducer
export type ProductActions =
  | GetAllProductAction
  | CreateProductSuccessAction
  | UpdateProductSuccessAction
  | DeleteProductSuccessAction

export type ProductState = {
  items: Product[]
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
  itemsInCart?: ItemInCart[]
}
export type AuthState = {
  isLoggedIn: boolean
  user: User | null
  error: string | null
}
export type RegisterSuccess = {
  type: typeof REGISTER_SUCCESS
  payload: {
    user: User
  }
}
export type RegisterFailure = {
  type: typeof REGISTER_FAILURE
  payload: {
    error: string
  }
}
export type LoginSuccess = {
  type: typeof LOGIN_SUCCESS
  payload: {
    user: User
  }
}
export type LoginFailure = {
  type: typeof LOGIN_FAILURE
  payload: {
    error: string
  }
}
export type AuthenticateSuccess = {
  type: typeof AUTHENTICATE_SUCCESS
  payload: {
    user: User
  }
}
export type AuthenticateFailure = {
  type: typeof AUTHENTICATE_FAILURE
  payload: {
    error: string
  }
}
export type LogoutSuccess = {
  type: typeof LOGOUT_SUCCESS
}
export type UpdateProfileSuccess = {
  type: typeof UPATE_PROFILE_SUCCESS
  payload: {
    user: User
  }
}
export type AddItemToCartSuccessAction = {
  type: typeof ADD_ITEM_TO_CART_SUCCESS
  payload: {
    user: User
  }
}
export type RemoveItemFromCartSuccessAction = {
  type: typeof REMOVE_ITEM_FROM_CART_SUCCESS
  payload: {
    user: User
  }
}
export type DecreaseItemQuantityFromCartSuccessAction = {
  type: typeof DECREASE_ITEM_QUANTITY_FROM_CART_SUCCESS
  payload: {
    user: User
  }
}
export type UpdatePasswordSuccess = {
  type: typeof UPDATE_PASSWORD_SUCCESS
}
export type RequestForgotPasswordSuccess = {
  type: typeof REQUEST_FORGOT_PASSWORD_SUCCESS
}
export type ResetPasswordSuccess = {
  type: typeof RESET_PASSWORD_SUCCESS
}
export type GetUserWithItemsPopulateSuccess = {
  type: typeof GET_USER_WITH_ITEMS_POPULATE_SUCCESS
  payload: {
    user: User
  }
}
// Use this union in reducer
export type UserActions =
  | RegisterSuccess
  | RegisterFailure
  | LoginSuccess
  | LoginFailure
  | AuthenticateSuccess
  | AuthenticateFailure
  | LogoutSuccess
  | UpdateProfileSuccess
  | UpdatePasswordSuccess
  | RequestForgotPasswordSuccess
  | ResetPasswordSuccess
  | AddItemToCartSuccessAction
  | DecreaseItemQuantityFromCartSuccessAction
  | RemoveItemFromCartSuccessAction
  | GetUserWithItemsPopulateSuccess

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

/**
 *  --------------LOCAL --------------
 */
export type GetAllItemsFromCartLocalAction = {
  type: typeof GET_ALL_ITEMS_FROM_CART_LOCAL
  payload: {
    itemsInCart: ItemInCart[]
  }
}

export type LocalActions = GetAllItemsFromCartLocalAction

export type LocalState = {
  itemsInCart: ItemInCart[]
}

export type AppState = {
  local: LocalState
  auth: AuthState
  product: ProductState
  ui: UiState
}
