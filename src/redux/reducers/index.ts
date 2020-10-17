import { combineReducers } from 'redux'

import product from './product'
import ui from './ui'
import auth from './auth'
import local from './local'

const createRootReducer = () =>
  combineReducers({
    product,
    ui,
    auth,
    local
  })

export default createRootReducer
