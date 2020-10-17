import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import Routes from './Routes'
import { userAuthenticate } from './redux/actions/auth'
import { getAllItemsFromLocalStorage } from './redux/actions/local'
import './app.scss'

export default function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(userAuthenticate())
    dispatch(getAllItemsFromLocalStorage())
  }, [])
  return (
    <div className="app-wrapper">
      <Routes />
    </div>
  )
}
