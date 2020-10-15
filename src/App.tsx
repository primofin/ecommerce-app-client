import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Routes from './Routes'
import { AppState } from './types'
import { userAuthenticate } from './redux/actions/auth'
import './app.scss'

export default function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(userAuthenticate())
  }, [])
  return (
    <div className="app-wrapper">
      <Routes />
    </div>
  )
}
