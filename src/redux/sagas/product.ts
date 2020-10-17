import { takeLatest } from 'redux-saga/effects'

import { GET_ALL_PRODUCTS, GetAllProductAction } from '../../types'

function* doSomethingWhenGettingProduct(action: GetAllProductAction) {
  yield console.log(action)
}

export default [takeLatest(GET_ALL_PRODUCTS, doSomethingWhenGettingProduct)]
