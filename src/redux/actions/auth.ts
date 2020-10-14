import { Dispatch } from 'redux'

import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
} from '../../types'
import auth from '../../api/productApi'

// export const register = (username: string, email: string, password: string) =>