import { combineReducers } from 'redux'

import product from './product'
import ui from './ui'
import auth from './auth'

const createRootReducer = () =>
  combineReducers({
    product,
    ui,
    auth
  })

export default createRootReducer
